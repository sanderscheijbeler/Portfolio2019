<template>
    <g-link class="logo" to="/">
	  <span class="logo__text">
	    {{ $static.metaData.siteName }}
	  </span>
    </g-link>
</template>

<static-query>
    query {
    metaData {
    siteName
    }
    }
</static-query>

<style lang="scss">
    .logo {
        text-decoration: none;
        color: var(--body-color) !important;
        font-size: 1.3em;
        font-weight: 800;

        &__image {
            vertical-align: middle;
            border-radius: 99px;
            height: 40px;
            width: 40px;
            margin-right: .5em;
        }
    }
</style>
