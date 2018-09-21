<template>
    <div class="login">
        <div class="login-box">
            <h2>登录</h2>
            <form @submit.prevent='sendLogin' autocomplete="off">
                <div><input type="text" name="user" placeholder="请输入用户名" ref="userInput"></div>
                 <div><input type="password" name="password" placeholder="请输入密码" ></div>
                <div class="login-btn"><input type="submit" value="一键登入"></div>
            </form>
            <div class="back-index">
                <router-link to="/">首页</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return{}
    },
    methods:{
        sendLogin(){
            //登录
            console.log(this.$local);
            let userName=this.$refs.userInput.value;

        this.$local.save('miaov',{
            login:true,
            userName:userName
        });
        let redirect=this.$route.query.redirect
        if(!redirect){
            redirect='project'

        }else{
              this.$router.push({
                path:'/'+redirect
            });
        }
          
        }
    }

}
</script>

<style scoped>

</style>
