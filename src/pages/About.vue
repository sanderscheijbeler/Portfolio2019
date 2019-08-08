<template>
  <Layout>

    <section class="section-about">
      <div class="container">
        <div class="row">
          <div class="col-sm-10">
            <h1 class="mb-3">
              "Now this is a story all about how my life got twisted upside down..."
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <p class="text__col">
              Lang verhaal kort. Ik ben Sander en ik ben {{ myAge }}, werk momenteel sinds April 2018 als Front End Developer. Daarvoor was ik politieagent in hartje Rotterdam. Hierdoor heb ik onder unieke omstandigheden geleerd wat teamwerk, doorzetten, verantwoordlijkheid is.
            </p>

            <img class="mb-3" src="/images/uploads/city.jpg" alt="Me!">

            <h2 class="mb-3">
              Maar waarom?
            </h2>
            <p>
              Tijdens mijn carriere als agent ben ik altijd actief gebleven door kleine edits te doen aan bestaande wordpress sites. Na alle spanning en sensatie besloten mijn vrouw en ik meer rust te gaan zoeken. Hierdoor ben ik mijn kennis en ervaring binnen de web development gaan professionaliseren. Na enige tijd 'landde' in mijn eerste baan als Front End Developer.
            </p>

            <h2 class="mb-3">
              Dus.. wat doe je?!
            </h2>
            <p>
              Tijdens mijn huidige functie heb ik verschillende projecten gedraaid. Het uitwerken van styleguides, realiseren van bedrijfs-landingspagina's, ontwikkelen van custom wordpress thema's. Maar ook opzoek naar custom oplossingen zoals een klantenportaal binnen een Dynamics 365 omgeving.
            </p>
            <p>
              Ik werk in HTML, (S)CSS, PHP, JavaScript (ES6). <br>
              Gewoon nog wat termen waar ik mee werk of heb gewerkt: Docker, Bootstrap4, VueJS/NuxtJS, jQuery, Git, twig, Wordpress.
            </p>
          </div>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'About'
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
      // let monts = this.dateNow.getMonth() - this.birthDate.getMonth()

      return `${years} jaar`
    }
  }
}
</script>

<style>
  .section-about {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 100px 0 0 0;
  }
</style>
