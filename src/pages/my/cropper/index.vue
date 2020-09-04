<template>
  <div>
    <mpvue-cropper 
      ref="cropper"
      :option="cropperOpt"
      @ready="cropperReady"
      @beforeDraw="cropperBeforeDraw"
      @beforeImageLoad="cropperBeforeImageLoad"
      @beforeLoad="cropperLoad"
      ></mpvue-cropper>
    <div class="buttonBg"></div>
    <div class="cropper-buttons">
      <button
        class="upload btn"
        @tap="uploadTap">
        上传图片
      </button>
      <button
        class="getCropperImage btn"
        :disabled="isDisable"
        :style="{ backgroundColor: cropperOpt.boundStyle.color }"
        @tap="getCropperImage">
        生成图片
      </button>
    </div>
  </div>
</template>

<script>
import MpvueCropper from 'mpvue-cropper'
import host from '@/utils/request'
import md5 from 'md5'
let wecropper
const device = wx.getSystemInfoSync() // 获取设备信息
const width = device.windowWidth // 示例为一个与屏幕等宽的正方形裁剪框
let height = device.windowHeight
if (device.windowHeight === device.screenHeight) {
  height = height - device.statusBarHeight - 120
} else {
  height = height - 60
}
const date = new Date()
const timeNum = Math.round(date.getTime() / 1000)// 十位时间戳
export default {
  data () {
    return {
      cropperOpt: {
        id: 'cropper', // 用于手势操作的canvas组件标识符
        targetId: 'targetCropper', // 用于用于生成截图的canvas组件标识符
        pixelRatio: device.pixelRatio, // 传入设备像素比
        width, // 画布宽度
        height, // 画布高度
        scale: 2.5, // 最大缩放倍数
        zoom: 8, // 缩放系数
        cut: {
          x: (width - 200) / 2, // 裁剪框x轴起点
          y: (width - 200) / 2, // 裁剪框y轴期起点
          width: 200, // 裁剪框宽度
          height: 200 // 裁剪框高度
        },
        boundStyle: {
          color: '#04b00f',
          mask: 'rgba(0,0,0,0.8)',
          lineWidth: 1
        }
      },
      pageKey: 0,
      host: '',
      isDisable: false,
      show: false
    }
  },
  components: {
    MpvueCropper
  },
  onLoad (options) {
    console.log(options)
    this.pageKey = options.key
  },
  onShow () {
    this.host = host.host.split('vcard')[0]
  },
  mounted () {
    wecropper = this.$refs.cropper
  },
  methods: {
    cropperReady (...args) {
      console.log('cropper ready!')
    },
    cropperBeforeImageLoad (...args) {
      console.log('before image load')
    },
    cropperLoad (...args) {
      console.log('image loaded')
    },
    cropperBeforeDraw (...args) {
      // Todo: 绘制水印等等
    },
    uploadTap () {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: (res) => {
          const src = res.tempFilePaths[0]
          //  获取裁剪图片资源后，给data添加src属性及其值
          if (src) {
            this.show = true
            wecropper.pushOrigin(src)
          }
        }
      })
    },
    getCropperImage () {
      let prefix
      let userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        prefix = userInfo.userId
      } else {
        prefix = 88
      }
      var that = this
      that.isDisable = true
      setTimeout(() => {
        that.isDisable = false
      }, 2000)

      wecropper.getCropperImage(src => {
        console.log(src, 'wancheng')
        if (that.show) {
          wx.showLoading({
            title: '上传中...'
          })
          wx.uploadFile({
            url: that.host + 'tool/oss/xcxUpload',
            filePath: src,
            name: 'file',
            header: {
              'content-type': 'multipart/form-data',
              'sign': md5('t=' + timeNum + '&jiatu2019yinji'),
              'timeStrap': timeNum,
              'token': userInfo.token
            },
            formData: {
              value: src,
              prefix: prefix
            },
            success (res) {
              let data = JSON.parse(res.data)
              if (data.code === 200) {
                wx.hideLoading()
                if (that.pageKey === '1') {
                  wx.redirectTo({
                    url: '../../index/myCard/main?avatar=' + data.data.url
                  })
                } else if (that.pageKey === '2') {
                  wx.redirectTo({
                    url: '../../index/myCard/main?logo=' + data.data.url
                  })
                } else if (that.pageKey === '3') {
                  wx.redirectTo({
                    url: '../personal/main?logo=' + data.data.url
                  })
                } else {
                  wx.redirectTo({
                    url: '../personal/main?avatar=' + data.data.url
                  })
                }
              } else {
                wx.showModal({
                  title: '错误提示',
                  content: data.message,
                  showCancel: false,
                  success (res) { }
                })
              }
            },
            fail (res) {
              wx.hideLoading()
              wx.showModal({
                title: '错误提示',
                content: '上传图片失败!',
                showCancel: false,
                success (res) { }
              })
            }
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '请上传图片',
            showCancel: false,
            success (res) { }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cropper-wrapper{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #e5e5e5;
}

.buttonBg {
    background-color: #000;
    width: 100%;
    height: 300px;
    position: fixed;
    bottom: 0;
    left: 0;
}

.cropper-buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 0 20rpx;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 9;
}

.cropper-buttons .upload{
    border: 1px solid;
    border-radius: 2px;
}

.cropper{
    position: absolute;
    top: 0;
    left: 0;
}

.btn{
    height: 30px;
    line-height: 30px;
    padding: 0 24rpx;
    border-radius: 2px;
    color: #ffffff;
    margin: 0;
    text-align: center;
}
</style>
