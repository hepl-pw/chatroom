<template>
    <div>
        <chat-message v-for="message in messages" :message="message"></chat-message>
    </div>
</template>

<script>
    export default{
      props:['messages']
    }
</script>