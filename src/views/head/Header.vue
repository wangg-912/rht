<style scoped>
.ivu-layout-header {
  background: #fff;
  padding: 0 0px;
  height: 60px;
  line-height: 60px;
}
</style>
<template>
  <div class="header-container">
    <Header>
      <Menu mode="horizontal" theme="light" active-name="1">
        <Logo></Logo>
        <MenuHead></MenuHead>
      </Menu>
    </Header>
  </div>
</template>
<script>
import Logo from "@v/head/Logo";
import MenuHead from "@v/head/Menus";
export default {
  components: { Logo, MenuHead }
};
</script>