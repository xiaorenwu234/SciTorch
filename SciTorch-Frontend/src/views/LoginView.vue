<script setup>

import router from "@/router/index.js";
import {computed, ref} from "vue";

const ShowPassword = ref(false);

const InputType = computed(() => {
  return ShowPassword.value === true ? 'text' : 'password'
})

//输入框是否聚焦
const isFocused = ref(false);
//监听enter键
const EnterOperation = () => {
  if (isFocused.value) {
    onSubmit();
  }
}

const Username=ref('');
const Password=ref('');

const onSubmit=()=>{

}

</script>

<template>
  <div class="w-screen h-screen flex login-background">
    <div class="form m-auto">
      <div class="w-full flex">
        <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center mx-auto">欢迎来到 <span
            class="bg-gradient-to-r from-[#00f6f7]  to-[#A349A4] bg-clip-text text-transparent">SciTorch</span></div>
      </div>
      <div class="flex-column">
        <label>邮箱或用户名</label></div>
      <div class="inputForm">
        <img src="../components/icons/Email_Icon.svg" alt="邮箱">
        <input placeholder="输入邮箱或用户名" class="input" type="text" v-model="Username">
      </div>

      <div class="flex-column">
        <label>密码</label></div>
      <div class="inputForm">
        <img src="../components/icons/Password_Icon.svg" alt="密码">
        <div class="relative w-full h-full">
          <input id="password" v-model="Password" :type="InputType"
                 class="input" style="width:87%" placeholder="输入密码"
                 @focus="isFocused=true" @blur="isFocused=false" @keydown.enter="EnterOperation">
          <img v-if="!ShowPassword" alt="眼睛睁开"
               src="../components/icons/Eye.svg"
               style="height:22px; position: absolute; top: 50%; right: 10px; transform: translateY(-50%);"
               @click="ShowPassword=true">
          <img v-if="ShowPassword" alt="眼睛闭上"
               src="../components/icons/Eye_Close.svg"
               style="height:22px; position: absolute; top: 50%; right: 10px; transform: translateY(-50%);"
               @click="ShowPassword=false">
        </div>
      </div>

      <div class="flex-row mt-2">
        <div class="flex">
          <input type="checkbox" class="my-auto">
          <label class="ml-2">记住密码</label>
        </div>
        <span class="span" @click="()=>{router.push('/forget-password')}">忘记密码?</span>
      </div>
      <button class="button-submit tracking-widest">登 陆</button>
      <p class="p mr-2 tracking-widest">还没有账户？ <span class="span tracking-widest" @click="()=>{router.push('/register')}">注 册</span>
      </p>
      <p class="p line">或者通过</p>

      <div class="flex-row">
        <button class="btn google">
          <img src="../components/icons/Google_Icon.svg" alt="Google">
          Google
        </button>
        <button class="btn apple">
          <img src="../components/icons/Apple_Icon.svg" alt="Apple">
          Apple
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('../css/LoginView.css');
</style>