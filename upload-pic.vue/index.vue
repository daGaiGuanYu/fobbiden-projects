<template>
  <div class="upload-pic-container">
    <input type="file" ref="input" @change="upload" />
    <div class="add-icon-wrapper" @click="$refs.input.click()">
      <img src="https://gitee.com/dggy/picpic/raw/master/icon/add.png" />
    </div>
    <div class="target" v-if="value">
      <img class="target-img" :src="imgBaseUrl + value" />
      <div class="refresh-icon-wrapper" @click="$refs.input.click()">
        <img src="https://gitee.com/dggy/picpic/raw/master/icon/refresh.png" />
      </div>
    </div>
  </div>
</template>
<style src="./index.styl"></style>
<script src="./index.js"></script>