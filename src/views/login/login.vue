<template>
  <div class="login">
    <div>
      <label>
        用户名:
        <input type="text" placeholder="请输入用户名" v-model="username" />
      </label>
    </div>
    <div>
      <label>
        密码:
        <input :type="flag?'text':'password'" placeholder="请输入密码" v-model="pwdname" class="pwd"/><span class="tu" @click="changType"><img src="../../img/眼睛.png" alt=""></span>
      </label>
    </div>
    <div>
      <input type="submit" value="登录" @click="gotologin" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      userpwd: "",
      flag:false
    };
  },
  methods: {
   gotologin(){
     if(this.userpwd&&this.username){
 console.log(this.username,this.userpwd)
     }else{
       alert('不能为空')
     }
    
   },
   changType(){
     this.flag=!this.flag
   }
  }
};
</script>

<style lang="scss" scoped>
.login{
  width: 80%;
  margin: 20px auto;
}
input{
 margin:0 0 5px 0;

}
.pwd{
   position: relative;
}
.tu{
  position: absolute;
  top:50px;
  right: 130px;
  display: inline-block;
  width: 20px;
  height: 20px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>