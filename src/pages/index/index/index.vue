<template>
  <div class="pd15">
    <!-- 二维码弹出层  -->
    <div class="vant-popup">
      <van-popup :show="qrShow" @close="onClose" catchtouchmove="ture">
        <div class="disflex" style="width: 280px;height: 300px;">
          <div style="width: 200px;height: 220px;"><img :src="qrCodeImg"></div>
        </div>
      </van-popup>
    </div>
    <div v-if="show===1">
      <div class="text">您还没有名片，去制作一张帮您积累更多人脉吧！</div>
      <div class="bg-img"><img src="../../../assets/bg-index.png"></div>
      <button class="button2" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">制作电子名片</button>
    </div>
    <div v-if="show===2">
      <div class="text">您还没有名片，去制作一张帮您积累更多人脉吧！</div>
      <div class="bg-img"><img src="../../../assets/bg-index.png"></div>
      <button class="button2" @click="cardGo">制作电子名片</button>
    </div>
    <div v-if="show===3">
      <div class="disflex card-top">
        <div class="flex card-title">我的名片</div>
        <div class="card-text" @click="translate">切换/英文名片</div>
      </div>
      <!-- 模板 start -->
      <div v-if="templateStyle==='1'">
        <div class="card-wrapper" :class="fontStyle==='1'?'fontColor':''" :style="{backgroundImage: 'url('+bg+');'}" @click="cardDetails">
          <div class="disflex">
            <div class="flex">
              <div class="cardName">{{dataInfo.name}}<span class="cardJob">{{dataInfo.position}}</span></div>
              <div class="cardCompany">{{dataInfo.company}}</div>
              <div style="margin-bottom: 5px;">{{dataInfo.phone}}</div>
              <div style="margin-bottom: 5px;">{{dataInfo.email}}</div>
              <div style="width: 178px;">{{dataInfo.address}}</div>
            </div>
            <div>
              <div style="width: 90px;height: 90px;border-radius: 50%;overflow: hidden;margin-right: 20px;"><img :src="dataInfo.avatar"></div>
            </div>
          </div>
          <div class="disflex" style="border-top: 1px solid #E6E6E6;padding: 8px 0 0 8px;margin-top: 8px;">
            <div class="flex">
              <div class="disflex company-logo" style="border: 0;"><img :src="dataInfo.logo"></div>
            </div>
            <div class="disflex">
              <div class="icon28" style="margin-right: 6px;" @click.stop="call"><img src="../../../assets/icon-dh.png"></div>
              <div class="icon28" style="margin-right: 6px;" @click.stop="weChat"><img src="../../../assets/icon-wx.png"></div>
              <div class="icon28" style="margin-right: 6px;" @click.stop="email"><img src="../../../assets/icon-yx.png"></div>
              <div class="icon28" style="margin-right: 6px;" @click.stop="address"><img src="../../../assets/icon-dz.png"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="templateStyle==='2'">
        <div class="card-wrapper" :class="fontStyle==='1'?'fontColor':''" :style="{backgroundImage: 'url('+bg+');'}" @click="cardDetails">
          <div class="disflex">
            <div class="flex">
              <div style="width: 90px;height: 90px;border-radius: 50%;overflow: hidden;margin-right: 20px;"><img :src="dataInfo.avatar"></div>
            </div>
            <div>
              <div class="cardName">{{dataInfo.name}}<span class="cardJob">{{dataInfo.position}}</span></div>
              <div class="cardCompany">{{dataInfo.company}}</div>
              <div style="margin-bottom: 5px;">{{dataInfo.phone}}</div>
              <div style="margin-bottom: 5px;">{{dataInfo.email}}</div>
              <div style="width: 178px;">{{dataInfo.address}}</div>
            </div>
          </div>
          <div class="disflex" style="padding: 8px 0 0 8px;margin-top: 8px;">
            <div class="flex"></div>
            <div class="disflex">
              <div class="icon28" style="margin-right: 6px;" @click.stop="call"><img src="../../../assets/icon-dh.png"></div>
              <div class="icon28" style="margin-right: 6px;" @click.stop="weChat"><img src="../../../assets/icon-wx.png"></div>
              <div class="icon28" style="margin-right: 6px;" @click.stop="email"><img src="../../../assets/icon-yx.png"></div>
              <div class="icon28" style="margin-right: 6px;" @click.stop="address"><img src="../../../assets/icon-dz.png"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="templateStyle==='3'">
        <div class="card-wrapper" :class="fontStyle==='1'?'fontColor':''" :style="{backgroundImage: 'url('+bg+');'}" @click="cardDetails">
          <div class="disflex">
            <div class="flex">
              <div class="cardName">{{dataInfo.name}}<span class="cardJob">{{dataInfo.position}}</span></div>
              <div class="cardCompany">{{dataInfo.company}}</div>
              <div style="margin-bottom: 5px;">{{dataInfo.phone}}</div>
              <div style="margin-bottom: 5px;">{{dataInfo.email}}</div>
              <div style="width: 178px;">{{dataInfo.address}}</div>
            </div>
            <div>
              <div style="width: 90px;height: 90px;border-radius: 50%;overflow: hidden;margin-right: 20px;"><img :src="dataInfo.avatar"></div>
            </div>
          </div>
          <div class="disflex" style="padding: 8px 0 0 8px;margin-top: 8px;">
            <div class="flex"></div>
            <div class="disflex">
              <div class="icon28" style="margin-right: 6px;" @click.stop="call"><img src="../../../assets/icon-dh.png"></div>
              <div class="icon28" style="margin-right: 6px;" @click.stop="weChat"><img src="../../../assets/icon-wx.png"></div>
              <div class="icon28" style="margin-right: 6px;" @click.stop="email"><img src="../../../assets/icon-yx.png"></div>
              <div class="icon28" style="margin-right: 6px;" @click.stop="address"><img src="../../../assets/icon-dz.png"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 模板 end -->
      <div class="qrcode" @click="myQrcode">
        <div class="qrcodeImg"><img src="../../../assets/icon-qrcode.png"></div>
        <div>生成名片码</div>
      </div>
      <button class="button2 disflex" open-type='share'>
        <div style="width:18px;height:18px;margin-right:4px;"><img src="../../../assets/icon-fs.png"></div>发给好友
      </button>
    </div>
  </div>
