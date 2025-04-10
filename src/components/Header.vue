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
              <span class="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">嗨，我是一名后端工程师，喜欢写代码、搭系统，也爱折腾一些有趣的小项目</span>
              <p class="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">日常主要使用 Java 开发，熟悉 Redis、Kafka、PostgreSQL，偶尔也搞搞 Linux 运维。热衷于把复杂的问题拆解得简单高效，让系统运行得更稳更顺。<br>
                感谢你的到访，欢迎交流技术，也欢迎一起聊聊生活中的灵感与创意！</p>
            </div> <!-- header hero content -->
          </div>
          <div class="col-lg-6 col-md-6 col-sm-7">
            <div class="header_hero_image mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="1.8s">
              <img src="@/assets/images/hero-removebg-preview.png" alt="hero">
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
