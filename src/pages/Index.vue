<template>
  <Layout>
      <hero></hero>
      <about></about>
  </Layout>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'

export default {
  components: {
    Hero,
    About
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>
