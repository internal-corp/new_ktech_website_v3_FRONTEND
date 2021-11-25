<template>
  <div class="regularHeader">
      <div class="logo">
        <img src="../assets/images/logo@2x.png" alt="logo">
      </div>
      <svg v-on:click="getModal() ; move()" v-if="mobile" width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
      <div v-if="!mobile" class="navBar">
        <ul>
          <li><router-link to="/">Acceuil</router-link></li>
          <li><router-link to="/services/">Sevives</router-link></li>
          <li><router-link to="/country/">Country</router-link></li>
          <li><router-link to="/news/">News</router-link></li>
          <li><router-link to="/about/">About us</router-link></li>
        </ul>
      </div>
      <div v-if="!mobile" class="suscribe">
        <div class="suscribeButton">
         <span>Suscribe Newsletter</span>
        </div>
      </div>
      <div v-if="modal" class="modal">
        <div v-on:click="hidden" class="overlay"></div>
        <div ref="move" class="content">
          <svg v-on:click="hidden" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
          <div class="menu">
            <ul>
              <li><router-link to="/">Acceuil</router-link></li>
              <li><router-link to="/services/">Sevives</router-link></li>
              <li><router-link to="/country/">Country</router-link></li>
              <li><router-link to="/news/">News</router-link></li>
              <li><router-link to="/about/">About us</router-link></li>
            </ul>
          </div>
          <div  class="suscribe">
            <div class="suscribeButton">
              <span>Suscribe Newsletter</span>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'regular-header',
    props:{
      mobile:Boolean,
    },
    data(){
      return {
        modal:false,
      }
    },
    methods:{
      getModal:function(){
        this.modal=!this.modal
      },
      move:function(){
        setTimeout(this.openMovement,5);
      },
      hidden:function(){
        setTimeout(this.getModal,1000);
        setTimeout(this.closeMovement,50);
      },
      openMovement:function(){
        this.$refs.move.classList.add('contentMove')
      },
      closeMovement:function(){
        this.$refs.move.classList.remove('contentMove')
      }
    }
}
</script>

<style src='../css/regularHeader.css' scoped >

</style>