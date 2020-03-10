<template>
  <div class="pd15">
    <div v-if="!show">
      <div class="text">快去制作一张名片帮您积累更多人脉吧！</div>
      <div class="bg-img"><img src="../../../assets/bg-index.png"></div>
    </div>
    <div v-else>
      <div style="font-size: 16px;font-weight: bold;margin-bottom: 5px;">我的人脉</div>
      <div class="friendCard-wrapper" v-for="(item,index) in dataInfo" :key="index">
        <div class="card-time">{{item.time}}</div>
        <div class="disflex card-item" v-for="(items,indexs) in item.data" :key="indexs" @click="details(items)">
          <div class="item-photo"><img :src="items.avatar"></div>
          <div class="flex item-cont">
            <div class="item-name">{{items.name}}</div>
            <div style="margin: 3px 0;">{{items.phone}}</div>
            <div>{{items.company}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataInfo: [],
      show: false
    }
  },
  onLoad () {

  },
  onShow () {
    let userInfo = wx.getStorageSync('userInfo')
    this.dataInfo = []
    this.$http.get({
      url: `/vcardInfo/getVcardList?openId=${userInfo.openId}`,
      header: userInfo.token
    }).then(res => {
      console.log(res)

      if (res.message === '暂无人脉') {
        this.show = false
      } else {
        this.show = true
        for (var k in res.data) {
          let data = {
            time: k,
            data: res.data[k]
          }
          this.dataInfo.push(data)
        }
      }
    })
  },
  methods: {
    details (val) {
      wx.navigateTo({
        url: `../../my/details/main?userId=${val.id}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.friendCard-wrapper {margin-bottom: 24px;
  .card-time {font-size: 11px;color: #2487FF;margin-bottom: 15px;}
  .card-item {padding: 5px 12px;margin-bottom: 15px;border: 1px solid #F0F0F0;border-radius: 28px;box-shadow: 0 0 3px 0 #E6E6E7;
    .item-photo {width: 80px;height: 80px;border-radius: 50%;overflow: hidden;margin-right: 13px;}
    .item-cont {font-size: 12px;color: #707070;
      .item-name {font-size: 16px;font-weight: 500;color: #0B111F;}
    }
  }
}
.text {width: 200px;line-height: 1.6;text-align: center;margin: 66px auto 0;font-size: 16px;}
.bg-img {width: 278px;height: 220px;margin: 34px auto 28px;}
</style>
