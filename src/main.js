import Vue from 'vue'
// ./App.vueファイルをAppとして取り込む
import App from './App.vue'

Vue.config.productionTip = false

// AppというパーツをHTMLのid="app"に表示する
// Appは./App.vueというファイルが取り込まれたもの
new Vue({
  render: h => h(App),
}).$mount('#app')
