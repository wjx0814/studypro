<template>
  <div id="app">
    <img @click="toimg(imgurl)" src="imgurl">
    <router-view/>
  </div>
</template>

<script>
import kscreenshot from 'kscreenshot'

export default {
  name: 'App',
  data () {
    return {
      imgurl:'./assets/logo.png'
    }
  },
  methods: {
    toimg(imgurl){
      console.log(imgurl)
    }
  },
  mounted () {
        // this.$axios({
        //   url:"http://localhost:3000/userlist",
        //   method:"post",
        //   // 成功
        // }).then((res)=>{
        //   console.log(res);
        // // 失败
        // }).catch((err)=>{
        //   console.log(err)
        // })
        new kscreenshot(65, function (base64) {
          console.log(45454545)
          console.log(base64)
            return 'https://www.baidu.com/img/bd_logo1.png'
        })
        console.log(this.imgurl)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
