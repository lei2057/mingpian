<template>
  <div class="comp-navbar">
    <!-- 占位栏 -->
    <view class="placeholder-bar" :style="{height: navBarHeight + 'px'}"> </view>
    <!-- 导航栏主体 -->
    <view class="navbar" :style="{height: navBarHeight + 'px',backgroundColor:navBackgroundColor}">
      <!-- 状态栏 -->
      <view class="nav-statusbar" :style="{height: statusBarHeight + 'px'}"></view>
      <!-- 标题栏 -->
      <view class="nav-titlebar" :style="{height: titleBarHeight + 'px' }">
        <!-- home及后退键 -->
        <view class="nav-back" @click="backClick">首页</view>
        <!-- 标题 -->
        <view class="bar-title" :style="{color:titleColor}">{{title}}</view>
      </view>
    </view>
  </div>
</template>

<script>
export default {
  props: {
    // 导航栏背景色
    navBackgroundColor: {
      default: '#ffffff'
    },
    // 标题颜色
    titleColor: {
      default: '#000000'
    },
    // 标题文字
    title: {
      required: false,
      default: ''
    },
    // 是否显示后退按钮
    backVisible: {
      required: false,
      default: false
    }
  },
  data () {
    return {
      statusBarHeight: '', // 状态栏高度
      titleBarHeight: '', // 标题栏高度
      navBarHeight: '', // 导航栏总高度
      platform: '',
      model: '',
      brand: '',
      system: ''
    }
  },
  onLoad () {
    const self = this
    wx.getSystemInfo({
      success (system) {
        self.statusBarHeight = system.statusBarHeight
        self.platform = system.platform
        self.model = system.model
        self.brand = system.brand
        self.system = system.system
        let platformReg = /ios/i
        if (platformReg.test(system.platform)) {
          self.titleBarHeight = 44
        } else {
          self.titleBarHeight = 48
        }
        self.navBarHeight = self.statusBarHeight + self.titleBarHeight
      }
    })
  },
  methods: {
    backClick () {
      wx.switchTab({
        url: '/pages/index/index/main'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.comp-navbar {width: 100%;z-index: 999;position: fixed;
  .navbar {width: 100%;position: fixed;left: 0;top: 0;
    .nav-titlebar {width: 100%;display: flex;align-items: center;justify-content: center;position: relative;
      .nav-back {width: 40px;height: 20px;margin-left: 19px;position: absolute;left: 0;color: #fff;border: 1px solid #fff;border-radius: 20px;text-align: center;}
    }
  }
  .placeholder-bar{background-color: transparent;width: 100%;}
}
</style>
