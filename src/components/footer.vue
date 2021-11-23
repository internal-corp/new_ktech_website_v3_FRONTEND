<template>
  <div class="footer">
    <div class="di">
      <p>KONAN TECHNOLOGIES</p>
      <!-- <div class="ellipse">
        <img src="../assets/images/EllipseR17.png" alt=" ">
      </div> -->
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
    <div class="linkedIn">
      <img src="../assets/images/linkedind.png" alt="Linded in">
    </div>
  </div>
</template>

<script>
export default {
    name:'Footer',
}
</script>

<style src="../css/footer.css" scoped>

</style>