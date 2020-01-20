<template>
  <div class="pd15">
    <div v-if="templateStyle==='1'">
      <div class="template-wrapper" :class="fontStyle==='1'?'fontColor':''" :style="{backgroundImage: 'url('+bg+');'}">
        <div class="disflex">
          <div class="flex">
            <div class="cardName">吉祥寺<span class="cardJob">小美工</span></div>
            <div class="cardCompany">佳途科技(杭州)有限公司</div>
            <div style="margin-bottom: 5px;">138-5784-4501</div>
            <div style="margin-bottom: 5px;">xumeng@jiatu.com</div>
            <div style="width: 178px;">浙江省杭州市拱墅区通运路999号汽车电商园B座601-1</div>
          </div>
          <div @click="cropper">
            <div class="disflex avatar-seat" v-if="!dataInfo.avatar">点击传照片</div>
            <div class="avatar-seat" v-else><img :src="dataInfo.avatar"></div>
          </div>
        </div>
        <div class="disflex" style="border-top: 1px solid #E6E6E6;padding: 8px 0 0 8px;margin-top: 8px;">
          <div class="flex" @click="cropper1">
            <div class="disflex company-logo" v-if="!dataInfo.logo">点击传LOGO</div>
            <div class="company-logo" v-else><img :src="dataInfo.logo"></div>
          </div>
          <div class="disflex">
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-dh.png"></div>
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-wx.png"></div>
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-yx.png"></div>
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-dz.png"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="templateStyle==='2'">
      <div class="template-wrapper" :class="fontStyle==='1'?'fontColor':''" :style="{backgroundImage: 'url('+bg+');'}">
        <div class="disflex">
          <div class="flex" @click="cropper">
            <div class="disflex avatar-seat" v-if="!dataInfo.avatar">点击传照片</div>
            <div class="avatar-seat" v-else><img :src="dataInfo.avatar"></div>
          </div>
          <div>
            <div class="cardName">吉祥寺<span class="cardJob">小美工</span></div>
            <div class="cardCompany">佳途科技(杭州)有限公司</div>
            <div style="margin-bottom: 5px;">138-5784-4501</div>
            <div style="margin-bottom: 5px;">xumeng@jiatu.com</div>
            <div style="width: 178px;">浙江省杭州市拱墅区通运路999号汽车电商园B座601-1</div>
          </div>
        </div>
        <div class="disflex" style="padding: 8px 0 0 8px;margin-top: 8px;">
          <div class="flex"></div>
          <div class="disflex">
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-dh.png"></div>
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-wx.png"></div>
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-yx.png"></div>
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-dz.png"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="templateStyle==='3'">
      <div class="template-wrapper" :class="fontStyle==='1'?'fontColor':''" :style="{backgroundImage: 'url('+bg+');'}">
        <div class="disflex">
          <div class="flex">
            <div class="cardName">吉祥寺<span class="cardJob">小美工</span></div>
            <div class="cardCompany">佳途科技(杭州)有限公司</div>
            <div style="margin-bottom: 5px;">138-5784-4501</div>
            <div style="margin-bottom: 5px;">xumeng@jiatu.com</div>
            <div style="width: 178px;">浙江省杭州市拱墅区通运路999号汽车电商园B座601-1</div>
          </div>
          <div @click="cropper">
            <div class="disflex avatar-seat" v-if="!dataInfo.avatar">点击传照片</div>
            <div class="avatar-seat" style="border: 0;" v-else><img :src="dataInfo.avatar"></div>
          </div>
        </div>
        <div class="disflex" style="padding: 8px 0 0 8px;margin-top: 8px;">
          <div class="flex"></div>
          <div class="disflex">
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-dh.png"></div>
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-wx.png"></div>
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-yx.png"></div>
            <div class="icon28" style="margin-right: 6px;"><img src="../../../assets/icon-dz.png"></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="item-title flex-align"><span class="item-i"></span>选择模板</div>
      <div class="model-wrapper">
        <div class="model-item" v-for="(item,index) in templateInfo" :key="index" style="position: relative;" @click="templateOpt(index,item)">
          <div style="height: 62px;margin-bottom: 8px;"><img :src="item.template"></div>
          <div class="active-wrapper disflex" v-show="index === templateIndex"><div class="active-icon"><img src="../../../assets/icon-xz.png"></div></div>
          <!-- <div>默认</div> -->
        </div>
      </div>
    </div>
    <div>
      <div class="item-title flex-align"><span class="item-i"></span>选择背景</div>
      <div class="background-wrapper">
        <div class="background-item" v-for="(item,index) in backgroundInfo" :key="index" style="position: relative;" @click="backgroundOpt(index,item)">
          <img :src="item.image" :alt="item.name">
          <div class="active-wrapper disflex" v-show="index === backgroundIndex"><div class="active-icon"><img src="../../../assets/icon-xz.png"></div></div>
        </div>
      </div>
    </div>
    <div>
      <div class="item-title flex-align"><span class="item-i"></span>信息内容</div>
      <div class="cardAdd-wrapper">
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">姓名</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请输入姓名" v-model="dataInfo.name" class="flex" style="color: #000;">
        </div>
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">公司</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请填写公司名称" v-model="dataInfo.company" class="flex" style="color: #000;">
        </div>
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">职位</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请填写职位" v-model="dataInfo.position" class="flex" style="color: #000;">
        </div>
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">手机</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请输入手机号" v-model="dataInfo.phone" class="flex" style="color: #000;">
        </div>
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">邮箱</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请输入邮箱号" v-model="dataInfo.email" class="flex" style="color: #000;">
        </div>
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">微信</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请输入微信" v-model="dataInfo.wxNumber" class="flex" style="color: #000;">
        </div>
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">地址</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请填写地址" v-model="dataInfo.address" class="flex" style="color: #000;">
        </div>
      </div>
    </div>
    <div>
      <div class="item-title flex-align"><span class="item-i"></span>英文信息</div>
      <div class="cardAdd-wrapper">
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">Name</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请输入英文名称" v-model="dataInfo.nameEn" class="flex" style="color: #000;">
        </div>
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">Company</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请填写公司英文名称" v-model="dataInfo.companyEn" class="flex" style="color: #000;">
        </div>
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">Position</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请输入英文职位" v-model="dataInfo.positionEn" class="flex" style="color: #000;">
        </div>
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">Address</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请输入英文地址" v-model="dataInfo.addressEn" class="flex" style="color: #000;">
        </div>
      </div>
    </div>
    <div>
      <div class="item-title flex-align"><span class="item-i"></span>个人简介</div>
      <div style="position: relative;">
        <textarea v-model="dataInfo.content" maxlength="300" @focus="touch(1)" @blur="leave(1)"></textarea>
        <div class="textarea-show" v-show="show1">
          <div style="width: 17px;height: 21px;margin:0 auto 10px;"><img src="../../../assets/icon-zlbj.png"></div>
          <div style="text-align: center;">简单介绍一下自己</div>
        </div>
      </div>  
      <div style="position: relative;">
        <textarea v-model="dataInfo.contentEn" maxlength="300" @focus="touch(2)" @blur="leave(2)"></textarea>
        <div class="textarea-show" v-show="show2">
          <div style="width: 17px;height: 21px;margin:0 auto 10px;"><img src="../../../assets/icon-zlbj.png"></div>
          <div style="text-align: center;">英文简介</div>
        </div>
      </div>  
    </div>
    <div>
      <div class="item-title flex-align"><span class="item-i"></span>公司介绍</div>
      <div style="position: relative;">
        <textarea v-model="dataInfo.companyDetail" maxlength="300" @focus="touch(3)" @blur="leave(3)"></textarea>
        <div class="textarea-show" v-show="show3">
          <div style="width: 17px;height: 21px;margin:0 auto 10px;"><img src="../../../assets/icon-zlbj.png"></div>
          <div style="text-align: center;">公司简介</div>
        </div>
      </div>
      <div style="position: relative;">
        <textarea v-model="dataInfo.companyDetailEn" maxlength="300" @focus="touch(4)" @blur="leave(4)"></textarea>
        <div class="textarea-show" v-show="show4">
          <div style="width: 17px;height: 21px;margin:0 auto 10px;"><img src="../../../assets/icon-zlbj.png"></div>
          <div style="text-align: center;">公司英文简介</div>
        </div>
      </div>
      <div>
        <view class='uploader-img  flex justify-content-start' v-if="companyPic">
          <view class='uploader-list' v-for="item in companyPic" :key="item" style="height: 130px;border-radius: 20px;overflow: hidden;margin-bottom: 10px;position: relative;">
              <image :src='item' mode="scaleToFill" @click='previewImg'/>
              <div style="position: absolute;right: 12px;top: 6px;width: 25px;height: 25px;" @click='deleteImg'><image src='../../../assets/icon-delete.png' /></div>
          </view>
        </view>
        <div class="pic-wrapper" @click="chooseImg">
          <div style="width: 24px;height: 24px;margin:0 auto 10px;padding-top: 40px;"><img src="../../../assets/icon-tpbj.png"></div>
          <div style="text-align: center;">上传图片</div>
        </div>
      </div>
    </div>
    <div> 
      <div class="item-title flex-align"><span class="item-i"></span>我的相册</div>
      <view class='uploader-img  flex justify-content-start' v-if="pics">
        <view class='uploader-list' v-for="item in pics" :key="item" style="height: 130px;border-radius: 20px;overflow: hidden;margin-bottom: 10px;position: relative;">
            <image :src='item' mode="scaleToFill" @click='previewImg1'/>
            <div style="position: absolute;right: 12px;top: 6px;width: 25px;height: 25px;" @click='deleteImg1'><image src='../../../assets/icon-delete.png' /></div>
        </view>
      </view>
      <div class="pic-wrapper" @click="chooseImg1">
        <div style="width: 24px;height: 24px;margin:0 auto 10px;padding-top: 40px;"><img src="../../../assets/icon-tpbj.png"></div>
        <div style="text-align: center;">上传图片</div>
      </div>
    </div> 
    <div style="margin: 20px 0;">
      <div class="button2" @click="submit">完成制作</div>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
