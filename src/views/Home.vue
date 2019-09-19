<template>
   <el-container>
    <el-header height="50px"> <nav-menu /> </el-header>
    <el-main>
      <div class="main-content">

        <router-view />
        </div>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src11
import NavMenu from "@/components/navMenu/mainMenu.vue";

export default {
  name: "home",
  components: {
    NavMenu
  },
  async mounted(){
    await this.$axios.$get('/api/patrol/company/markers')
  },
};
</script>
<style lang="scss">
.el-header,
.el-main {
  padding: 0;
}

.main-content {
  background: #eeeeee;
  position: absolute;
  top: 50px;
  left: 0;
  width: calc(100%);
  height: calc(100% - 50px);
  min-width: 1366px;
  overflow-y: auto;
}
</style>
