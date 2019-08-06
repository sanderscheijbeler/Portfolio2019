<template>
    <nav class="nav" :class="{'nav--open': navState}">
        <ul>
            <li>
                <g-link to="/">
                    Home
                </g-link>
            </li>
            <li>
                <g-link to="/about">
                    About
                </g-link>
            </li>
            <li>
                <g-link to="/cv">
                    CV
                </g-link>
            </li>
            <!--            <li>-->
            <!--                <g-link to="/blog">-->
            <!--                    Blog-->
            <!--                </g-link>-->
            <!--            </li>-->
            <!--        <li>-->
            <!--          <g-link to="/contact">-->
            <!--            Contact-->
            <!--          </g-link>-->
            <!--        </li>-->
            <!--        <li>-->
            <!--            <ToggleTheme />-->
            <!--        </li>-->
        </ul>
    </nav>
</template>

<script>
    import ToggleTheme from '~/components/ToggleTheme.vue'

    export default {
        props: ['navState'],
        components: {
            ToggleTheme
        }
    }
</script>

<style lang="scss">
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: var(--bg-color);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: -1;

        // transform: translateY(-100%);
        opacity: 0;
        transition: 300ms all ease-in-out;

        &--open {
            opacity: 1;
            z-index: 1000;
            // transform: translateY(0%);
        }

        ul {
            margin: 0;
            padding: 0;

            li {
                margin: 0;
                padding: 0;
                list-style: none;
                display: block;


                a {
                    color: rgba(#000, .8);
                    font-size: 2rem;
                    font-weight: 700;
                    padding: 12px 12px;

                    @include media-breakpoint-up(md) {
                        font-size: 3rem;
                    }

                    @include media-breakpoint-up(lg) {
                        font-size: 4rem;
                    }

                    &:hover {
                        text-decoration: none;
                    }
                }
            }
        }
    }
</style>
