<script setup>
import router from "@/router/index.js";
import {computed, ref, watch} from "vue";
import {OpenMessage} from "@/js/Notification.js";
import {UserStore} from "@/stores/UserStore.js";
import instance, {setAuthToken} from "@/js/axios.js";

const userStore = UserStore();
const ShowPassword1 = ref(false);
const ShowPassword2 = ref(false);
const InputType1 = computed(() => {
  return ShowPassword1.value === true ? 'text' : 'password'
})

const InputType2 = computed(() => {
  return ShowPassword2.value === true ? 'text' : 'password'
})

//输入框是否聚焦
const isFocused = ref(false);
//监听enter键
const EnterOperation = () => {
  if (isFocused.value) {
    onSubmit();
  }
}

const Username = ref('');
const Password = ref('');
const RepeatPassword = ref('');
const Email = ref('');
const VerificationCode = ref('');


const onSubmit = () => {

}

const Content = ref('获取验证码');
const timeLeft = ref(60);
//是否显示倒计时部分
const ShowCountDown = ref(false);
watch(timeLeft, () => {
  let time = timeLeft.value;
  if (time === 0) {
    ShowCountDown.value = false;
    Content.value = '重新获取';
  }
})
let interval = null;

//进入倒计时
const startCountdown = () => {
  const formData = new FormData();
  formData.append('email', Email.value);
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(Email.value) === false) {
    OpenMessage('请输入合法邮箱', 'error')
    return;
  }
  //发送验证码
  ShowCountDown.value = true;
  clearInterval(interval);
  timeLeft.value = 60;
  interval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      clearInterval(interval);
    }
  }, 1000);

  instance.post('/users/send-code', formData)
      .then(response => {
        if (response.data.success === true) {
          OpenMessage('验证码发送成功');
          userStore.Token = response.data.token;
          setAuthToken(userStore.Token);
        } else {
          OpenMessage('验证码发送失败', 'error');
        }
      })
      .then(error => {
        console.log(error);
      })
}
</script>

<template>
  <div class="w-screen h-screen flex login-background">
    <div class="form m-auto border">
      <div class="w-full flex">
        <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center mx-auto">欢迎来到 <span
            class="bg-gradient-to-r from-[#00f6f7]  to-[#A349A4] bg-clip-text text-transparent">SciTorch</span></div>
      </div>
      <div class="flex-column">
        <label>邮箱</label></div>
      <div class="inputForm">
        <img src="../components/icons/Email_Icon.svg" alt="邮箱">
        <input placeholder="输入邮箱" class="input" type="text" v-model="Email" @focus="isFocused=true"
               @blur="isFocused=false" @keydown.enter="EnterOperation">
      </div>


      <div class="flex-column">
        <label>验证码</label></div>
      <div class="inputForm">
        <div class="flex h-full">
          <img src="../components/icons/Verification_Code.svg" alt="验证码" class="w-5">

          <input placeholder="输入验证码" class="input h-full" type="text" v-model="VerificationCode"
                 @focus="isFocused=true"
                 @blur="isFocused=false" @keydown.enter="EnterOperation">
        </div>
        <div v-if="!ShowCountDown"
             class="h-full text-black flex flex-1 border hover:bg-gray-200/50 transition-colors duration-300"
             style="border-radius: 10px"
             @click="startCountdown">
          <div class="m-auto">{{ Content }}</div>
        </div>
        <div class="flex-1 flex" v-if="ShowCountDown">
          <div class="m-auto flex">
            <span class="countdown font-mono text-2xl text-black px-2 my-auto">
            <span :style="{ '--value': timeLeft }"></span>
        </span>
            <div class="flex h-full">
              <div class=" my-auto text-black">秒后重新获取</div>
            </div>
          </div>
        </div>
      </div>


      <div class="flex-column">
        <label>用户名</label></div>
      <div class="inputForm">
        <img src="../components/icons/User_Icon.svg" alt="用户头像" style="height:20px;">
        <input placeholder="输入用户名" class="input" type="text" v-model="Username" @focus="isFocused=true"
               @blur="isFocused=false" @keydown.enter="EnterOperation">
      </div>

      <div class="flex-column">
        <label>密码</label></div>
      <div class="inputForm">
        <img src="../components/icons/Password_Icon.svg" alt="密码">
        <div class="relative w-full h-full">
          <input id="password" v-model="Password" :type="InputType1"
                 class="input" style="width:87%" placeholder="输入密码"
                 @focus="isFocused=true" @blur="isFocused=false" @keydown.enter="EnterOperation">
          <img v-if="!ShowPassword1" alt="眼睛睁开"
               src="../components/icons/Eye.svg"
               style="height:22px; position: absolute; top: 50%; right: 10px; transform: translateY(-50%);"
               @click="ShowPassword1=true">
          <img v-if="ShowPassword1" alt="眼睛闭上"
               src="../components/icons/Eye_Close.svg"
               style="height:22px; position: absolute; top: 50%; right: 10px; transform: translateY(-50%);"
               @click="ShowPassword1=false">
        </div>
      </div>

      <div class="flex-column">
        <label>重复密码</label></div>
      <div class="inputForm">
        <img src="../components/icons/Password_Icon.svg" alt="密码">
        <div class="relative w-full h-full">
          <input id="password" v-model="RepeatPassword" :type="InputType2"
                 class="input" style="width:87%" placeholder="重复密码"
                 @focus="isFocused=true" @blur="isFocused=false" @keydown.enter="EnterOperation">
          <img v-if="!ShowPassword2" alt="眼睛睁开"
               src="../components/icons/Eye.svg"
               style="height:22px; position: absolute; top: 50%; right: 10px; transform: translateY(-50%);"
               @click="ShowPassword2=true">
          <img v-if="ShowPassword2" alt="眼睛闭上"
               src="../components/icons/Eye_Close.svg"
               style="height:22px; position: absolute; top: 50%; right: 10px; transform: translateY(-50%);"
               @click="ShowPassword2=false">
        </div>
      </div>

      <button class="button-submit tracking-widest">注 册</button>
      <p class="p mr-2 tracking-widest">已经有账户了？ <span class="span tracking-widest"
                                                            @click="()=>{router.push('/login')}">登 陆</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
@import url('../css/LoginView.css');
</style>