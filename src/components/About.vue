<template>
    <div class="container mb-50">
        <div class="row">
            <div class="col-sm-12">
                <div class="about__wrapper" id="readmore">
                    <div class="about__image">

                    </div>
                    <div class="about__content">
                        <h2>
                            Imagine all the stories...
                        </h2>
                        <p>
                            Yes, I arrested people. No, I did not run red lights just because my dinner was getting cold. The most fun part of beeing a cop was ...
                        </p>
                        <p class="about__more">
                            <g-link to="/about">
                                <span>Read</span> more
                            </g-link>
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

    .about {
        &__wrapper {
            position: relative;
            display: flex;
            flex-direction: column;

            @include media-breakpoint-up(md) {
                flex-direction: row;
            }

            &:after {
                content: 'about';
                position: absolute;
                right: 20px;
                top: 3rem;
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

        &__image {
            flex: 1 0 300px;
            height: 300px;
            max-height: 300px;
            background-size: cover;
            background-position: center;
            background-image: url("/images/uploads/city.jpg");
            box-shadow: none;

            @include media-breakpoint-up(md) {
                flex: 1 0 400px;
                height: 400px;
                max-height: 400px;
                box-shadow: -15px 15px 0px 2px rgba(0,0,0,0.85);
            }
        }

        &__content {
            margin-top: 32px;
            transform: translate(0%, 0%);

            @include media-breakpoint-up(md) {
                margin-top: 0;
                transform: translate(-9%, 17%);
            }

            h2 {
                text-transform: uppercase;
                font-weight: 600;
                letter-spacing: 1px;
                opacity: .75;
                position: relative;

                @include media-breakpoint-down(md) {
                    font-size: 1.5rem;
                }

                &:before {
                    content: '';
                    position: absolute;
                    bottom: -21px;
                    left: 0;
                    width: 20%;
                    height: 2px;
                    background-color: rgba(#000,.75);
                }
            }
            p {
                font-size: .8em;
                width: 50%;
                margin-left: auto;
                margin-right: 25%;

                @include media-breakpoint-down(md) {
                    margin-right: 0;
                    width: 72%;
                }
            }
        }
        &__more {
            margin-top: 0;
            text-align: right;

            @include media-breakpoint-up(md) {
                margin-top: 40px;
            }
            a {
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
    }

</style>
