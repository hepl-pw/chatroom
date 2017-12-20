<template>
    <div>
        <div>{{message.text}}</div>
        <div>{{message.user.name}}</div>
    </div>
</template>

<script>
  export default {
    props: ['message']
  }
</script>