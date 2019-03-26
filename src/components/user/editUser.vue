<template>
    <div class="useredit">
        <div class="h">
            <h1>编辑用户</h1>
        </div>
        <div class="c">
            <Form class="form" :model="data" :label-width="80">
                <FormItem label="用户名" required >
                    <Input v-model="data.loginName" disabled ></Input>
                </FormItem>
                <FormItem label="姓名" >
                    <Input v-model="data.name" ></Input>
                </FormItem>
                <FormItem label="性别" >
                    <RadioGroup v-model="data.sex">
                        <Radio label="男"></Radio>
                        <Radio label="女"></Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="生日" >
                    <DatePicker type="date" v-model="data.birthday" placeholder="Select date" style="width: 200px"></DatePicker>
                </FormItem>
                <FormItem label="手机" >
                    <Input v-model="data.mobile" ></Input>
                </FormItem>
                <FormItem label="邮箱" >
                    <Input v-model="data.email" ></Input>
                </FormItem>
                <FormItem label="密码" >
                    <Input v-model="data.password" ></Input>
                </FormItem>
            </Form>
        </div>
        <div class="f">
            <Button type="primary" @click="submit">保存</Button>
            <Button style="margin-left: 8px" @click="cancel">取消</Button>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
            memberId: '',
            data:{},
        }
    },
    methods: {
        getUserData(){
            this.$ajax.get(`/rest/v1/client/user/info?memberId=${this.memberId}`,{})
            .then(res => this.data = res.inAPIUser)
        },
        submit(){
            this.$ajax.put(`/rest/start/signin/update/${this.memberId}`,this.data)
            .then(res => {
                this.$Message.success("修改成功");
                this.$router.back();
            })
        },
        cancel(){
            this.$router.back();
        }
    },
    mounted(){
        this.memberId = this.$route.query.memberId;
        this.getUserData();
    }
}
</script>

<style lang="less" scoped>
    .useredit{
        width: 100%;
        height: 100%;
        position: relative;
        background: #fff;
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
            .form{
                width: 600px;
                margin: 0 auto;
            }
        }
        .f{
            position: absolute;
            left: 0;right: 0;
            bottom: 0;
            height: 70px;
            text-align: center;
            padding-top: 10px;
        }
    }
</style>