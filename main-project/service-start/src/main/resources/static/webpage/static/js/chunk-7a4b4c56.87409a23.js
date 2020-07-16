(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a4b4c56"],{"3c74":function(r,n,e){n=r.exports=e("24fb")(!0),n.push([r.i,".background[data-v-11e09a4c]{background-color:#2d3a4b;background-size:100% 100%}.fontZT[data-v-11e09a4c]{color:#fff;font-size:25px}.el-form-item[data-v-11e09a4c]{border:1px solid hsla(0,0%,100%,.1);background:rgba(0,0,0,.1);border-radius:5px;color:#fff}.boxCenter[data-v-11e09a4c]{position:relative;width:450px;max-width:100%;padding:190px 35px 0;margin:0 auto;overflow:hidden}.floatUser[data-v-11e09a4c]{margin-top:12px}.floatCipher[data-v-11e09a4c],.floatUser[data-v-11e09a4c]{width:15px;height:15px;float:left;position:fixed;z-index:999;margin-left:8px}.floatCipher[data-v-11e09a4c]{margin-top:31px}.suck-in-enter[data-v-11e09a4c]{opacity:0;transform:scale(0)}.suck-in-enter-active[data-v-11e09a4c],.suck-in-leave-active[data-v-11e09a4c]{transition:all .3s}.suck-in-leave-active[data-v-11e09a4c]{opacity:0;transform:scale(0)}","",{version:3,sources:["H:/WORKWORK_TEST/vue-elementui-admin-sample/src/views/src/views/Login.vue"],names:[],mappings:"AA6DA,6BACA,wBAAA,CACA,yBACA,CAEA,yBACA,UAAA,CACA,cACA,CAEA,+BACA,mCAAA,CACA,yBAAA,CACA,iBAAA,CACA,UACA,CAEA,4BACA,iBAAA,CACA,WAAA,CACA,cAAA,CACA,oBAAA,CACA,aAAA,CACA,eACA,CAEA,4BAMA,eAEA,CAEA,0DATA,UAAA,CACA,WAAA,CACA,UAAA,CACA,cAAA,CACA,WAAA,CAEA,eAWA,CARA,8BAMA,eAEA,CAGA,gCACA,SAAA,CACA,kBACA,CAMA,8EACA,kBACA,CAEA,uCACA,SAAA,CACA,kBACA",file:"Login.vue?vue&type=style&index=0&id=11e09a4c&scoped=true&lang=css&",sourcesContent:['<template>\r\n  <div style="position: absolute;height: 100%;width: 100%;z-index:2000 " class="background">\r\n    <div class="boxCenter">\r\n      <p class="fontZT">系统登录</p>\r\n      <div :model="form" style="margin-top: 30px;" class="input">\r\n        <el-input v-model="form.username" placeholder="用户名"/>\r\n        <el-input type="password" v-model="form.password" auto-complete="off" @keyup.enter.native="submitForm" placeholder="密码" :prefix-icon="Img.Cipher" style="margin-top: 20px;"/>\r\n        <el-checkbox v-model="form.isLongLogin" label="记住登录状态" style="color: white;float:right"/>\r\n        <el-button type="primary" @click="submitForm" style="width: 100%;margin-top: 20px;">登 录</el-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import Img from \'src/assets/img\';\r\n  import LoginApi from \'src/api/login-api\';\r\n  import * as Cookies from \'src/utils/cookies\';\r\n\r\n  export default {\r\n    name: \'Login\',\r\n    data() {\r\n      return {\r\n        Img,\r\n        form: {\r\n          username: \'\',\r\n          password: \'\',\r\n          isLongLogin: false,\r\n        },\r\n      };\r\n    },\r\n    methods: {\r\n      submitForm() {\r\n        if (this.form.username.trim() === \'\') {\r\n          this.$message({\r\n            message: \'请输入用户名。\',\r\n            type: \'warning\',\r\n          });\r\n        } else if (this.form.password.trim() === \'\') {\r\n          this.$message({\r\n            message: \'请输入密码。\',\r\n            type: \'warning\',\r\n          });\r\n        } else {\r\n          LoginApi.login(this.form)\r\n            .then(({ data: { data, result, msg }, headers }) => {\r\n              if (result) {\r\n                Cookies.setToken(headers.authorization, this.form.isLongLogin);\r\n                this.$message.success(\'登录成功\');\r\n                this.$router.replace(\'/home\');\r\n              } else {\r\n                this.$message.error(msg);\r\n              }\r\n            });\r\n        }\r\n      },\r\n    },\r\n  };\r\n<\/script>\r\n\r\n<style scoped>\r\n  .background {\r\n    background-color: #2d3a4b;\r\n    background-size: 100% 100%;\r\n  }\r\n\r\n  .fontZT {\r\n    color: white;\r\n    font-size: 25px;\r\n  }\r\n\r\n  .el-form-item {\r\n    border: 1px solid hsla(0, 0%, 100%, .1);\r\n    background: rgba(0, 0, 0, .1);\r\n    border-radius: 5px;\r\n    color: #ffffff;\r\n  }\r\n\r\n  .boxCenter {\r\n    position: relative;\r\n    width: 450px;\r\n    max-width: 100%;\r\n    padding: 190px 35px 0;\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .floatUser {\r\n    width: 15px;\r\n    height: 15px;\r\n    float: left;\r\n    position: fixed;\r\n    z-index: 999;\r\n    margin-top: 12px;\r\n    margin-left: 8px;\r\n  }\r\n\r\n  .floatCipher {\r\n    width: 15px;\r\n    height: 15px;\r\n    float: left;\r\n    position: fixed;\r\n    z-index: 999;\r\n    margin-top: 31px;\r\n    margin-left: 8px;\r\n  }\r\n\r\n  /*切换效果fade-xxx*/\r\n  .suck-in-enter {\r\n    opacity: 0;\r\n    transform: scale(0, 0);\r\n  }\r\n\r\n  .suck-in-enter-active {\r\n    transition: all .3s;\r\n  }\r\n\r\n  .suck-in-leave-active {\r\n    transition: all .3s;\r\n  }\r\n\r\n  .suck-in-leave-active {\r\n    opacity: 0;\r\n    transform: scale(0, 0);\r\n  }\r\n</style>\r\n']}])},6096:function(r,n,e){"use strict";var t=e("7751"),a=e.n(t);a.a},7751:function(r,n,e){var t=e("3c74");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=e("499e").default;a("03986e24",t,!0,{sourceMap:!0,shadowMode:!1})},"7f59":function(r,n,e){r.exports=e.p+"static/img/userAvatar.f4734cdb.png"},a55b:function(r,n,e){"use strict";e.r(n);var t=function(){var r=this,n=r.$createElement,e=r._self._c||n;return e("div",{staticClass:"background",staticStyle:{position:"absolute",height:"100%",width:"100%","z-index":"2000"}},[e("div",{staticClass:"boxCenter"},[e("p",{staticClass:"fontZT"},[r._v("系统登录")]),e("div",{staticClass:"input",staticStyle:{"margin-top":"30px"},attrs:{model:r.form}},[e("el-input",{attrs:{placeholder:"用户名"},model:{value:r.form.username,callback:function(n){r.$set(r.form,"username",n)},expression:"form.username"}}),e("el-input",{staticStyle:{"margin-top":"20px"},attrs:{type:"password","auto-complete":"off",placeholder:"密码","prefix-icon":r.Img.Cipher},nativeOn:{keyup:function(n){return!n.type.indexOf("key")&&r._k(n.keyCode,"enter",13,n.key,"Enter")?null:r.submitForm(n)}},model:{value:r.form.password,callback:function(n){r.$set(r.form,"password",n)},expression:"form.password"}}),e("el-checkbox",{staticStyle:{color:"white",float:"right"},attrs:{label:"记住登录状态"},model:{value:r.form.isLongLogin,callback:function(n){r.$set(r.form,"isLongLogin",n)},expression:"form.isLongLogin"}}),e("el-button",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{type:"primary"},on:{click:r.submitForm}},[r._v("登 录")])],1)])])},a=[],o=(e("a481"),e("d1bb")),i=e("b775"),s={login:function(r){return Object(i["a"])({method:"post",url:"/login",data:r})}},l=e("6a1d"),A={name:"Login",data:function(){return{Img:o["a"],form:{username:"",password:"",isLongLogin:!1}}},methods:{submitForm:function(){var r=this;""===this.form.username.trim()?this.$message({message:"请输入用户名。",type:"warning"}):""===this.form.password.trim()?this.$message({message:"请输入密码。",type:"warning"}):s.login(this.form).then((function(n){var e=n.data,t=(e.data,e.result),a=e.msg,o=n.headers;t?(l["g"](o.authorization,r.form.isLongLogin),r.$message.success("登录成功"),r.$router.replace("/home")):r.$message.error(a)}))}}},c=A,p=(e("6096"),e("2877")),m=Object(p["a"])(c,t,a,!1,null,"11e09a4c",null);n["default"]=m.exports},d1bb:function(r,n,e){"use strict";var t=e("7f59"),a=e.n(t);n["a"]={UserAvatar:a.a}}}]);