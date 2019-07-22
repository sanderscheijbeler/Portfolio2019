<template>
<div class="about__wrapper" id="readmore">
    <div class="image">

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.about {
    &__wrapper {
        position: relative;
        margin: 100px 0;

        &:after {
            content: 'about';
            position: absolute;
            right: 20px;
            top: 0;
            text-transform: uppercase;
            font-size: 12vw;
            font-weight: 800;
            opacity: .1;
            z-index: -10;
        }
        .image {
            height: 25vw;
            max-height: 600px;
            width: 25vw;
            max-width: 600px;
            background-size: cover;
            background-position: center;
            background-image: url("/images/uploads/city.jpg");
        }
    }
}

</style>
