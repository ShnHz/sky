import axios from "axios";

let _app = null
// 中断重复请求
const pendingRequest = new Map();

function generateReqKey(config) {
  const {
    method,
    url,
    params,
    data
  } = config;
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join(
    "&"
  );
}

function addPendingRequest(config) {
  const requestKey = generateReqKey(config);
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingRequest.has(requestKey)) {
        pendingRequest.set(requestKey, cancel);
      }
    });
}

function removePendingRequest(config) {
  const requestKey = generateReqKey(config);
  if (pendingRequest.has(requestKey)) {
    const cancel = pendingRequest.get(requestKey);
    cancel(requestKey);
    pendingRequest.delete(requestKey);
  }
}

// http request 拦截器
axios.interceptors.request.use(
  config => {
    removePendingRequest(config); // 检查是否存在重复请求，若存在则取消已发的请求
    addPendingRequest(config); // 把当前请求添加到pendingRequest对象中
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {
    removePendingRequest(response.config); // 从pendingRequest对象中移除请求

    // 跳转登录操作
    // if (!response.data.success && !response.data.valid) {
    //   location.href = `${window.location.origin}/login`
    // }
    if (response.data.success) {
      return response;
    } else {
      _app.config.globalProperties.$message.error(response.data.message);
      throw new Error(response.data.message)
    }
  },
  error => {
    removePendingRequest(error.config || {}); // 从pendingRequest对象中移除请求
    if (axios.isCancel(error)) {
      console.log("已取消的重复请求：" + error.message);
    } else {
      // 添加异常处理
    }
    return Promise.reject(error);
  }
);

export default function (app) {
  _app = app
  app.config.globalProperties.$http = axios;
}