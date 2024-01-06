<template>
    <div class="login">
        <div class="inputs">
            <!-- <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form> -->
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import
import axios from "axios";

export default {
  name: 'login',
  data(){
    return{
      ruleForm:{
        account:'',
        password:''
      }
    }
  },
  created(){
    
  },
  methods:{
    login(){
        axios({
            url:"http://localhost:3000/login",
            method:'get'
        }).then((res) => {
          console.log(res.data);
          if (res != null) {
            this.$router.push({path:"/show"});
          }
        }).catch((error) => {
          console.error('请求失败：', error);
        });
    },
  },

}
</script>
