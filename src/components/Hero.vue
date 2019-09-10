<template>

    <div class="container mt-5 mb-50">
        <div class="row">
            <div class="col-sm-12 mt-md-5">
                <div class="hero">
                    <div class="image"></div>
                    <div class="content">
                        <h1>
                            How a cop became a coder
                        </h1>
                        <p>
                            My name is Sander, and I create websites. I also used to be a police officer. Weird right?!
                        </p>
                        <p>
                            <a href="#readmore">
                                <span>Read</span> more
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>

    .hero {
        position: relative;
        width: 100%;

        .image {
            width: 100%;
            padding-top: 120%;
            background-image: url("/images/uploads/sander.jpg");
            background-size: 132%;
            background-position: 100% 32%;
            margin: 0 auto;

            @include media-breakpoint-up(md) {
                width: 70%;
                padding-top: 80%;
            }
        }

        .content {
            position: static;
            top: auto;
            bottom: 0;
            right: 0;

            width: 100%;
            padding: 1.5em;
            background-color: rgba(#000, .7);
            color: #fff;
            z-index: 10;
            margin-top: -30%;

            @include media-breakpoint-up(md) {
                margin-top: 0;
                position: absolute;
                top: 200px;
                width: 50%;
                bottom: auto;
                padding: 2em;
            }

            h1 {
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 600;

                @include media-breakpoint-down(md) {
                    font-size: 1.4rem;
                }
            }

            p {
                font-weight: 100;
                margin: 0;

                @include media-breakpoint-down(md) {
                    /*font-size: ;*/
                }

                &:last-child {
                    margin-top: 22px;
                    text-align: right;

                    @include media-breakpoint-up(md) {
                        margin-top: 44px;
                    }

                }

                a {
                    color: #fff;
                    text-decoration: none;
                    line-height: 18px;
                    letter-spacing: 2px;

                    span {
                        font-weight: 500;
                        border-left: 1px solid #fff;
                        padding-left: 6px;
                    }
                }
            }
        }
    }

</style>
