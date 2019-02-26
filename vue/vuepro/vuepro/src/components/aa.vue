<template>
    <div class="aa" @click="goback">
        我是页面aa
    </div>
</template>

<script>
export default {
    name:'aa',
    data () {
        return {
            
        }
    },
    methods: {
        goback(){
            this.$router.goBack()
        }
    }
}
</script>
<style scoped>
.aa {
  width: 100%;
  height: 100%;
  background: pink;
}
</style>

