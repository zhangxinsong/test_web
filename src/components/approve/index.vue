<template>
    <div class="signin">
        <div class="header">报名审批</div>
        <div>
        	<approve></approve>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'approve': ()=> import('./approve')
    }
}
</script>

<style scoped lang="less">
    .signin {
        width: 100%;
        height: 100%;
        .header{
            height: 50px;
            line-height: 50px;
            margin-left: 20px;
        }
    }
</style>