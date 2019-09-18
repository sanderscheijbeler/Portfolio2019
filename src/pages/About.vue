<template>
  <Layout>
    <section class="section-about">
      <div class="container">
        <div class="row">
          <div class="col-sm-10">
            <h1 class="mb-3">
              "Now this is a story all about how my life got twisted upside down..."
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <p class="text__col">
              My name is Sander and I'm 32 years old. Since April 2018 I'm working as a Front End Developer.
              Before that I was a police officer in the centre of Rotterdam. As a result I have learned under unique circumstances what teamwork, dedication and responsibility is.
            </p>

            <img class="mb-3" src="/images/uploads/city.jpg" alt="Me!">

            <h2 class="mb-3">
              But why?
            </h2>
            <p>
              During my career as an police officer I've always remained active by doing small edits at existing Wordpress sites. After all the excitement and sensation, my wife and I decided to look for more peace and rest. Because of this I started to professionalize my knowledge and experience within web development. After a while I 'landed' my first job as a Front End Developer.
            </p>

            <h2 class="mb-3">
              So... what are you doing now?
            </h2>
            <p>
              During my current job I've run various projects. I turn sketch or XD designs into styleguides, creating company landing pages, developing custom Wordpress themes, email-templates. But I also created custom solutions such as a customer portal within Dynamics 365.
            </p>
            <p>
              I work with HTML5, (S) CSS3, PHP and JavaScript (ES6). <br>
              A few more languages that I work or have worked with are: Docker, Bootstrap4 (and 3), VueJS / NuxtJS, Gridsome, jQuery, Git, Gulp, twig and Wordpress.
            </p>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style>
  .section-about {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 100px 0 0 0;
  }
</style>
