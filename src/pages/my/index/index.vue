<template>
  <div>
    <navigation
    :navBackgroundColor="''"
    :titleColor="'#fff'"
    :title="'我的'"
    :back-visible="false"
    :home-path="false"></navigation>
    <div class="bgc" :style="{height: titleBarHeight + 180 + 'px;'}"></div>
    <div class="pd15" style="position: absolute;width: 92%;" :style="{top: titleBarHeight + 85 + 'px;'}">
      <div v-if="show===1">
        <div class="card-wrapper" style="background: #fff;">
          <div class="disflex">
            <div class="flex">
              <div class="cardName">姓名<span class="cardJob">职位</span></div>
              <div class="cardCompany tiao" style="width: 128px;"></div>
              <div class="tiao" style="margin-bottom: 5px;width: 104px;"></div>
              <div class="tiao" style="margin-bottom: 5px;width: 104px;"></div>
              <div class="tiao" style="width: 200px;"></div>
            </div>
            <div>
              <div class="disflex" style="width: 90px;height: 90px;border-radius: 50%;overflow: hidden;margin-right: 20px;background: #E9E9E9;">个人头像</div>
            </div>
          </div>
          <div class="disflex" style="border-top: 1px solid #E6E6E6;padding: 8px 0 0 8px;margin-top: 8px;">
            <div class="flex">
              <div class="disflex company-logo">logo</div>
            </div>
            <div class="disflex">
              <div class="icon28" style="margin-right: 6px;background: #E9E9E9;border-radius: 50%;"></div>
              <div class="icon28" style="margin-right: 6px;background: #E9E9E9;border-radius: 50%;"></div>
              <div class="icon28" style="margin-right: 6px;background: #E9E9E9;border-radius: 50%;"></div>
              <div class="icon28" style="margin-right: 6px;background: #E9E9E9;border-radius: 50%;"></div>
            </div>
          </div>
        </div>
        <button class="button2" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">登陆</button>
      </div>
      <div v-else-if="show===2">
        <div class="card-wrapper" style="background: #fff;">
          <div class="disflex">
            <div class="flex">
              <div class="cardName">姓名<span class="cardJob">职位</span></div>
              <div class="cardCompany tiao" style="width: 128px;"></div>
              <div class="tiao" style="margin-bottom: 5px;width: 104px;"></div>
              <div class="tiao" style="margin-bottom: 5px;width: 104px;"></div>
              <div class="tiao" style="width: 200px;"></div>
            </div>
            <div>
              <div class="disflex" style="width: 90px;height: 90px;border-radius: 50%;overflow: hidden;margin-right: 20px;background: #E9E9E9;">个人头像</div>
            </div>
          </div>
          <div class="disflex" style="border-top: 1px solid #E6E6E6;padding: 8px 0 0 8px;margin-top: 8px;">
            <div class="flex">
              <div class="disflex company-logo">logo</div>
            </div>
            <div class="disflex">
              <div class="icon28" style="margin-right: 6px;background: #E9E9E9;border-radius: 50%;"></div>
              <div class="icon28" style="margin-right: 6px;background: #E9E9E9;border-radius: 50%;"></div>
              <div class="icon28" style="margin-right: 6px;background: #E9E9E9;border-radius: 50%;"></div>
              <div class="icon28" style="margin-right: 6px;background: #E9E9E9;border-radius: 50%;"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <!-- 模板 start -->
        <div v-if="templateStyle==='1'">
          <div class="card-wrapper" :class="fontStyle==='1'?'fontColor':''" :style="{backgroundImage: 'url('+bg+');'}">
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
          <div class="card-wrapper" :style="{backgroundImage: 'url('+bg+');'}">
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
          <div class="card-wrapper" :style="{backgroundImage: 'url('+bg+');'}">
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
      </div>
      <div class="cardItem-wrapper">
        <div class="disflex" style="margin-bottom: 3px;">
          <div class="flex-align" @click="details"><div class="icon40"><img src="../../../assets/icon-bj.png"></div>名片编辑</div>
          <div class="flex"></div>
          <div class="flex-align" style="margin-right: 25px;" @click="templateSelect"><div class="icon40"><img src="../../../assets/icon-mpmb.png"></div>名片模板</div>
        </div>
        <!-- <div class="disflex">
          <div class="flex-align" style="margin-right: 25px;"><div class="icon40"><img src="../../../assets/icon-fsmp.png"></div>发送名片</div>
          <div class="flex"></div>
        </div> -->
      </div>
      <div>
        <div class="disflex item" @click="help">
          <div class="icon24"><img src="../../../assets/icon-sybz.png"></div>
          <div class="flex">使用帮助</div>
          <div class="icon11"><img src="../../../assets/icon-r.png"></div>
        </div>
        <button class="disflex item" open-type='share'>
          <div class="icon24"><img src="../../../assets/icon-tjhy.png"></div>
          <div class="flex">推荐给朋友</div>
          <div class="icon11"><img src="../../../assets/icon-r.png"></div>
        </button>
        <!-- <button class="button2 disflex" open-type='share'><div style="width:18px;height:18px;margin-right:4px;"><img src="../../../assets/icon-fs.png"></div>发给好友</button> -->
      </div>
      <van-action-sheet :show="show1" @close="onClose" title="我的名片">
        <div style="padding: 15px;">
          <div @click="submit" style="width:60px;height:24px;line-height: 24px;background:rgba(36,135,255,1);border-radius:15px;text-align: center;color: #fff;float: right;">确定</div>
          <div>
            <div class="item-title flex-align"><span class="item-i"></span>选择模板</div>
            <div class="model-wrapper">
              <div class="model-item" v-for="(item,index) in templateInfo" :key="index" style="position: relative;" @click="templateOpt(index,item)">
                <div style="height: 62px;margin-bottom: 8px;"><img :src="item.template"></div>
                <div class="active-wrapper disflex" v-show="index === templateIndex||item.id === dataInfo.templateId"><div class="active-icon"><img src="../../../assets/icon-xz.png"></div></div>
                <!-- <div>默认</div> -->
              </div>
            </div>
          </div>
          <div>
            <div class="item-title flex-align"><span class="item-i"></span>选择背景</div>
            <div class="background-wrapper">
              <div class="background-item" v-for="(item,index) in backgroundInfo" :key="index" style="position: relative;" @click="backgroundOpt(index,item)">
                <img :src="item.image" :alt="item.name">
                <div class="active-wrapper disflex" v-show="index === backgroundIndex||item.id === dataInfo.bgImgId"><div class="active-icon"><img src="../../../assets/icon-xz.png"></div></div>
              </div>
            </div>
          </div>
        </div>
      </van-action-sheet>
    </div>
  </div>
