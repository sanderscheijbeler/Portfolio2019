<template>
    <Layout>
        <hero></hero>
        <about></about>
        <cases></cases>
    </Layout>
</template>

<script>
    import Hero from '~/components/Hero.vue'
    import About from '~/components/About.vue'
    import Cases from '~/components/Cases.vue'

    export default {
        components: {
            Hero,
            About,
            Cases
        },
        metaInfo: {
            title: 'Home'
        }
    }
</script>
