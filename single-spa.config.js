  
import { registerApplication, start } from 'single-spa'

registerApplication(
    'vue-app',
    () => import('./packages/vue-app'),
    location => location.pathname === '/vue-app'
)

start()