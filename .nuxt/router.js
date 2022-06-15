import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f3b09f2 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _a669d5ba = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _6b356e70 = () => interopDefault(import('../pages/oops.vue' /* webpackChunkName: "pages/oops" */))
const _d39c262e = () => interopDefault(import('../pages/blog/_title.vue' /* webpackChunkName: "pages/blog/_title" */))
const _e97fe0d6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _4f3b09f2,
    name: "blog___en"
  }, {
    path: "/contact",
    component: _a669d5ba,
    name: "contact___en"
  }, {
    path: "/oops",
    component: _6b356e70,
    name: "oops___en"
  }, {
    path: "/blog/:title",
    component: _d39c262e,
    name: "blog-title___en"
  }, {
    path: "/",
    component: _e97fe0d6,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
