import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Home from '../page/Home/home'
import Story from '../page/Story/story'
import Center from '../page/Center/center'
import News from '../page/News/news'
import About from '../page/About/about'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      redirect: '/home',
      children:[
        {path: 'home', component: Home},
        {path: 'story', name: 'story', component: Story},
        {path:'center',name:'center',component:Center},
        {path:'news',name:'news',component:News},
        {path:'about',name:'about',component:About},
          ]
       },
    
  ]
})
