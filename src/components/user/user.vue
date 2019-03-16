<template>
    <div class="user">
        <div class="h">
            <h1>用户管理</h1>
        </div>
        <div class="c">
            <Table border :columns="columns5" :data="data"></Table>
        </div>
    </div>
</template>

<script>
import util from '../../util/util.js'
export default {
    data (){
        return {
            data:[],
            columns5:[{
                title: '用户名',
                key: 'loginName',
                width: 150,
                sortable: true
            },{
                title: '姓名',
                width: 120,
                key: 'name'
            },{
                title: '性别',
                width: 80,
                key: 'sex',
            },{
                title: '生日',
                key: 'birthday',
                render: (h,params) => {
                    return h('div',util.formatDate(new Date(params.row.birthday),'YYYY-MM-DD'))
                }
            },{
                title: '邮箱',
                key: 'email'
            },{
                title: '密码',
                key: 'password',
            },{
                title: '操作',
                key: 'action',
                width: 190,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                size: 'small'
                            },
                            style: {
                                marginRight: '5px',
                                background: '#00a100',
                                color: '#fff'
                            },
                            on: {
                                click: () => {
                                    this.editUser(params.row.memberId)
                                }
                            }
                        }, '编辑'),
                        h('Button', {
                            props: {
                                size: 'small'
                            },
                            style: {
                                background: '#E14C46',
                                marginRight: '5px',
                                color: '#fff'
                            },
                            on: {
                                click: () => {
                                    this.deleteQuestion(params.row.id)
                                }
                            }
                        }, '删除')
                    ]);
                }
            }]
        }
    },
    methods: {
        getUserList(){
            this.$ajax.get(`/rest/v1/client/user/list`,{})
            .then(res => this.data = res.userlist)
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
        editUser(id){
            this.$router.push({
                path: '/home/userEdit',
                query: {
                    memberId:id
                }
            })
        },
        onclick(){
            // this.$router.push({
            //     path: '/home/setTest'
            // });
        },
    },
    mounted(){
        this.getUserList();
    }
}
</script>

<style lang="less">
    .user{
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
        }
    }
    .ivu-btn{
        border: none;
    }
</style>