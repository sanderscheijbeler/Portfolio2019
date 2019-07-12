<template>
  <div id="app">

    <header class="header">
      <div class="header__left">
        <Logo/>
      </div>

      <div class="header__right">
        <div 
        class="header__navbutton"
        @click="navState = !navState">MENU</div>
        
      </div>
    </header>

    <main class="main">
      <slot/>
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. </span>
      <span class="footer__links">Powered by <a href="//www.suits.at"> SUITS </a></span>
    </footer>

    <Navigation :navState="navState" />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  data() {
    return {
      navState: false
    }
  },
  components: {
    Logo,
    ToggleTheme,
    Navigation
  }
}
</script>

<style lang="scss">

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }
  &__navbutton {
    font-weight: 800;
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;
  margin-top: auto;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>
