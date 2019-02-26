<template>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      transitionName: 'slide-left'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
  background: aqua;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
