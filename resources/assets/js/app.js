/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue')

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('chat-composer', require('./components/ChatComposer.vue'))
Vue.component('chat-message', require('./components/ChatMessage.vue'))
Vue.component('chat-log', require('./components/ChatLog.vue'))

const app = new Vue({
  el: '#app',
  data: {
    messages: []
  },
  methods: {
    saveMessage (e) {
      axios.post('/messages', {text: e})
        .then(response => {
          //console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    axios.get('/messages')
      .then(response => {
        this.messages = response.data
      })
      .catch(error => {
        console.log(error)
      })

    Echo
      .join('chatroom')
      .here(users => {
        console.log(users.length + ' utilisateurs en ligne')
      })
      .joining(user => {
        console.log(user.name + 'a rejoint la salle de discussion')
      })
      .leaving(user => {
        console.log(user.name + 'a quitté la salle de discussion')
      })
      .listen('.message.created', e => {
        console.log(e.message)
        this.messages.push(e.message);
      })
  }
})
