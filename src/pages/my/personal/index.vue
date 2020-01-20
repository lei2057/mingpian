<template>
  <div class="pd15">
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
            <div style="width: 90px;height: 90px;border-radius: 50%;overflow: hidden;margin-right: 20px;"><img :src="avatars"></div>
          </div>
        </div>
        <div class="disflex" style="border-top: 1px solid #E6E6E6;padding: 8px 0 0 8px;margin-top: 8px;">
          <div class="flex" @click="cropper1">
            <div class="disflex company-logo" v-if="!logos">点击传LOGO</div>
            <div class="company-logo" style="border: 0;" v-else><img :src="logos"></div>
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
            <div style="width: 90px;height: 90px;border-radius: 50%;overflow: hidden;margin-right: 20px;"><img :src="avatars"></div>
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
            <div style="width: 90px;height: 90px;border-radius: 50%;overflow: hidden;margin-right: 20px;"><img :src="avatars"></div>
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
    <div class="card-wrapper" style="background: #FFF;">
      <div class="photo-wrapper" @click="cropper">
        <!-- <div class="photo" v-if="!dataInfo.avatar"><img src="../../../assets/icon-qrcode.png"></div> -->
        <div class="photo"><img :src="avatars"></div>
        <div class="photoXj"><img src="../../../assets/icon-xj.png"></div>
      </div>
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
      <div class="disflex" style="padding-top: 8px;">
        <div class="title">职位</div>
        <div class="tag">*</div>
        <input type="text" placeholder="请填写职位" v-model="dataInfo.position" class="flex" style="color: #000;">
      </div>
    </div>
    <div>
      <div class="item-title flex-align"><span class="item-i"></span>联系方式</div>
      <div class="card-wrapper" style="background: #FFF;">
        <div class="disflex border_cell" style="padding: 8px 0;">
          <div class="title">手机</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请输入手机号" v-model="dataInfo.phone" class="flex" style="color: #000;">
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
        <div class="disflex" style="padding-top: 8px;">
          <div class="title">邮箱</div>
          <div class="tag">*</div>
          <input type="text" placeholder="请填写邮箱" v-model="dataInfo.email" class="flex" style="color: #000;">
        </div>
      </div>
    </div>
    <div>
      <div class="item-title flex-align"><span class="item-i"></span>英文信息</div>
      <div class="card-wrapper" style="background: #FFF;">
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
        <div class="disflex" style="padding-top: 8px;">
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
          <view class='uploader-list' v-for="(item,index) in companyPic" :key="index" style="height: 130px;border-radius: 20px;overflow: hidden;margin-bottom: 10px;position: relative;">
              <image :src='item' mode="scaleToFill" @click='previewImg'/>
              <div style="position: absolute;right: 12px;top: 6px;width: 25px;height: 25px;" @click='deleteImg(index)'><image src='../../../assets/icon-delete.png' /></div>
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
        <view class='uploader-list' v-for="(item,index) in pics" :key="index" style="height: 130px;border-radius: 20px;overflow: hidden;margin-bottom: 10px;position: relative;">
            <image :src='item' mode="scaleToFill" @click='previewImg1'/>
            <div style="position: absolute;right: 12px;top: 6px;width: 25px;height: 25px;" @click='deleteImg1(index)'><img src="../../../assets/icon-delete.png"></div>
        </view>
      </view>
      <div class="pic-wrapper" @click="chooseImg1">
        <div style="width: 24px;height: 24px;margin:0 auto 10px;padding-top: 40px;"><img src="../../../assets/icon-tpbj.png"></div>
        <div style="text-align: center;">上传图片</div>
      </div>
    </div> 
    <div style="margin: 20px 0;">
      <div class="button2" @click="submit">保存修改</div>
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
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      avatars: '',
      logos: '',
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
      fontStyle: '1',
      bg: ''
    }
  },
  onLoad (options) {
    console.log(options)
    this.userInfo = wx.getStorageSync('userInfo')
    this.$http.get({
      url: `/vcardInfo/selectById?id=${this.userInfo.userId}`,
      header: this.userInfo.token
    }).then(res => {
      console.log(res, 'aaaaa')
      this.dataInfo = res.data
      this.avatars = res.data.avatar
      this.logos = res.data.logo
      if (res.data.album === '') {
        this.pics = []
      } else {
        this.pics = res.data.album.split(',')
      }
      if (res.data.companyPic === '') {
        this.companyPic = []
      } else {
        this.companyPic = []
        this.companyPic.push(res.data.companyPic)
      }
      this.$http.get({
        url: `/vcardBgimage/getImageById?id=${res.data.bgImgId}`,
        header: this.userInfo.token
      }).then(res => {
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
        this.templateStyle = res.data.name
      })
    })
    var that = this
    setTimeout(() => {
      if (options.avatar) {
        that.avatars = options.avatar
        that.dataInfo.avatar = options.avatar
      } else if (options.logo) {
        that.logos = options.logo
        that.dataInfo.logo = options.logo
      } else {

      }
    }, 1000)
  },
  onShow () {

  },
  computed: {
    avatars (res) {
      console.log(res)
    }
  },
  watch: {
    dataInfo () {
      if (this.dataInfo.content) {
        this.show1 = false
      }
      if (this.dataInfo.contentEn) {
        this.show2 = false
      }
      if (this.dataInfo.companyDetail) {
        this.show3 = false
      }
      if (this.dataInfo.companyDetailEn) {
        this.show4 = false
      }
    }
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
                  that.companyPic.push(tempFilePaths)
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
      var pics = this.companyPic
      pics.splice(e, 1)
      this.companyPic = pics
    },
    deleteImg1 (e) {
      var pics = this.pics
      pics.splice(e, 1)
      this.pics = pics
    },
    // 预览图片
    previewImg (e) {
      console.log(e)
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
      this.dataInfo.album = this.pics.join(',')
      this.dataInfo.companyPic = this.companyPic.join(',')
      this.dataInfo.id = this.userInfo.userId + ''
      this.dataInfo.bgImgId = this.dataInfo.bgImgId + ''
      this.dataInfo.status = this.dataInfo.status + ''
      this.dataInfo.templateId = this.dataInfo.templateId + ''
      console.log(this.dataInfo)
      this.$http.post({
        url: '/vcardInfo/updateVcard',
        header: this.userInfo.token,
        data: this.dataInfo
      }).then(res => {
        console.log(res)
        wx.showToast({
          title: '名片修改成功',
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
      })
    },
    cropper () {
      wx.navigateTo({url: '../cropper/main?key=0'})
    },
    cropper1 (e) {
      wx.navigateTo({url: '../../my/cropper/main?key=3'})
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
.photo-wrapper {margin-bottom: 26px;position: relative;
  .photo {width: 50px;height: 50px;border-radius: 50%;margin: auto;overflow: hidden;}
  .photoXj {width: 12px;height: 12px;position: absolute;bottom: 0;right: 130px;}
}
.title {color: #0B111F;font-size: 14px;}
.tag {color: #FA5252;margin: 0 15px 0 5px;}
textarea {background: #F9F9F9;border-radius: 20px;width: 100%;margin-bottom: 10px;width: 88%;height: 90px;padding: 20px;}
.textarea-show {width: 100%;height: 60px;position: absolute;top: 50%;margin-top: -30px;color: #707070;font-size: 12px;}
.pic-wrapper {width: 100%;height: 130px;background: #F9F9F9;color: #707070;border-radius: 20px;}
</style>
