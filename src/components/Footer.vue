<template>
  <footer id="footer" class="footer_area gray-bg pt-115 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="footer_content text-center">
            <a href="#"><img src="@/assets/images/logo.svg" alt="Logo" /></a>
            <ul class="footer_social">
              <li>
                <span>你还可以：</span>
              </li>
              <li v-for="(icon, index) in icons" :key="index">
                <a :href="icon.link" target="_blank">
                  <span :class="icon.class"></span>
                </a>
              </li>
            </ul>
            <ul class="footer_menu">
              <li><a href="#home">主页</a></li>
              <li><a href="#about">关于</a></li>
              <li><a href="#personalWebsite">个人站点</a></li>
            </ul>
            <p class="credit pt-45">模板设计与开发由<a href="https://uideck.com/">UIdeck</a>提供</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      // 图标配置对象
      icons: [
        { class: 'iconfont icon-bilibili-line', link: 'https://space.bilibili.com/52817911' },
        { class: 'lni lni-steam', link: 'https://steamcommunity.com/profiles/76561198931085417/' }
      ]
    };
  }
};
</script>

<style scoped>
/* 添加组件特定的样式 */
</style>
