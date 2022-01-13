/*
 * @Author: sanghangning 
 * @Date: 2019-12-16 10:26:10 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2019-12-16 10:27:14
 */

//  <div @click.native="$refs.snapshot.snapshotToPng()" id="target"></div>
//  <snapshot @finish="getSnapshot" ref="snapshot" target="target"/>

<template>
  <span class="snapshot"></span>
</template>
<script>
import domtoimage from 'dom-to-image'

export default {
  props: {
    target: {
      type: String,
      default: 'target'
    }
  },
  methods: {
    snapshotToJpeg() {
      let _this = this
      domtoimage
        .toJpeg(document.getElementById(this.target), { quality: 0.95 })
        .then(function(dataUrl) {
          _this.$emit('finish', dataUrl)
        })
    },
    snapshotToPng() {
      let _this = this
      domtoimage
        .toPng(document.getElementById(this.target))
        .then(function(dataUrl) {
          _this.$emit('finish', dataUrl)
        })
    },
    snapshotToBlob() {
      let _this = this
      domtoimage
        .toBlob(document.getElementById(this.target))
        .then(function(blob) {
          _this.$emit('finish', blob)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.snapshot {
}
</style>