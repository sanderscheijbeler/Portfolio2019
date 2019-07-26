<template>

    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-sm-7">
                <div class="hero">
                    <div class="image"></div>
                    <div class="content">
                        <h1>How a cop became a coder</h1>
                        <p>My name is Sander, and i create websites.. also i used to be a policeofficer. Weird
                            right?!</p>
                        <p><a href="#readmore"><span>Read</span> more</a></p>
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

        .image {
            width: 100%;
            padding-top: 115%;
            background-image: url("/images/uploads/sander.jpg");
            background-size: 132%;
            background-position: 100% 32%;
        }

        .content {
            position: absolute;
            top: 0;
            left: 0;

            transform: translate(50%, 121px);
            width: 100%;
            padding: 2em;
            background-color: rgba(#000, .7);
            color: #fff;
            z-index: 10;

            h1 {
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-weight: 600;
            }

            p {
                font-weight: 100;
                margin: 0;

                &:last-child {
                    margin-top: 44px;
                    text-align: right;
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
