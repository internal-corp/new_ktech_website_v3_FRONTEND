<template>
  <div class="regularHeader">
      <div class="logo">
        <img src="../assets/images/logo@2x.png" alt="logo">
      </div>
      <div class="navBar">
        <ul>
          <li><router-link to="/">Acceuil</router-link></li>
          <li><router-link to="/services/">Sevives</router-link></li>
          <li><router-link to="/country/">Country</router-link></li>
          <li><router-link to="/news/">News</router-link></li>
          <li><router-link to="/about/">About us</router-link></li>
        </ul>
      </div>
      <div class="suscribe">
        <div class="suscribeButton">
         <span>Suscribe Newsletter</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'regular-header',
}
</script>

<style src='../css/regularHeader.css' scoped >

</style>