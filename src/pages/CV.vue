<template>
  <Layout>

    <section class="section-cv">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="cv__info">
              <img class="cv__image" src="/images/uploads/city.jpg" alt="Me!">
              <h1 class="cv__title">
                Sander Scheijbeler
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'CV'
  },
  data() {
    return {
      birthDate : new Date(1987, 1, 14),
      dateNow : new Date()
    }
  },
  mounted() {
      setInterval(() => {
        this.dateNow = new Date()
      },1000)
  },
  computed: {
    myAge () {
      let years = this.dateNow.getFullYear() - this.birthDate.getFullYear()

      return `${years} jaar`
    }
  }
}
</script>

<style lang="scss">
  .section-cv {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 100px 0 0 0;

    .cv {
      &__info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &__image {
        object-fit: cover;
        height: 200px;
        width: 200px;
        border-radius: 50%;
        margin-bottom: 12px;
       }
      &__title {
        font-size: 1.3rem;
        text-align: center;
      }
    }
  }
</style>
