import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'
import hello from '@/components/Hello.vue'
import index from '@/components/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/hello',
      name: 'Hello',
      component: hello
    }
  ]
})
