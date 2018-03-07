import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

Vue.use(VueRouter)

const routes = [
  {path:'/',name:'homeLink',component:Home},
  {path:'/menu',name:'menuLink',component:Menu},
  {path:'/admin',name:'adminLink',component:Admin},
  {path:'/about',name:'aboutLink',redirect:'/contact',component:About,children:[
    {path:'/contact',name:'contactLink',component:Contact},
    {path:'/delivery',name:'deliveryLink',component:Delivery},
    {path:'/history',name:'historyLink',component:History},
    {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
  ]},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/register',name:'registerLink',component:Register},
  {path:'*',redirect:'/'}
]

const router = new VueRouter({
  routes,
  mode:'history'
})

//全局守卫
router.beforeEach((to,from,next)=>{
  if(to.path=='/login' || to.path=='/register'){
    next()
  }else{
    alert("请登录后再访问");
    next('/login')
  }
  
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
