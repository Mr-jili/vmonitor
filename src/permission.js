import router from './router'
import { LoadingBar } from 'iview'

router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})

router.afterEach((to) => {
  LoadingBar.finish()
})
