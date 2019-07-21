<template>
<div class="hero__wrapper">
    <div class="image">
        <img src="images\uploads\sander.jpg" alt="sander as a police officer">
        
        <div class="content">
            <h1>How a cop became a coder</h1>
            <p>My name is Sander, and i create websites.. also i used to be a policeofficer. Weird right?!</p>
            <p><a href="#readmore"><span>Read</span> more</a></p>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.hero {
    &__wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .image {
            margin: 0 auto;
            position: relative;
            width: 50%;
            
            img {
                
            }
        }

        .content {
            position: absolute;
            top: 0;
            left: 0;

            transform: translate(30%, 150px);
            width: 100%;
            padding: 2em;
            background-color: rgba(#000, .7);
            color: #fff;
            z-index: 10;

            h1 {
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 2px;
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
}

</style>
