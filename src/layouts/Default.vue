<template>
  <div id="app">

    <header class="header" :class="{'header__bg--white': navScroll}">
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
      <span class="footer__links">Powered by <a href="//www.sanderscheijbeler.nl"> Me, Sander... </a></span>
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
      navState: false,
      navScroll: false
    }
  },
  components: {
    Logo,
    // ToggleTheme,
    Navigation
  },
  methods: {
    handleScroll() {
      this.navScroll = 0 < window.scrollY
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },

  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
}
</script>

<style lang="scss">

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  left: 0;
  z-index: 2000;
  position: fixed;
  width: 100%;
  transition: background-color 220ms ease;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  &__navbutton {
    font-weight: 800;
    line-height: 33px;

    &:hover {
      cursor: pointer;
    }
  }

  &__bg {
    &--white {
      background-color: #ffffff;
    }
  }
}

  .footer {
    text-align: center;
  }
</style>
