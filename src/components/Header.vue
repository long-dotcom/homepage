<template>
  <section class="header_area">
    <div class="header_navbar">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="#">
                <img src="@/assets/images/logo.svg" alt="Logo" />
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item active"><a class="page-scroll" href="#home">主页<span></span></a></li>
                  <li class="nav-item"><a class="page-scroll" href="#about">关于<span></span></a></li>
                  <li class="nav-item"><a class="page-scroll" href="#personalWebsite">个人站点<span></span></a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>



    <div id="home" class="header_hero">
      <ul class="header_social d-none d-lg-block">
        <!-- 使用 v-for 动态渲染图标 -->
        <li v-for="(icon, index) in icons" :key="index">
          <a :href="icon.link" target="_blank">
            <span :class="icon.class"></span>
          </a>
        </li>
      </ul>

      <div class="container">
        <div class="row align-items-center justify-content-center justify-content-lg-between">
          <div class="col-lg-6">
            <div class="header_hero_content mt-45">
              <h5 class="header_sub_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">你好！</h5>
              <h2 class="header_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">欢迎访问我的个人主页</h2>
              <span class="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">我是一名后端工程师，专注于轨道交通和物流软件开发。目前，我参与地铁运维与检修系统的开发，致力于设计高效的后端架构。</span>
              <p class="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">我具备Java、Redis、Kafka、PostgreSQL和Linux运维等技能，热衷于解决复杂问题并提升团队效率。感谢你访问我的个人主页，期待与您交流合作的机会！</p>
            </div> <!-- header hero content -->
          </div>
          <div class="col-lg-6 col-md-6 col-sm-7">
            <div class="header_hero_image mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="1.8s">
              <img src="@/assets/images/hero.png" alt="hero">
            </div> <!-- header hero image -->
          </div>
        </div> <!-- row -->
        <div class="header_hero_shape d-none d-lg-block"></div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      // 图标配置对象
      icons: [
        { class: 'lni lni-wechat', link: 'https://www.wechat.com' },
        { class: 'iconfont icon-dingtalk', link: 'dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=a199810112837' },
        { class: 'lni lni-envelope', link: 'mailto:a199810222837@dingtalk.com' },
        { class: 'lni lni-github-original', link: 'https://github.com/long-dotcom' }
      ]
    };
  }
};
</script>

<style scoped>
/* 添加组件特定的样式 */
</style>
