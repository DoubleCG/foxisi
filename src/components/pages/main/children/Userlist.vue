<template>
  <div class="userlist">
    <a 
      :key='item' 
      v-for='item in userlist'
      v-bind:class="btnStyle()">{{item}}
    </a>
  </div>
</template>

<script>
export default {
  name: 'userlist',
  mounted(){
    this.getUserlist();
    setInterval(this.getUserlist,10000);
  }, 
  data(){
    return{
      userlist:[]
    }
  },
  computed:{

  },
  methods:{
    btnStyle(){
      let S = {
        button:true,
        'button-small':true,
      };

      let colorlist = ['button-primary','button-action','button-highlight','button-caution','button-royal'];

      let ranColor = colorlist[parseInt(Math.random()*colorlist.length)];
      S[ranColor] = true;
      return S;
    },
    getUserlist:function(){
      let vm = this,
          axios = window.axios;
      axios.get('/userlist')
      .then(response=>{
        console.log(response)
        vm.userlist = response.data;
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>

<style  lang="less" scoped>
  .userlist{
    float: left;
    box-shadow: 0 0 5px #999;
    height:550px;
    width:240px;
    overflow-y: scroll;
    a{
      margin:2px;
      height:auto;
    }
    @media (max-width: 960px){
      width:100%;
      height:12%;
    }
  }

</style>
