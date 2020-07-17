<template>
  <div>
    <navigation
    :navBackgroundColor="''"
    :titleColor="'#fff'"
    :title="'我的'"
    :back-visible="false"
    :home-path="false"></navigation>
    <div class="bgc" :style="{height: titleBarHeight + 180 + 'px'}"></div>
    <div class="pd15" style="position: absolute;width: 92%;" :style="{top: titleBarHeight + 85 + 'px'}">
      <div class="disflex card-top">
        <div class="flex card-title"></div>
        <div class="card-text" @click="translate">切换/英文名片</div>
      </div>
      <!-- 模板 start -->
      <div v-if="templateStyle==='1'">
        <div class="card-wrapper" :class="fontStyle==='1'?'fontColor':''" :style="{backgroundImage: 'url('+bg+');'}" >
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
        <div class="card-wrapper" :class="fontStyle==='1'?'fontColor':''" :style="{backgroundImage: 'url('+bg+');'}">
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
        <div class="card-wrapper" :class="fontStyle==='1'?'fontColor':''" :style="{backgroundImage: 'url('+bg+');'}" >
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
      <div style="margin: 20px 0;">
        <div v-if="collect===0">
          <button class="button2" v-if="show" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">登录</button>
          <button class="button2" v-else @click="collection">收藏名片</button>
        </div>
        <div v-else>
          <button class="button2">名片已收藏</button>
        </div>
      </div>
      <div class="detail-item">
        <div class="item-title flex-align"><span class="item-i"></span>个人简介</div>
        <div class="item-text">{{dataInfo.content}}</div>
      </div>
      <div class="detail-item">
        <div class="item-title flex-align"><span class="item-i"></span>公司介绍</div>
        <div class="company-wrapper">
          <div class="item-img"><img :src="dataInfo.companyPic"></div>
          <div style="padding: 15px 12px;">
            <div class="item-company">{{dataInfo.company}}</div>
            <div class="item-text">{{dataInfo.companyDetail}}</div>
          </div>
        </div>
      </div>
      <div class="detail-item">
        <div class="item-title flex-align"><span class="item-i"></span>我的相册</div>
        <div class="item-album"><img src="../../../assets/bg-index.png"></div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from '../../../components/navigationShare'
export default {
  data () {
    return {
      titleBarHeight: '',
      dataInfo: {},
      userId: '',
      state: 0,
      templateStyle: '1',
      fontStyle: '1',
      bg: '',
      show: false,
      collect: 0
    }
  },
  components: {
    navigation
  },
  onLoad (options) {
    var self = this
    wx.getSystemInfo({
      success (system) {
        if (system.statusBarHeight === 44) {
          self.titleBarHeight = 24
        }
      }
    })
    self.userId = options.userId
    if (options.userId) {
      self.userId = options.userId
    } else {
      let newId = options.scene.split('%3D')
      self.userId = newId[1]
    }
    self.$http.get({
      url: `/vcardInfo/getVcardById?id=${self.userId}`
    }).then(res => {
      res.data[0].album = res.data[0].album.split(',')
      self.dataInfo = res.data[0]
      this.$http.get({
        url: `/vcardBgimage/getImageById?id=${res.data[0].bgImgId}`
      }).then(res => {
        this.bg = res.data.image
        if (res.data.name === '1') {
          this.fontStyle = '2'
        } else {
          this.fontStyle = '1'
        }
      })
      this.$http.get({
        url: `/vcardTemplate/getTemplateById?id=${res.data[0].templateId}`
      }).then(res => {
        this.templateStyle = res.data.name
      })
    })
  },
  onShow () {
    let userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.show = false
      this.$http.post({
        url: '/vcardRelation/isFav',
        data: {
          xcxOpenId: userInfo.openId,
          vcardId: this.userId
        }
      }).then(res => {
        console.log(res.data)
        this.collect = res.data
      })
    } else {
      this.show = true
    }
  },
  methods: {
    translate () {
      if (this.state === 0) {
        this.$http.get({
          url: `/vcardInfo/getVcardById?id=${this.userId}`
        }).then(res => {
          res.data[1].album = res.data[1].album.split(',')
          res.data[1].name = res.data[1].nameEn
          res.data[1].position = res.data[1].positionEn
          res.data[1].company = res.data[1].companyEn
          res.data[1].address = res.data[1].addressEn
          res.data[1].content = res.data[1].contentEn
          res.data[1].companyDetail = res.data[1].companyDetailEn
          this.dataInfo = res.data[1]
          this.state = 1
        })
      } else {
        this.$http.get({
          url: `/vcardInfo/getVcardById?id=${this.userId}`
        }).then(res => {
          res.data[0].album = res.data[0].album.split(',')
          this.dataInfo = res.data[0]
          this.state = 0
        })
      }
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
        url: `https://restapi.amap.com/v3/geocode/geo?key=4260cc1cb0fb6b113e894ab08aa75300&address=${this.dataInfo.address}`,
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
    collection () {
      let userInfo = wx.getStorageSync('userInfo')
      this.$http.post({
        url: '/vcardRelation/addVcardRelation',
        data: {
          xcxOpenId: userInfo.openId,
          vcardId: this.userId
        }
      }).then(res => {
        console.log(res)
        if (res.code === 200) {
          wx.showToast({
            title: '名片收藏成功',
            icon: 'success',
            duration: 1500,
            success: (result) => {
              setTimeout(() => {
                wx.switchTab({
                  url: '../index/main'
                })
              }, 1500)
            }
          })
        }
      })
    },
    getPhoneNumber (e) {
      console.log(e)
      if (e.mp.detail.errMsg === 'getPhoneNumber:ok') {
        wx.login({
          success: (res) => {
            this.$http.post({
              url: '/xcxLoginVcard',
              data: {
                code: res.code,
                ivStr: e.mp.detail.iv,
                encDataStr: e.mp.detail.encryptedData
              }
            }).then(res => {
              if (res.code === 200) {
                console.log(res)
                wx.setStorageSync('userInfo', res.data)
                this.show = false
                this.$http.post({
                  url: '/vcardRelation/isFav',
                  data: {
                    xcxOpenId: res.data.openId,
                    vcardId: this.userId
                  }
                }).then(res => {
                  console.log(res.data)
                  this.collect = res.data
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
.bgc {height: 180px;background: linear-gradient(270deg,rgba(36,135,255,1) 0%,rgba(10,190,235,1) 100%);}
.detail-item {margin-bottom: 30px;
  .item-title {font-size: 16px;color: #0B111F;margin-bottom: 15px;
    .item-i {width: 5px;height: 18px;border-radius: 3px;background: #2487FF;margin-right: 5px;}
  }
  .item-text {color: #707070;font-size: 12px;}
  .company-wrapper {background: #F4F4F4;border-radius: 28px;box-shadow: 0 4px 6px 0 #E6E6E7;overflow: hidden;
    .item-img {height: 140px;}
    .item-company {font-size: 16px;color: #0B111F;margin: 14px 0;}
  }
  .item-album {height: 200px;border-radius: 28px;overflow: hidden;margin-bottom: 10px;}
}
</style>
