<template>
  <div class="hello">
     {{msg}}<Button name="selc" @click="slcData()">查询</Button>
     <br/>
     <div id="main" :style="{width: '300px', height: '300px'}">
       ?
     </div>

  </div>
</template>

<script src="./js/basic/basic.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
