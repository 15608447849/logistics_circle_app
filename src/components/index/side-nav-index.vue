<template>
  <div style="height: 100%;">
    <ul class="letter">
      <li class="colorBlueSan" v-for="item in citiesIndexer">{{item}}</li>
    </ul>
  </div>
</template>
<script>

  export default {
    name: 'fsSideNav',
    props: {
      citiesIndexer: Object
    },
    data() {
      return {

      }
    }
  }
</script>
<style>
.colorBlueSan{
  color:#3189f5;
}
</style>