</template>

<script>
import navigation from '../../../components/navigation'
export default {
  data () {
    return {
      show: 1,
      titleBarHeight: '',
      dataInfo: {},
      userInfo: {},
      templateStyle: '1',
      fontStyle: '1',
      bg: '',
      show1: false,
      backgroundInfo: [],
      templateInfo: [],
      backgroundIndex: -1,
      templateIndex: -1,
      bgId: '',
      templateId: ''
    }
  },
  components: {
    navigation
  },
  onLoad () {
    var self = this
    wx.checkSession({
      success (res) {
        console.log(res)
        if (wx.getStorageSync('userInfo')) {
          self.show = 3
        }
      },
      fail (res) {
        // session_key 已经失效，需要重新执行登录流程
        console.log(res)
        self.show = 1
        wx.removeStorageSync('userInfo')
      }
    })
    wx.getSystemInfo({
      success (system) {
        if (system.statusBarHeight === 44) {
          self.titleBarHeight = 24
        }
      }
    })
  },
  onShow () {
    this.userInfo = wx.getStorageSync('userInfo')
    this.$http.get({
      url: '/vcardBgimage/getAllImage',
      header: this.userInfo.token
    }).then(res => {
      this.backgroundInfo = res.data
    })
    this.$http.get({
      url: '/vcardTemplate/getAllTemplate',
      header: this.userInfo.token
    }).then(res => {
      this.templateInfo = res.data
    })
    if (this.userInfo) {
      this.$http.get({
        url: `/vcardInfo/selectById?id=${this.userInfo.userId}`,
        header: this.userInfo.token
      }).then(res => {
        console.log(res.data)
        this.show = 2
        if (res.data.name !== '' && res.data.position !== '' && res.data.company !== '' && res.data.email !== '') {
          this.dataInfo = res.data
          this.show = 3
          this.$http.get({
            url: `/vcardBgimage/getImageById?id=${res.data.bgImgId}`,
            header: this.userInfo.token
          }).then(res => {
          // console.log(res)
            this.bg = res.data.image
            if (res.data.name === '1') {
              this.fontStyle = '2'
            } else {
              this.fontStyle = '1'
            }
          })
          this.$http.get({
            url: `/vcardTemplate/getTemplateById?id=${res.data.templateId}`,
            header: this.userInfo.token
          }).then(res => {
          // console.log(res)
            this.templateStyle = res.data.name
          })
        }
      })
    }
  },
  onShareAppMessage () { // 转发分享

  },
  methods: {
    onClose () {
      this.show1 = false
      wx.showTabBar({
        animation: false,
        success: (result) => {

        },
        fail: () => {},
        complete: () => {}
      })
    },
    templateSelect () {
      let userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        this.show1 = true
        wx.hideTabBar({
          animation: false,
          success: (result) => {

          },
          fail: () => {},
          complete: () => {}
        })
      } else {
        wx.showToast({
          title: '登陆即可使用',
          icon: 'none',
          duration: 2000,
          mask: false
        })
      }
    },
    templateOpt (index, item) {
      console.log(item)
      this.templateIndex = index
      this.templateStyle = item.name
      this.templateId = item.id
    },
    backgroundOpt (index, item) {
      console.log(item)
      this.backgroundIndex = index
      this.bg = item.image
      this.bgId = item.id
    },
    submit () {
      let userInfo = wx.getStorageSync('userInfo')
      this.$http.get({
        url: `/vcardBgimage/saveImageId?userId=${userInfo.userId}&id=${this.bgId}`,
        header: userInfo.token
      }).then(res => {
        console.log(res)
      })
      this.$http.get({
        url: `/vcardTemplate/saveTemplateId?userId=${userInfo.userId}&id=${this.templateId}`,
        header: userInfo.token
      }).then(res => {
        console.log(res)
      })
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 1500
      })
      this.show1 = false
      wx.showTabBar({
        animation: false,
        success: (result) => {

        },
        fail: () => {},
        complete: () => {}
      })
    },
    details () {
      let userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        wx.navigateTo({url: '../personal/main'})
      } else {
        wx.showToast({
          title: '登陆即可使用',
          icon: 'none',
          duration: 2000,
          mask: false
        })
      }
    },
    help () {
      wx.navigateTo({url: '../help/main'})
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
    getPhoneNumber (e) {
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
              console.log(res)
              wx.setStorageSync('userInfo', res.data)
              this.$http.get({
                url: `/vcardInfo/selectById?id=${res.data.userId}`,
                header: res.data.token
              }).then(val => {
                this.show = 2
                if (val.data.name !== '' && val.data.position !== '' && val.data.company !== '' && val.data.email !== '') {
                  this.dataInfo = val.data
                  this.show = 3
                  this.$http.get({
                    url: `/vcardBgimage/getImageById?id=${val.data.bgImgId}`,
                    header: res.data.token
                  }).then(rese => {
                    this.bg = rese.data.image
                    if (rese.data.name === '1') {
                      this.fontStyle = '2'
                    } else {
                      this.fontStyle = '1'
                    }
                  })
                  this.$http.get({
                    url: `/vcardTemplate/getTemplateById?id=${val.data.templateId}`,
                    header: res.data.token
                  }).then(rese => {
                    this.templateStyle = rese.data.name
                  })
                }
              })
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
.icon11 {width: 11px;height: 11px;}
.icon24 {width: 24px;height: 24px;margin-right: 5px;}
.icon40 {width: 40px;height: 40px;}
.cardItem-wrapper {padding: 12px 0;}
.item {border-bottom: 1px solid #E7E7E7;margin-bottom: 15px;padding: 5px 0;}
.model-wrapper {display: flex;flex-direction: row;flex-wrap: wrap;margin: 0 -6px;margin-bottom: 26px;
  .model-item {width: 30.333%;color: #666;margin: 5px;text-align: center;position: relative;}
}
.background-wrapper {display: flex;flex-direction: row;flex-wrap: wrap;margin: 0 -6px;margin-bottom: 26px;
  .background-item {width: 30.333%;height: 62px;border-radius: 8px;overflow: hidden;margin: 5px;}
}
.active-wrapper {width: 100%;height: 62px;background: rgba(0,0,0,0.5);border-radius: 8px;position: absolute;top: 0;
  .active-icon {width:18px;height:18px;}
}
.avatar-seat {width: 90px;height: 90px;border:1px dashed #707070;border-radius: 50%;font-size: 16px;overflow: hidden;}
.tiao {height:14px;background:rgba(233,233,233,1);border-radius:7px;}
</style>
