<template>
    <div class="container mb-50">
        <div class="row">
            <div class="col-sm-12">
                <div class="cases__wrapper">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="case__text">
                                <p class="case__border">
                                    These are some of the projects I have worked on by myself. Every case has its own story.. <small>Projects that I did at my current job are not listed here.</small>
                                </p>
                                <p>
                                    <g-link to="/cases" class="case__link">
                                        <span>Read</span> more
                                    </g-link>
                                </p>
                            </div>
                        </div>
                        <caseItem v-for="edge in $static.cases.edges" :key="edge.node.id" :caseitem="edge.node" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<static-query>
    query Cases {
        cases: allCase(limit: 2) {
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
</static-query>

<script>
    import caseItem from '~/components/caseItem.vue'

    export default {
        components: {
            caseItem
        }
    }
</script>

<style lang="scss" scoped>

    .cases {
        &__wrapper {
            position: relative;

            &:after {
                content: 'cases';
                position: absolute;
                left: 20px;
                top: 0;
                text-transform: uppercase;
                font-size: 170px;
                line-height: 0;
                font-weight: 800;
                opacity: .05;
                z-index: -10;
                display: none;

                @include media-breakpoint-up(md) {
                    display: block;
                }
            }
        }
    }

    .case {
        &__text {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        &__border {
            border-left: none;
            padding: 12px;
            opacity: .75;
            border-top: 2px solid rgba(#000, .8);
            border-bottom: 2px solid rgba(#000, .8);

            @include media-breakpoint-up(md) {
                border-top: none;
                border-bottom: none;
                border-left: 2px solid rgba(#000, 1);
                padding: 0 0 0 23px;
            }
        }

        &__link {
            display: block;
            text-align: right;
            color: rgba(#000,.75);
            text-decoration: none;
            line-height: 18px;
            letter-spacing: 2px;

            span {
                font-weight: 500;
                border-left: 1px solid rgba(#000,.75);
                padding-left: 6px;
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
                    background-color: #000;
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
