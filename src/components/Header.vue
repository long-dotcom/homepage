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
                  <li class="nav-item"><a class="page-scroll" href="#services">社交账号<span></span></a></li>
                  <li class="nav-item"><a class="page-scroll" href="#project">个人站点<span></span></a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>



    <div id="home" class="header_hero">
      <ul class="header_social d-none d-lg-block">
        <li><a href="#"><i class="lni lni-facebook-filled"></i></a></li>
        <li><a href="#"><i class="lni lni-twitter-filled"></i></a></li>
        <li><a href="#"><i class="lni lni-instagram-filled"></i></a></li>
        <li><a href="#"><i class="lni lni-linkedin-original"></i></a></li>
      </ul>

      <div class="container">
        <div class="row align-items-center justify-content-center justify-content-lg-between">
          <div class="col-lg-6">
            <div class="header_hero_content mt-45">
              <h5 class="header_sub_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Hello</h5>
              <h2 class="header_title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">You are using free lite version of Freelancer</h2>
              <span class="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Please, purchase full version to get all elements, features, footer credit removal permission and commercial license</span>
              <p class="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
              <a href="https://rebrand.ly/freelancer-ud" rel="nofollow" class="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.4s">Purchase Now</a>
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
};
</script>

<style scoped>
/* 添加组件特定的样式 */
</style>
