<template>
    <div class="form-group-lg">
        <input class="form-control"
               type="text"
               v-model="text"
               @keyup.enter="sendMessage">
        <br>
        <button class="btn btn-primary pull-right"
                @click="sendMessage">
            Envoyer le message
        </button>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        text: ''
      }
    },
    methods: {
      sendMessage () {
        this.$emit('messagecreated', this.text)
        this.text = ''
      }
    }
  }
</script>