<template>
    <div class="questionBank">
        <div class="h">
            <h1>题库列表</h1>
        </div>
        <div class="c">
            <li v-for="(item,index) in data" :key="index">
                <list-item :data="item" @onEdit="onEdit" @onEnable="onEnable"></list-item>
            </li>
            <li>
                <list-add-item @click.native="onAdd">
                    添加题库
                </list-add-item>
            </li>
        </div>
        <Modal
            v-model="addBank"
            title="编辑题库"
            @on-ok="ok"
            @on-cancel="cancel">
            <div class="editbank">
                题库名称：
                <Input v-model="bankName" placeholder="Enter name" style="width: 80%" />
            </div>
            <div class="editbank">
                题库描述：
                <Input v-model="bankDescription" placeholder="Enter name" style="width: 80%" />
            </div>
        </Modal>
    </div>
</template>
<script>
import listItem from './bank-item/listItem.vue';
import listAddItem from './bank-item/listAddItem.vue';
export default {
    components: {
        listItem,
        listAddItem
    },
    data (){
        return {
            bankName: '',   //题库名称
            bankDescription: '',  //题库描述
            blankId: null,  //题库ID
            isEditBank: false,  //false新增、true编辑
            addBank: false,
            data:[],
        }
    },
    methods: {
        getQuestionBankList(){    //获取题库列表
            this.$ajax.get(`/rest/v1/question/blank/list`,{})
            .then(res => this.data = res)
            .catch(err => this.$Message.warning("获取列表失败"))
        },
        onEdit(data){  //弹出编辑题库modal
            this.bankName = data.name;
            this.bankDescription = data.description;
            this.blankId = data.id;
            this.isEditBank = true;
            this.addBank = true;
        },
        onEnable(data){  //启用禁用题库
            this.$ajax.put(`/rest/v1/question/blank/${data.id}/${data.enable?'disable':'enable'}`,{})
            .then(res => {
                this.$Message.success(data.enable ? "禁用成功" : "启用成功");
                this.getQuestionBankList();
            })
            .catch(err => this.$Message.warning(data.enable ? "禁用失败" : "启用失败"))
        },
        onAdd(){
            this.isEditBank = false;
            this.addBank = true;
        },
        ok(){
            if(this.isEditBank){
                this.$ajax.put(`/rest/v1/question/blank/${this.blankId}`,{
                    description: this.bankDescription,
                    name: this.bankName,
                })
                .then(res => {
                    this.$Message.success("修改成功");
                    this.bankDescription = '',
                    this.bankName = '',
                    this.getQuestionBankList();
                })
                .catch(err => {
                    this.$Message.warning("编辑失败");
                })
            }else{
                this.$ajax.post(`/rest/v1/question/blank`,{
                    description: this.bankDescription,
                    name: this.bankName,
                })
                .then(res => {
                    this.$Message.success("修改成功");
                    this.bankDescription = '',
                    this.bankName = '',
                    this.getQuestionBankList();
                })
                .catch(err => {
                    this.$Message.warning("编辑失败");
                })
            }
        },
        cancel(){}
    },
    mounted(){
        this.getQuestionBankList();
    }
}
</script>
<style lang="less" scoped>
.questionBank{
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
<style lang="less">
    .editbank{
        padding: 0 20px;
        font-size: 14px;
        margin-top: 10px;
    }
</style>