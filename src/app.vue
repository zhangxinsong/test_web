<template>
    <div class="big">
        <router-view></router-view>
    </div>    
</template>
<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
        
    }
}
</script>
<style lang="less" scoped>
    .big{
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>
