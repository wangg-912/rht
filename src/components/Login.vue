<style scoped>
.ivu-row-flex {
  height: 100%;
}
.border-r {
  border: 1px solid #ccc;
  padding: 36px;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 3px #ccc;
}
</style>

<template>
  <div :style="{height:'100%', border:'1px solid #ccc'}">
    <Row type="flex" justify="center" align="middle">
      <Col span="4" class="border-r">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" class="login-box">
          <FormItem prop="user" style="margin-bottom:30px">
            <Input type="text" v-model="formInline.user" placeholder="用户名" size="large">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="密码" size="large">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <CheckboxGroup v-model="formItem.checkbox">
              <Checkbox label="记住密码"></Checkbox>
              <a style="font-size:12px; float:right;" href="javascript:void(0)">忘记密码</a>
            </CheckboxGroup>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" size="large" long>登陆</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      formItem: {
        checkbox: []
      },
      ruleInline: {
        user: [{ required: true, message: "请输入用户名.", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码.", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6.",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          //TODO 执行你的promise 接口
          this.$axios
            .post(
              "https://www.easy-mock.com/mock/5c4fc5859ccfcd0ae7ea0928/api/login",
              this.qs.stringify({ name: "zhangsan", password: "你的密码" })
            ) //注意密码要用加密的
            .then(function(res) {
              debugger;
              res.data.success
                ? (location.href = "/index.html")
                : this.$Message.error("用户名或密码不正确!");
            });
        } else {
          this.$Message.error("用户名或密码为空!");
        }
      });
    }
  }
};
</script>
