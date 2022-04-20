

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","messages":{"en":{"sidebar":{"customHeader":"Custom header","linkActive":"Active","normalLink":"Link","anotherLink":"Another Link"},"headerBar":{"searchPlaceholder":"Search...","lang":{"en":"English","ja":"日本語","vi":"Tiếng Việt"},"profileLink":"Profile","logoutLink":"Sign Out"},"welcome":"Welcome!"},"vi":{"sidebar":{"customHeader":"Tiêu đề","linkActive":"Đang mở","normalLink":"Liên kết","anotherLink":"Liên kết khác"},"headerBar":{"searchPlaceholder":"Tìm kiếm...","lang":{"en":"English","ja":"日本語","vi":"Tiếng Việt"},"profileLink":"Cá nhân","logoutLink":"Đăng xuất"},"welcome":"Chào mừng!"}}},
  vueI18nLoader: false,
  locales: ["en","vi"],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":true,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en"},{"code":"vi"}],
  localeCodes: ["en","vi"],
}