const date = new Date()
const timeNum = Math.round(date.getTime() / 1000)// 十位时间戳
export default {
  data () {
    return {
      pics: [],
      companyPic: [],
      backgroundInfo: [],
      templateInfo: [],
      backgroundIndex: -1,
      templateIndex: 0,
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      dataInfo: {
        id: '',
        name: '',
        position: '',
        company: '',
        phone: '',
        email: '',
        wxNumber: '',
        address: '',
        nameEn: '',
        positionEn: '',
        companyEn: '',
        addressEn: '',
        xcxOpenId: '',
        content: '',
        contentEn: '',
        companyDetail: '',
        companyDetailEn: '',
        avatar: '',
        album: '',
        bgImgId: '',
        templateId: '',
        logo: '',
        companyPic: ''
      },
      userInfo: {},
      templateStyle: '1',
      bg: '',
      fontStyle: '1'
    }
  },
  onLoad (options) {
    console.log(options)
    if (options.avatar) {
      this.dataInfo.avatar = options.avatar
    } else if (options.logo) {
      this.dataInfo.logo = options.logo
    } else {

    }
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
  },
  methods: {
    chooseImg (e) {
      var that = this
      if (that.companyPic.length < 1) {
        wx.chooseImage({
          count: 1, // 最多可以选择的图片张数，默认9
          sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
          sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
          success: function (res) {
            console.log(res, 'ssssss')
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            wx.uploadFile({
              url: 'https://gate.test.jiatu360.cn/api/tool/oss/xcxUpload',
              filePath: res.tempFilePaths[0],
              name: 'file',
              header: {
                'Content-type': 'application/json',
                'sign': md5('t=' + timeNum + '&jiatu2019yinji'),
                'timeStrap': timeNum,
                'token': that.userInfo.token
              },
              formData: {
                name: 'file',
                value: res.tempFilePaths[0],
                prefix: that.userInfo.userId
              },
              success (res) {
                console.log(res)
                let data = JSON.parse(res.data)
                if (data.code === 200) {
                  let tempFilePaths = data.data.url
                  console.log(tempFilePaths)
                  // wx.showToast({
                  //   title: '正在上传...',
                  //   icon: 'loading',
                  //   mask: true,
                  //   duration: 10000
                  // });
                  that.companyPic.push(tempFilePaths)
                  console.log(that.companyPic)
                } else {
                  wx.showModal({
                    title: '错误提示',
                    content: '上传图片失败',
                    showCancel: false,
                    success (res) { }
                  })
                }
              },
              fail (res) {
                wx.hideToast()
                wx.showModal({
                  title: '错误提示',
                  content: '上传图片失败',
                  showCancel: false,
                  success (res) { }
                })
              }
            })
          }
        })
      } else {
        wx.showToast({
          title: '最多上传1张图片',
          icon: 'none',
          duration: 3000
        })
      }
    },
    chooseImg1 (e) {
      var that = this
      that.pics = that.pics
      if (that.pics.length < 3) {
        wx.chooseImage({
          count: 3, // 最多可以选择的图片张数，默认9
          sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
          sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
          success: function (res) {
          // 返回选定照片的本地文件路径列表
            wx.uploadFile({
              url: 'https://gate.test.jiatu360.cn/api/tool/oss/xcxUpload',
              filePath: res.tempFilePaths[0],
              name: 'file',
              header: {
                'Content-type': 'application/json',
                'sign': md5('t=' + timeNum + '&jiatu2019yinji'),
                'timeStrap': timeNum,
                'token': that.userInfo.token
              },
              formData: {
                name: 'file',
                value: res.tempFilePaths[0],
                prefix: that.userInfo.userId
              },
              success (res) {
                console.log(res)
                let data = JSON.parse(res.data)
                if (data.code === 200) {
                  let tempFilePaths = data.data.url
                  console.log(tempFilePaths)
                  // wx.showToast({
                  //   title: '正在上传...',
                  //   icon: 'loading',
                  //   mask: true,
                  //   duration: 10000
                  // });
                  that.pics.push(tempFilePaths)
                  console.log(that.pics)
                } else {
                  wx.showModal({
                    title: '错误提示',
                    content: '上传图片失败',
                    showCancel: false,
                    success (res) { }
                  })
                }
              },
              fail (res) {
                wx.hideToast()
                wx.showModal({
                  title: '错误提示',
                  content: '上传图片失败',
                  showCancel: false,
                  success (res) { }
                })
              }
            })
          }
        })
      } else {
        wx.showToast({
          title: '最多上传3张图片',
          icon: 'none',
          duration: 3000
        })
      }
    },
    // 删除图片
    deleteImg (e) {
      console.log(e)
      var pics = this.companyPic
      var index = e.currentTarget.dataset.index
      pics.splice(index, 1)
      console.log(pics)
      this.companyPic = pics
    },
    deleteImg1 (e) {
      var pics = this.pics
      var index = e.currentTarget.dataset.index
      pics.splice(index, 1)
      console.log(pics)
      this.pics = pics
    },
    // 预览图片
    previewImg (e) {
    // 获取当前图片的下标
      var index = e.currentTarget.dataset.index
      // 所有图片
      var companyPic = this.companyPic
      wx.previewImage({
      // 当前显示图片
        current: companyPic[index],
        // 所有图片
        urls: companyPic
      })
    },
    // 预览图片
    previewImg1 (e) {
    // 获取当前图片的下标
      var index = e.currentTarget.dataset.index
      // 所有图片
      var pics = this.pics
      wx.previewImage({
      // 当前显示图片
        current: pics[index],
        // 所有图片
        urls: pics
      })
    },
    submit () {
      if (!this.dataInfo.templateId) {
        this.dataInfo.templateId = this.templateInfo[0].id + ''
      }
      if (!this.dataInfo.bgImgId) {
        this.dataInfo.bgImgId = this.backgroundInfo[0].id + ''
      }
      this.dataInfo.album = this.pics.join(',')
      this.dataInfo.companyPic = this.companyPic.join(',')
      this.dataInfo.xcxOpenId = this.userInfo.openId
      this.dataInfo.id = this.userInfo.userId + ''
      if (this.verification()) {
        this.$http.post({
          url: '/vcardInfo/updateVcard',
          header: this.userInfo.token,
          data: this.dataInfo
        }).then(res => {
          console.log(res)
          if (res.code === 200) {
            wx.showToast({
              title: '名片制作成功',
              icon: 'success',
              duration: 1500,
              mask: false,
              success: (result) => {
                setTimeout(() => {
                  wx.switchTab({
                    url: '../index/main'
                  })
                }, 1500)
              }
            })
          } else {
            wx.showToast({
              title: '名片制作失败',
              icon: 'success',
              duration: 1500,
              mask: false,
              success: (result) => {}
            })
          }
        })
      }
    },
    verification () {
      if (this.dataInfo.name !== '') {
        wx.showToast({
          title: '请填写姓名',
          icon: 'none',
          duration: 1500,
          mask: false,
          success: (result) => {}
        })
        return false
      }
      if (this.dataInfo.position) {
        wx.showToast({
          title: '请填写职位',
          icon: 'none',
          duration: 1500,
          mask: false,
          success: (result) => {}
        })
        return false
      }
      if (this.dataInfo.company) {
        wx.showToast({
          title: '请填写公司',
          icon: 'none',
          duration: 1500,
          mask: false,
          success: (result) => {}
        })
        return false
      }
      if (this.dataInfo.email) {
        wx.showToast({
          title: '请填写邮箱',
          icon: 'none',
          duration: 1500,
          mask: false,
          success: (result) => {}
        })
        return false
      }
      if (this.dataInfo.phone) {
        wx.showToast({
          title: '请填写电话',
          icon: 'none',
          duration: 1500,
          mask: false,
          success: (result) => {}
        })
        return false
      }
      return true
    },
    templateOpt (index, item) {
      this.dataInfo.templateId = item.id + ''
      this.templateIndex = index
      this.templateStyle = item.name
    },
    backgroundOpt (index, item) {
      this.dataInfo.bgImgId = item.id + ''
      this.backgroundIndex = index
      this.bg = item.image
      if (item.name === '1') {
        this.fontStyle = '2'
      } else {
        this.fontStyle = '1'
      }
    },
    cropper (e) {
      wx.navigateTo({url: '../../my/cropper/main?key=1'})
    },
    cropper1 (e) {
      wx.navigateTo({url: '../../my/cropper/main?key=2'})
    },
    touch (e) {
      switch (e) {
        case 1:
          this.show1 = false
          break
        case 2:
          this.show2 = false
          break
        case 3:
          this.show3 = false
          break
        default:
          this.show4 = false
          break
      }
    },
    leave (e) {
      if (this.dataInfo.content) {
        this.show1 = false
      } else {
        this.show1 = true
      }
      if (this.dataInfo.contentEn) {
        this.show2 = false
      } else {
        this.show2 = true
      }
      if (this.dataInfo.companyDetail) {
        this.show3 = false
      } else {
        this.show3 = true
      }
      if (this.dataInfo.companyDetailEn) {
        this.show4 = false
      } else {
        this.show4 = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
.company-logo {width: 38px;height: 38px;border:1px dashed #707070;border-radius: 50%;font-size: 9px;text-align: center;overflow: hidden;}
.title {color: #0B111F;font-size: 14px;}
.tag {color: #FA5252;margin: 0 15px 0 5px;}
textarea {background: #F9F9F9;border-radius: 20px;width: 100%;margin-bottom: 10px;width: 88%;height: 90px;padding: 20px;}
.textarea-show {width: 100%;height: 60px;position: absolute;top: 50%;margin-top: -30px;color: #707070;font-size: 12px;}
.pic-wrapper {width: 100%;height: 130px;background: #F9F9F9;color: #707070;border-radius: 20px;}
</style>
