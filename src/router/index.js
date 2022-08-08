import Vue from 'vue'
import Router from 'vue-router'
import ChatRoom from "@/components/ChatRoom";

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: () => import('@/components/Login'), hidden: true },

    {
      path: '/ChatRoom',
      name: 'ChatRoom',
      component: ChatRoom
    }
  ]
})
