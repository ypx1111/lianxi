<template>
  <div class="register">
     <div>
      <label>
        用户名:
        <input type="text" placeholder="请输入用户名" v-model="username" />
      </label>
    </div>
    <div>
      <label>
        密码:
        <input type="password" placeholder="请输入密码" v-model="pwdname"/>
      </label>
    </div>
    <div>
      <input type="submit" value="注册" @click="gotologin" />
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
username:'',
pwdname:''
  }
},
methods:{
  gotologin(){
    console.log(this.username,this.pwdname)
  }
}
}
</script>

<style>

</style>