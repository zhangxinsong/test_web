<template>
    <div class="testList">
        <div class="h">
            <h1>考试列表</h1>
        </div>
        <div class="c">
            <li v-for="(item,index) in data" :key="index">
                <list-item :data="item" @onDelete="onDelete"></list-item>
            </li>
            <li>
                <list-add-item @click.native="onclick">
                    添加考试
                </list-add-item>
            </li>
        </div>
    </div>
</template>

<script>
import listItem from './list-item/listItem.vue';
import listAddItem from './list-item/listAddItem.vue';
export default {
    components: {
        listItem,
        listAddItem
    },
    data (){
        return {
            isAdd: true,
            data:[]
        }
    },
    methods: {
        getTestList(){
            this.$ajax.get(`/rest/v1/answer/exam?size=100`,{})
            .then(res => this.data = res)
        },
        onDelete(data){
            this.$confirm({
                title: "确认删除",
                content: "确认删除这个考试吗？",
                onConfirm: () =>{
                    this.$ajax.delete(`/rest/v1/answer/exam/${data.id}`,{})
                    .then(res => {
                        this.$Message.success("删除成功");
                        this.getTestList();
                    })
                    .catch(err => this.$Message.warning("网络错误"))
                }
            });
        },
        onclick(){
            this.$router.push({
                path: '/home/setTest'
            });
        },
    },
    mounted(){
        this.getTestList();
    }
}
</script>

<style lang="less" scoped>
    .testList{
        width: 100%;
        height: 100%;
        position: relative;
        background: #f3f3f3;
        .h{
            position: absolute;
            top: 0;
            left: 20px;right: 20px;
            height: 50px;
            border-bottom: 1px #999da7 solid;
            h1{
                line-height: 50px;
                font-size: 18px;
            }
        }
        .c{
            position: absolute;
            top: 50px;bottom: 0;
            left: 0;right: 0;
            padding: 20px;
            overflow: auto;
            li {
                display: inline-block;
                width: 250px;
                height: 120px;
                background-color: #fff;
                box-shadow:0px 1px 0px 0px rgba(245,245,245,1);
                border-radius: 4px;
                margin: 0 20px 20px 0; 
                float: left;
            }
        }
    }
</style>