<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
html,body,#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>
