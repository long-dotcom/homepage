<script>

export default {
  name: 'PersonalWebsiteSection',
  data() {
    return {
      sites: [
        { name: '个人博客', description: '这是我的个人博客，记录了我的学习和生活。', link: 'https://blog.blue-bird.website', image: '@/assets/images/site1.png', icon: 'https://blog.blue-bird.website/wp-content/uploads/2024/10/cropped-favicon-32x32.png' },
        { name: 'TOOLS', description: '工具网站，提供一些常用的工具。', link: 'https://tools.blue-bird.website', image: '@/assets/images/site2.png', icon: 'https://tools.blue-bird.website/favicon.ico' }
      ]
    };
  }
};
</script>

<template>
  <section id="personalWebsite" class="personal_website_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section_title text-center">
            <h2>个人站点</h2>
            <p>这里展示了我参与的一些项目和作品。</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 d-flex justify-content-center" v-for="(site, index) in sites" :key="index">
          <div class="single_project">
            <img :src="site.icon" alt="Site Icon" class="site-icon" />
            <h3>{{ site.name }}</h3>
            <p>{{ site.description }}</p>
            <a :href="site.link" target="_blank">查看详情</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.personal_website_area {
  padding: 60px 0;
}

.section_title {
  margin-bottom: 50px;
}

.single_project {
  background: #f9f9f9;
  padding: 20px;
  margin-bottom: 30px;
  text-align: center; /* 保持文本居中对齐 */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex; /* 使用 flexbox */
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 水平居中对齐 */
}

.single_project h3 {
  margin-bottom: 15px;
}

.single_project a {
  color: #007bff;
  text-decoration: none;
}

.site-image {
  width: 100%;
  height: auto;
  margin-top: 10px;
}

.site-icon {
  width: 40px; /* 设置图标宽度 */
  height: 40px; /* 设置图标高度 */
  margin-bottom: 10px; /* 图标与标题之间的间距 */
}
</style>
