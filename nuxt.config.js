import messages from './i18n';

export default {
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TIGA | DINH HOANG TUAN',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'title',
        property: 'title',
        content: 'TIGA | DINH HOANG TUAN',
      },
      {
        hid: 'description',
        name: 'description',
        content: `Hello! I'm Dinh Hoang Tuan`,
      },
      { property: 'og:site_name', content: `TIGA` },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tigading.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'TIGA | DINH HOANG TUAN',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `Hello! I'm Dinh Hoang Tuan`,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://tigading79.web.app/cover.png',
      },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: 'TIGA' },
      {
        name: 'twitter:card',
        content: 'https://tigading79.web.app/cover.png',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://tigading.com',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'TIGA | DINH HOANG TUAN',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: `Hello! I'm Dinh Hoang Tuan`,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://tigading79.web.app/cover.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-svg', href: '/favicon.svg' }],
  },

  loading: {
    color: '#00C8CC',
    continuous: true,
    duration: 1000,
    throttle: 0,
  },

  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/sass/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-inline-svg'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/sitemap',
  ],

  styleResources: {
    scss: [
      '~/assets/sass/abstracts/variables.scss',
      '~/assets/sass/abstracts/mixins.scss',
      '~/assets/sass/abstracts/responsive.scss',
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', 'nuxt-i18n', '@nuxt/postcss8'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.API_BASE_URL,
    debug: process.env.DEBUG || false,
    proxyHeaders: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        // eslint-disable-next-line no-param-reassign
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map';
      }
    },

    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },

    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
      alwaysRedirect: true,
    },

    vueI18n: {
      fallbackLocale: 'en',
      messages,
    },
  },

  vue: {
    config: {
      productionTip: false,
      devtools: process.env.NODE_ENV === 'development' || process.env.DEBUG,
    },
  },

  sitemap: {
    hostname: process.env.HOST_NAME,
    gzip: true,
  },
};
