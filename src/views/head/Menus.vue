<style scoped>
.layout-nav {
  width: 280px;
  margin: 0 auto;
  margin-right: 20px;
  text-align: right;
  height: 100%;
  display: flex;
  flex-flow: row;
}
.ivu-icon {
  font-size: 1.35rem;
}
</style>
<template>
  <div class="layout-nav">
    <MenuItem
      class="head-menu"
      v-for="(menu, key) in menus"
      :key="key"
      :name="menu.name"
      @click.native="handlerEvent"
    >
      <Icon :type="menu.iconCls" :title="menu.title" :name="menu.name"></Icon>
    </MenuItem>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      menus: "headMenus"
    })
  },
  methods: {
    handlerEvent(event) {
      var target = event.target,
        name = target.getAttribute("name");
      //TODO 根据元素的那么判断跳转的路由
    }
  }
};
</script>
