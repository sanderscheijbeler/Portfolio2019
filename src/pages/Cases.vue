<template>
    <layout>
        <div class="cases__wrapper">
            <div class="container">
                <div class="row justify-content-center">
                    <ClientOnly>
                        <carousel :perPage="1" :autoplay="false">
                            <slide v-for="edge in $page.cases.edges" :key="edge.node.id">
                                <caseItem :caseitem="edge.node" />
                            </slide>
                        </carousel>
                    </ClientOnly>
                </div>
            </div>
        </div>
    </layout>
</template>

<page-query>
    query Cases {
      cases: allCase {
        edges {
          node {
            id
            title
            path
              tags {
                id
                title
                path
              }
            date (format: "D. MMMM YYYY")
            description
            coverImage
            ... on Case {
              id
              title
              path
            }
          }
        }
      }
    }
</page-query>


<script>
    import caseItem from '~/components/caseItem.vue'

    export default {
        components: {
            Carousel: () =>
                import ('vue-carousel/src/index')
                    .then(m => m.Carousel)
                    .catch(),
            Slide: () =>
                import ('vue-carousel/src/index')
                    .then(m => m.Slide)
                    .catch(),
            caseItem
        },
        metaInfo: {
            title: 'Cases overview'
        }
    }
</script>


<style lang="scss" scoped>
    .cases {
        &__wrapper {
            margin-top: 12rem;
        }
    }

    .VueCarousel {
        width: 100%;

        &-inner {
            justify-content: center;
        }

        &-slide {
            [class^="col-"] {
                margin: 0 auto;
            }
        }
    }
</style>
