<template>
  <div class="template-wrapper">
    <div class="disflex">
      <div class="flex">
        <div class="cardName">吉祥寺<span class="cardJob">小美工</span></div>
        <div class="cardCompany">福建印记科技有限公司</div>
        <div style="margin-bottom: 5px;">138-8888-8888</div>
        <div style="margin-bottom: 5px;">xu***@yinji.com</div>
        <div style="width: 178px;">浙江省杭州市拱墅区通运路999号汽车电商园B座601-1</div>
      </div>
      <div @click="cropper">
        <div class="disflex avatar-seat" v-if="!avatar">点击传照片</div>
        <div class="avatar-seat" v-else><img :src="avatar"></div>
      </div>
    </div>
    <div class="disflex" style="border-top: 1px solid #E6E6E6;padding: 8px 0 0 8px;margin-top: 8px;">
      <div class="flex" @click="cropper">
        <div class="disflex company-logo">点击传LOGO</div>
        <!-- <div class="company-logo"><img src=""></div> -->
      </div>
      <div class="disflex">
        <div class="icon28"><img src=""></div>
        <div class="icon28"><img src=""></div>
        <div class="icon28"><img src=""></div>
        <div class="icon28"><img src=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      default: ''
    }
  },
  data () {
    return {

    }
  },
  onLoad () {
    console.log(this.avatar, 'dddd')
  },
  methods: {
    cropper () {
      wx.navigateTo({url: '../../my/cropper/main?key=1'})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
