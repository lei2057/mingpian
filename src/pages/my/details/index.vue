<template>
  <div class="pd15">
    <div class="disflex card-top">
      <div class="flex card-title"></div>
      <div class="card-text" @click="translate">切换/英文名片</div>
    </div>
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
      <div class="item-album" v-for="item in dataInfo.album" :key="item"><img :src="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      dataInfo: {},
      userId: '',
      state: 0,
      templateStyle: '1',
      fontStyle: '1',
      bg: ''
    }
  },
  onLoad (options) {
    console.log(options)
    this.userId = options.userId
    this.userInfo = wx.getStorageSync('userInfo')
    this.$http.get({
      url: `/vcardInfo/selectById?id=${options.userId}`
    }).then(res => {
      console.log(res)
      res.data.album = res.data.album.split(',')
      this.dataInfo = res.data
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
    })
  },
  onShow () {

  },
  onUnload () {
    this.state = 0
  },
  methods: {
    translate () {
      if (this.state === 0) {
        this.$http.get({
          url: `/vcardInfo/selectVcardEnById?id=${this.userId}`
        }).then(res => {
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
        this.$http.get({
          url: `/vcardInfo/selectVcardById?id=${this.userId}`
        }).then(res => {
          res.data.album = res.data.album.split(',')
          this.dataInfo = res.data
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
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-item {margin-bottom: 30px;
  .item-title {font-size: 16px;color: #0B111F;margin-bottom: 15px;
    .item-i {width: 5px;height: 18px;border-radius: 3px;background: #2487FF;margin-right: 5px;}
  }
  .item-text {color: #707070;font-size: 12px;}
  .company-wrapper {background: #F4F4F4;border-radius: 20px;box-shadow: 0 4px 6px 0 #E6E6E7;overflow: hidden;
    .item-img {height: 140px;}
    .item-company {font-size: 16px;color: #0B111F;margin: 14px 0;}
  }
  .item-album {height: 150px;border-radius: 20px;overflow: hidden;margin-bottom: 10px;}
}
</style>
