<template>
  <Layout>

    <section class="section-about">
      <h1>Contact me</h1>

    </section>

  </Layout>
</template>

<!--<page-query>-->
<!--{-->
<!--  posts: allCases {-->
<!--    edges {-->
<!--      node {-->
<!--        id-->
<!--        title-->
<!--        path-->
<!--        tags {-->
<!--          id-->
<!--          title-->
<!--          path-->
<!--        }-->
<!--        date (format: "D. MMMM YYYY")-->
<!--        timeToRead-->
<!--        description-->
<!--        coverImage (width: 770, height: 380, blur: 10)-->
<!--        ...on Case {-->
<!--            id-->
<!--            title-->
<!--            path-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</page-query>-->

<script>
// import Author from '~/components/Author.vue'
// import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    // Author,
    // PostCard
  },
  metaInfo: {
    title: 'About'
  }
}
</script>
