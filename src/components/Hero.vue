<template>
    <div class="grid-wrapper">
        <div class="grid-container">
            <div class="imageone">
                <img src="..\..\static\images\uploads\police.jpg" alt="sander as a police officer">
            </div>
            <div class="imagetwo">
                <img src="..\..\static\images\uploads\city.jpg" alt="sander in the city">
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
    //   border: 1px solid red;
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
        font-size: 2.7rem;
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
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
        font-size: 2.7rem;
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: -10px;
    }

    .accent {
        position: relative;
        animation: blinkRedBlue 0.5s infinite;
        color: #fff; 
        
        &:hover {
            animation-play-state: running;
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
        font-size: 2.7rem;
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: -6px;
    }
}

</style>
