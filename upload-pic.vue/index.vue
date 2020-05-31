<template>
  <div class="upload-pic-container">
    <input type="file" ref="input" @change="upload" />
    <img class="add-icon" src="https://gitee.com/dggy/picpic/raw/master/icon/add.png" @click="$refs.input.click()" />
    <div class="target" v-if="value">
      <img :src="imgBaseUrl + value" />
      <img class="refresh-icon" src="https://gitee.com/dggy/picpic/raw/master/icon/refresh.png" @click="$refs.input.click()" />
    </div>
  </div>
</template>
<style src="./index.styl"></style>
<script src="./index.js"></script>