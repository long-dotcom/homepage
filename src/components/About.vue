<template>
  <section id="about" class="about_area pt-70 pb-120">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 col-md-9">
          <div class="about_image mt-50">
            <img src="@/assets/images/about_hero.png" alt="Hero" />
            <div class="about_shape"></div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about_content mt-45">
            <div class="section_title">
              <h5 class="sub_title">关于</h5>
              <h3 class="main_title">为什么雇用我？</h3>
              <ul class="line">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <p>当然，我掌握的不仅如此，每时每刻都在进步...</p>

            <div class="about_skills pt-15">
              <div class="skill_item mt-20">
                <div class="skill_header">
                  <h6 class="skill_title">Java </h6>
                  <div class="skill_percentage">
                    <p><span class="counter">80</span>%</p>
                  </div>
                </div>
                <div class="skill_bar">
                  <div class="bar_inner">
                    <div class="bar progress_line" data-width="80"></div>
                  </div>
                </div>
              </div>

              <div class="skill_item mt-20">
                <div class="skill_header">
                  <h6 class="skill_title">Web Design</h6>
                  <div class="skill_percentage">
                    <p><span class="counter">60</span>%</p>
                  </div>
                </div>
                <div class="skill_bar">
                  <div class="bar_inner">
                    <div class="bar progress_line" data-width="60"></div>
                  </div>
                </div>
              </div>

              <div class="skill_item mt-20">
                <div class="skill_header">
                  <h6 class="skill_title">HTML/CSS</h6>
                  <div class="skill_percentage">
                    <p><span class="counter">55</span>%</p>
                  </div>
                </div>
                <div class="skill_bar">
                  <div class="bar_inner">
                    <div class="bar progress_line" data-width="55"></div>
                  </div>
                </div>
              </div>

              <div class="skill_item mt-20">
                <div class="skill_header">
                  <h6 class="skill_title">运维</h6>
                  <div class="skill_percentage">
                    <p><span class="counter">65</span>%</p>
                  </div>
                </div>
                <div class="skill_bar">
                  <div class="bar_inner">
                    <div class="bar progress_line" data-width="65"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped>
/* 添加组件特定的样式 */
</style>
