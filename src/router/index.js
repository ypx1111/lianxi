import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routerConfig'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  // console.log(to,from,next)
  if(to.matched.some(item=>item.meta.requires)){
    //需要守卫
    if(!window.localStorage.user){
      next({
        path:'/login',
        query:{
          redirect:to.fullPath
        }
      })
    }else{
      next()
    }
  }else{
    next()
  }
})
export default router
