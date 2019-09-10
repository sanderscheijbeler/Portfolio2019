<template>
    <div class="col-sm-4">
        <g-link :to="caseitem.path" class="case__item">
            <div class="item__img" v-bind:style="{backgroundImage: 'url(' + caseitem.coverImage + ')' }">

            </div>
            <div class="item__title">
                {{ caseitem.title }}
            </div>
            <div class="item__tags">
                <p>
                  <span v-for="tag in caseitem.tags">
                    {{ tag.title }}
                  </span>
                </p>
            </div>
        </g-link>
    </div>
</template>

<script>
    export default {
        components: {},
        props: ['caseitem'],
    }
</script>

<style lang="scss">
    .case {
        &__item {
            display: block;
            text-decoration: none !important;

            &:hover {
                .item__img {
                    box-shadow: 0 13px 12px -4px rgba(0,0,0,0.75);
                    transform: translateY(-5px);
                }
            }

            * {
                text-decoration: none;
            }
        }
    }

    .item {
        &__img {
            background-image: url("/images/uploads/city.jpg");
            background-position: center center;
            background-size: cover;
            padding-top: 70%;
            margin-bottom: 12px;
            transition: all 240ms ease-in-out;

            @include media-breakpoint-up(md) {
                padding-top: 100%;
            }
        }

        &__title {
            text-transform: uppercase;
            font-weight: 700;
            opacity: .8;
            font-size: 1.2rem;
            line-height: 1.4rem;
            color: rgba(#000, .75);
        }

        &__tags {
            text-align: right;

            span {
                padding: 2px 0px;
                color: rgba(#000, .5);
                margin: 5px 10px;
                position: relative;
                font-style: italic;
                font-size: .9em;
                text-transform: uppercase;

                &:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 90%;
                    height: 1px;
                    background-color: rgba(#000, .5);
                    transform: scaleX(0);
                    transition: all 220ms ease-in-out;
                }

                &:hover {
                    &:before {
                        transform: scaleX(1);
                    }
                }

                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>
