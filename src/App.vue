<template>
  <div ref="main"  class="mainContent">
    <Header :mobile="mobile"></Header>
    <router-view :mobile="mobile"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/footer.vue'
import Header from './components/regular-header.vue'

export default {
  name: 'App',
  components:{
    Footer,
    Header,
  },
  data(){
    return{
      width:null,
      mobile:null
    }
  },
  created(){
    window.addEventListener('resize',this.getWidth)
    this.getWidth()
    this.$nextTick(()=>{
      if(this.mobile){
        console.log(this.$refs.main.style.overflow="hidden")
      }
    })
  },
  methods:{
    getWidth:function(){
      this.width=window.innerWidth
      if(this.width<=750){
          this.mobile=true
      }
      else{
        this.mobile=false
      }
      
    },
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width:250px;
  }
</style>
