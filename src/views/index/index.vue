<template>
  <div class="index">
    <div class="top">
      <router-view></router-view>
    </div>
    <footer>
      <router-link :to="item.link" tag="li" v-for="(item,index) in list" :key="index">{{item.name}}</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "圈子",
          link: "/index/home"
        },
        {
          name: "我的",
          link: "/index/my"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>


.index{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

.top{
  flex: 1;
  overflow: hidden;
}
footer{
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  li{
    flex: 1
  }
}
.router-link-active{
  color: red
}
}
</style>
