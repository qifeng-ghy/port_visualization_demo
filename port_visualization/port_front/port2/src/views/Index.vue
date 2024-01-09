<template>
    <div class="index">
      <p>{{ this.hello }}</p>
      <button @click="test">点击我</button>


    </div>
</template>

<script>
// @ is an alias to /src
// import
import axios from "axios";

export default {
  name: 'index',
  data(){
    return{
      hello:''
    }

  },
  created(){
    this.hello='a';
  },
  methods:{
    test(){
        axios({
            url:"http://localhost:3000/helloworld",
            method:'get'
        }).then((res) => {
          console.log(res.data);
          if (res != null) {
            this.hello = res.data;
          }
        }).catch((error) => {
          console.error('请求失败：', error);
        });
    },
    portMap(){
      
    }
  },

}
</script>

  