</template>

<script>
// var amapFile = require('../../../utils/amap-wx.js')
export default {
  data () {
    return {
      show: 1,
      qrShow: false,
      qrCodeImg: '',
      userInfo: {},
      dataInfo: {},
      state: 0,
      templateStyle: '1',
      fontStyle: '1',
      bg: ''
    }
  },
  onLoad (options) {
    console.log(options)
    var self = this
    self.userInfo = wx.getStorageSync('userInfo')
    wx.checkSession({
      success (res) {
        console.log(res)
        if (res.errMsg === 'checkSession:ok' && self.userInfo) {

        }
      },
      fail (res) {
        // session_key 已经失效，需要重新执行登录流程
        console.log(res)
        wx.removeStorageSync('userInfo')
      }
    })
  },
  onShow () {
    this.qrShow = false
    this.cardInfo()
  },
  onUnload () {
    this.state = 0
    this.qrShow = false
  },
  onShareAppMessage (res) {
    // 转发分享
    let userId = wx.getStorageSync('userInfo').userId
    return {
      title: `${this.dataInfo.name}的名片`,
      imageUrl: '',
      path: 'pages/card/shareCard/main?userId=' + userId,
      success: function (res) {
        console.log('成功', res)
      }
    }
  },
  methods: {
    cardInfo () {
      let self = this
      self.userInfo = wx.getStorageSync('userInfo')
      if (self.userInfo) {
        self.$http.get({
          url: `/vcardInfo/selectById?id=${self.userInfo.userId}`
        }).then(res => {
          console.log(res, '2')
          self.show = 2
          if (res.data.name !== '' && res.data.position !== '' && res.data.company !== '' && res.data.email !== '') {
            self.dataInfo = res.data
            console.log('3')
            self.show = 3
            self.$http.get({
              url: `/vcardBgimage/getImageById?id=${res.data.bgImgId}`
            }).then(res => {
              console.log(res)
              self.bg = res.data.image
              if (res.data.name === '1') {
                self.fontStyle = '2'
              } else {
                self.fontStyle = '1'
              }
            })
            self.$http.get({
              url: `/vcardTemplate/getTemplateById?id=${res.data.templateId}`
            }).then(res => {
              console.log(res)
              self.templateStyle = res.data.name
            })
          }
        })
      }
    },
    onClose () {
      this.qrShow = false
    },
    myQrcode () {
      this.qrShow = true
      this.$http.get({
        url: `/xcxShareQRCode/${this.userInfo.userId}`
      }).then(res => {
        console.log(res)
        this.qrCodeImg = res.data.shareQR
      })
    },
    cardDetails () {
      wx.navigateTo({
        url: `../../my/details/main?userId=${this.userInfo.userId}`
      })
    },
    cardGo () {
      wx.navigateTo({
        url: '../myCard/main'
      })
    },
    call () {
      wx.makePhoneCall({
        phoneNumber: this.dataInfo.phone
      })
    },
    weChat () {
      wx.setClipboardData({
        data: this.dataInfo.wxNumber,
        success (res) {
          console.log(res)
          wx.getClipboardData({
            success (res) {
              console.log(res.data) // data
            }
          })
        }
      })
    },
    email () {
      wx.setClipboardData({
        data: this.dataInfo.email,
        success (res) {
          console.log(res)
          wx.getClipboardData({
            success (res) {
              console.log(res.data) // data
            }
          })
        }
      })
    },
    address () {
      wx.request({// 高德地图API地理编码
        url: `https://restapi.amap.com/v3/geocode/geo?key=ae6584b7c9387ba0de4d43ff5bb911be&address=${this.dataInfo.address}`,
        success (res) {
          let location = res.data.geocodes[0].location.split(',')
          let latitude = parseFloat(location[1])
          let longitude = parseFloat(location[0])
          wx.openLocation({ // 打开地图显示位置
            latitude: latitude,
            longitude: longitude,
            name: res.data.geocodes[0].formatted_address,
            address: res.data.geocodes[0].formatted_address,
            scale: 20
          })
        },
        fail: function (res) {
          console.log('获取地理位置失败')
        }
      })
    },
    translate () {
      if (this.state === 0) {
        this.$http
          .get({
            url: `/vcardInfo/selectVcardEnById?id=${this.userInfo.userId}`
          })
          .then(res => {
            res.data.album = res.data.album.split(',')
            res.data.name = res.data.nameEn
            res.data.position = res.data.positionEn
            res.data.company = res.data.companyEn
            res.data.address = res.data.addressEn
            res.data.content = res.data.contentEn
            res.data.companyDetail = res.data.companyDetailEn
            this.dataInfo = res.data
            this.state = 1
          })
      } else {
        this.$http
          .get({
            url: `/vcardInfo/selectVcardById?id=${this.userInfo.userId}`
          })
          .then(res => {
            res.data.album = res.data.album.split(',')
            this.dataInfo = res.data
            this.state = 0
          })
      }
    },
    getPhoneNumber (e) {
      console.log(e)
      if (e.mp.detail.errMsg === 'getPhoneNumber:ok') {
        wx.login({
          success: res => {
            this.$http.post({
              url: '/xcxLoginVcard',
              data: {
                code: res.code,
                ivStr: e.mp.detail.iv,
                encDataStr: e.mp.detail.encryptedData
              }
            }).then(res => {
              console.log(res)
              if (res.code === 200) {
                wx.setStorageSync('userInfo', res.data)
                this.userInfo = res.data
                // let self = this
                this.$http.get({
                  url: `/vcardInfo/selectById?id=${res.data.userId}`
                }).then(res => {
                  console.log(res, '2')
                  this.show = 2
                  if (res.data.name !== '' && res.data.position !== '' && res.data.company !== '' && res.data.email !== '') {
                    this.dataInfo = res.data
                    console.log('3')
                    this.show = 3
                    this.$http.get({
                      url: `/vcardBgimage/getImageById?id=${res.data.bgImgId}`
                    }).then(res => {
                      console.log(res)
                      this.bg = res.data.image
                      if (res.data.name === '1') {
                        this.fontStyle = '2'
                      } else {
                        this.fontStyle = '1'
                      }
                    })
                    this.$http.get({
                      url: `/vcardTemplate/getTemplateById?id=${res.data.templateId}`
                    }).then(res => {
                      console.log(res)
                      this.templateStyle = res.data.name
                    })
                  } else {
                    wx.navigateTo({
                      url: '/pages/index/myCard/main'
                    })
                  }
                })
              } else {
                wx.showToast({
                  title: '登陆失败，请重新登陆',
                  icon: 'none',
                  duration: 2000,
                  mask: false
                })
              }
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  width: 200px;
  line-height: 1.6;
  text-align: center;
  margin: 66px auto 0;
  font-size: 16px;
}
.bg-img {
  width: 278px;
  height: 220px;
  margin: 34px auto 28px;
}
.card-top {
  margin-bottom: 8px;
  .card-title {
    font-size: 16px;
    font-weight: bold;
  }
  .card-text {
    font-size: 12px;
    color: #707070;
  }
}
.cardButton {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.qrcode {
  text-align: center;
  margin: 30px 0 35px;
  .qrcodeImg {
    width: 22px;
    height: 22px;
    margin: 0 auto 5px;
  }
}
</style>
