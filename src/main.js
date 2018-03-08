import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history'
})

//全局守卫
router.beforeEach((to,from,next)=>{

  console.log(to.matched)
  next()
  // if(to.path=='/login' || to.path=='/register'){
  //   next()
  // }else{
  //   alert("请登录后再访问");
  //   next('/login')
  // }
  
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
