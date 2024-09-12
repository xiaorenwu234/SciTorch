<template>
  <div class="w-screen h-screen bg-white">
    <div>
      <div class="w-full">
        <div class="w-full flex flex-row">
          <div class="h-20 w-[98%] md:w-[94%] lg:w-[90%] mx-auto">
            <div class="h-full flex w-full flex-row">
              <div class="text-3xl my-auto font-bold text-gray-700 tracking-wide use_font">SciTorch</div>
              <div class="flex-1 flex">
                <div class="flex items-center m-auto w-[70%]">
                  <div class="rounded-lg w-full">
                    <div class="flex border rounded-lg w-full">
                      <div
                          class="flex w-12 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                        <svg viewBox="0 0 20 20" aria-hidden="true"
                             class="pointer-events-none absolute w-5 fill-gray-500 transition">
                          <path
                              d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                        </svg>
                      </div>
                      <input type="text" class="w-full bg-white pl-2 text-base font-semibold outline-0"
                             placeholder="请输入搜索内容"
                             id="">
                      <input type="button" value="搜索"
                             class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors w-[110px]">
                    </div>
                  </div>
                </div>
              </div>

              <div class="h-full flex">
                <div class="m-auto">
                  <div class="m-auto flex">
                  <div class="mx-auto">
                    <div class="rounded-full p-2 border flex hover:bg-gray-300/50 transition-colors duration-400 cursor-pointer" @click="GotoUserCenter">
                      <img src="../components/icons/User_Icon.svg" class="aspect-square h-6" alt="用户头像">
                    </div>
                  </div>
                  </div>
                  <div class="flex w-full mt-0.5">
                    <span class="text-sm mx-auto">{{userStore.Username}}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="mb-2 border-t w-full"></div>
      </div>
      <div class="flex">
        <div class="w-full">
          <HomeView_MainFrame></HomeView_MainFrame>
        </div>
      </div>
      <div style="background: #f0f0f0">
        <HomeView_Footer></HomeView_Footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import {UserStore} from "@/stores/UserStore.js";
import router from "@/router/index.js";
import HomeView_MainFrame from "@/frames/SearchView_MainFrame.vue";
import HomeView_Footer from "@/components/HomeComponents/SearchView_Footer.vue";

const userStore = UserStore();

const GotoUserCenter=()=> {
  if (userStore.HasLogin) {
    router.push('/user-center')
  } else {
    router.push('/login')
  }
}
</script>