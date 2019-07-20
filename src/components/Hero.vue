<template>
    <div class="grid-wrapper">
        <div class="grid-container">
            <div class="imageone">
                <img src="images\uploads\police.jpg" alt="sander as a police officer">
            </div>
            <div class="imagetwo">
                <img src="images\uploads\city.jpg" alt="sander in the city">
            </div>
            <div class="textone">
                <span>
                    how a
                </span>
            </div>
            <div class="texttwo">
                <span class="accent">cop</span>&nbsp;<span>became a</span>
            </div>
            <div class="textthree">
                <span>coder</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.grid-wrapper {
    width: 80%;
    margin: 0 auto;
}

.grid-container {
  display: grid;
  grid-template-columns: 0.2fr 1fr 1fr 0.2fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: ". imageone textthree ." "textone imageone imagetwo ." ". texttwo . .";
  grid-gap: 11px;

  * {
    border: 1px solid red;
  }
}

span {
    font-size: 1.5rem;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;

    @media screen and (min-width: 650px) {
	    font-size: 2.7rem;
        line-height: 1em;
    }
}

.imageone {
    grid-area: imageone;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.imagetwo {
    grid-area: imagetwo;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.textone {
    grid-area: textone;
    position: relative;

    span {
        display: block;
        transform: rotate(-90deg) translateX(50%);
        width: 100%;
        white-space: nowrap;
        margin: 0;
        padding: 0;

        position: absolute;
        top: 88%;
        right: -23%;

    }
}

.texttwo {
    grid-area: texttwo;

    span {
        display: inline-block;
        margin-top: -10px;
    }

    .accent {
        position: relative;
        color: var(--body-color);
        z-index: 1;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2%;
            animation: blinkRedBlue 0.5s infinite;
            animation-play-state: paused;
            z-index: -1;
            transition: all 110ms ease-in;
        }

        &:hover {
            color: #fff;

            &:before {
                height: 100%;
                animation-play-state: running;
            }
        }
    }
}

.textthree {
    grid-area: textthree;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    span {
        display: inline-block;
        margin-bottom: -6px;
    }
}

</style>
