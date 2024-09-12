<script setup>
import {UserStore} from "@/stores/UserStore.js";
import HomeView_Footer from "@/components/SearchComponents/SearchView_Footer.vue";
import router from "@/router/index.js";
import {ref} from "vue";

const userStore = UserStore();
const searchMsg = ref("")

const AuthorFound = [
  {name: "Danu-Danu", avatar: null, corp: "Beihang"},
  {name: "Danu-Danu", avatar: null, corp: "Beihang"},
  {name: "Danu-Danu", avatar: null, corp: "Beihang"},
  {name: "Danu-Danu", avatar: null, corp: "Beihang"},
]
</script>

<template>
  <div class="w-screen h-screen">
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
                    <el-dropdown trigger="click" placement="bottom">
                      <input v-model="searchMsg" type="text" class="cursor-text w-full bg-white pl-2 text-base font-semibold outline-0"
                             placeholder="请输入搜索内容"
                      >
                      <template #dropdown>
                        <el-dropdown-menu v-if="searchMsg">
                          <el-dropdown-item>
                            <div class="flex items-center h-10">
                              <img src="../components/icons/Email_Icon.svg" alt="邮箱" class="mr-5">
                              <div class="flex-col">
                                Papers matching "{{searchMsg}}"
                              </div>
                            </div>
                          </el-dropdown-item>
                          <el-dropdown-item v-for="(author,index) in AuthorFound" :key="index">
                            <div class="flex items-center">
                              <img src="../components/icons/User_Icon.svg" alt="邮箱" class="mr-5">
                              <div class="flex-col">
                                <div>{{ author.name }}</div>
                                <div>{{ author.corp }}</div>
                              </div>
                            </div>
                          </el-dropdown-item>
                          <div
                              class="cursor-pointer w-96 h-9 flex justify-center items-center
                                      hover:text-blue-500 transition-colors">
                            <div>VIEW ALL RESULTS</div>
                          </div>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                    <input type="button" value="搜索" @click="()=>{router.push('/search')}"
                           class="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors w-[110px]">
                  </div>
                </div>
              </div>
            </div>

            <div class="h-full flex">
              <div class="m-auto">
                <div class="m-auto flex">
                  <div class="mx-auto">
                    <div
                        class="rounded-full p-2 border flex hover:bg-gray-300/50 transition-colors duration-400 cursor-pointer"
                    >
                      <img src="../components/icons/User_Icon.svg" class="aspect-square h-6"
                           @click="()=>{router.push('/search')}" alt="用户头像">
                    </div>
                  </div>
                </div>
                <div class="flex w-full mt-0.5">
                  <span class="text-sm mx-auto">{{ userStore.Username }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="border-t w-full"></div>
    </div>
    <div class="flex flex-row w-full">
      <div class="flex-1">
      </div>
      <div class="w-[99%] md:w-[97%] lg:w-[95%] h-[450px] home_background flex flex-row flex-wrap">
        <div class="text-4xl use_font text-black mt-6 w-[280px] mr-6 font-bold" style="line-height:52px">
          Download
          55 million PDFs
          for free
        </div>
        <div class="w-[400px] h-56 rounded-md mt-6 flex px-6 gold_background">
          <div class="my-auto w-full">
            <div class="flex flex-row w-full my-5">
              <img src="../components/icons/User_Blue_Icon.svg" alt="蓝色用户" class="h-10 mr-6">
              <div class="text-black text-xl my-auto">
                Registered Users
              </div>
              <div class="flex-1"></div>
              <div class="text-black text-xl font-bold my-auto">
                270m+
              </div>
            </div>
            <div class="flex flex-row w-full my-5">
              <img src="../components/icons/Paper_Gold_Icon.svg" alt="金色论文" class="h-10 mr-6">
              <div class="text-black text-xl my-auto">
                Uploaded Papers
              </div>
              <div class="flex-1"></div>
              <div class="text-black text-xl font-bold my-auto">
                55m+
              </div>
            </div>
            <div class="flex flex-row w-full my-5">
              <img src="../components/icons/Recommend_Icon.svg" alt="推荐" class="h-10 mr-6">
              <div class="text-black text-xl my-auto">
                Daily Recommendations
              </div>
              <div class="flex-1"></div>
              <div class="text-black text-xl font-bold my-auto">
                20m
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row mt-16 mb-10 w-[98%] md:w-[94%] lg:w-[90%] mx-auto">
      <div class="text-xl use_font font-bold">
        Explore our top research interests
      </div>
      <div class="flex-1"></div>
      <div class="text-sm font-bold  text-blue-800 hover:underline hover:text-blue-900">
        Browse All Topics
      </div>
    </div>
    <div class="my-6 w-[98%] md:w-[94%] lg:w-[90%] mx-auto rounded-md border h-60 flex flex-row gold_background">
      <div class="w-[500px] pl-8 my-auto">
        <div class="text-3xl use_font font-bold hover:underline">
          History
        </div>
        <div class="text-md flex mt-6">
          <div class="mr-5">
            <div class="font-bold tracking-wide">
              10.4 M
            </div>
            <div>
              Followers
            </div>
          </div>
          <div class="mr-5">
            <div class="font-bold tracking-wide">
              816 K
            </div>
            <div>
              Papers
            </div>
          </div>
          <div>
            <div class="font-bold tracking-wide">
              351 K
            </div>
            <div>
              Authors
            </div>
          </div>
        </div>
      </div>
      <div class="my-auto flex flex-wrap w-full text-sm">
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Medieval History
          </div>
          <div class="flex-1"></div>
          <div>
            92.5 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Ancient History
          </div>
          <div class="flex-1"></div>
          <div>
            87.7 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Cultural History
          </div>
          <div class="flex-1"></div>
          <div>
            60 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Early Modern History
          </div>
          <div class="flex-1"></div>
          <div>
            49.1 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Urban History
          </div>
          <div class="flex-1"></div>
          <div>
            25.7 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Roman History
          </div>
          <div class="flex-1"></div>
          <div>
            35.2 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Ancient Greek History
          </div>
          <div class="flex-1"></div>
          <div>
            26.7 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Military History
          </div>
          <div class="flex-1"></div>
          <div>
            34.6 K Papers
          </div>
        </div>
      </div>
    </div>
    <div class="my-6 w-[98%] md:w-[94%] lg:w-[90%] mx-auto rounded-md border h-60 flex flex-row gold_background">
      <div class="w-[500px] pl-8 my-auto">
        <div class="text-3xl use_font font-bold hover:underline">
          Engineering
        </div>
        <div class="text-md flex mt-6">
          <div class="mr-5">
            <div class="font-bold tracking-wide">
              10.4 M
            </div>
            <div>
              Followers
            </div>
          </div>
          <div class="mr-5">
            <div class="font-bold tracking-wide">
              816 K
            </div>
            <div>
              Papers
            </div>
          </div>
          <div>
            <div class="font-bold tracking-wide">
              351 K
            </div>
            <div>
              Authors
            </div>
          </div>
        </div>
      </div>
      <div class="my-auto flex flex-wrap w-full text-sm">
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Medieval History
          </div>
          <div class="flex-1"></div>
          <div>
            92.5 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Ancient History
          </div>
          <div class="flex-1"></div>
          <div>
            87.7 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Cultural History
          </div>
          <div class="flex-1"></div>
          <div>
            60 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Early Modern History
          </div>
          <div class="flex-1"></div>
          <div>
            49.1 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Urban History
          </div>
          <div class="flex-1"></div>
          <div>
            25.7 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Roman History
          </div>
          <div class="flex-1"></div>
          <div>
            35.2 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Ancient Greek History
          </div>
          <div class="flex-1"></div>
          <div>
            26.7 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Military History
          </div>
          <div class="flex-1"></div>
          <div>
            34.6 K Papers
          </div>
        </div>
      </div>
    </div>
    <div class="my-6 w-[98%] md:w-[94%] lg:w-[90%] mx-auto rounded-md border h-60 flex flex-row gold_background">
      <div class="w-[500px] pl-8 my-auto">
        <div class="text-3xl use_font font-bold hover:underline">
          Computer Science
        </div>
        <div class="text-md flex mt-6">
          <div class="mr-5">
            <div class="font-bold tracking-wide">
              10.4 M
            </div>
            <div>
              Followers
            </div>
          </div>
          <div class="mr-5">
            <div class="font-bold tracking-wide">
              816 K
            </div>
            <div>
              Papers
            </div>
          </div>
          <div>
            <div class="font-bold tracking-wide">
              351 K
            </div>
            <div>
              Authors
            </div>
          </div>
        </div>
      </div>
      <div class="my-auto flex flex-wrap w-full text-sm">
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Medieval History
          </div>
          <div class="flex-1"></div>
          <div>
            92.5 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Ancient History
          </div>
          <div class="flex-1"></div>
          <div>
            87.7 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Cultural History
          </div>
          <div class="flex-1"></div>
          <div>
            60 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Early Modern History
          </div>
          <div class="flex-1"></div>
          <div>
            49.1 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Urban History
          </div>
          <div class="flex-1"></div>
          <div>
            25.7 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Roman History
          </div>
          <div class="flex-1"></div>
          <div>
            35.2 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Ancient Greek History
          </div>
          <div class="flex-1"></div>
          <div>
            26.7 K Papers
          </div>
        </div>
        <div class="w-1/2 flex text-blue-800 hover:text-blue-900 hover:underline my-3 px-6" style="font-weight: 600">
          <div>
            Military History
          </div>
          <div class="flex-1"></div>
          <div>
            34.6 K Papers
          </div>
        </div>
      </div>
    </div>
    <div class="w-full mb-10">
      <div class="text-center use_font text-xl font-bold mt-16">
        Used by academics at over 15,000 universities
      </div>
      <div class="flex my-16">
        <img src="../components/icons/Oxford_Logo.svg" alt="牛津大学" class="h-[52px] mx-auto">
        <img src="../components/icons/UCB_Logo.svg" alt="伯克利大学" class="h-[52px] mx-auto">
        <img src="../components/icons/Mexico_Logo.svg" alt="墨西哥大学" class="h-[52px] mx-auto">
      </div>
      <div class="w-full flex h-[315px]" style="background: #f9f7f4;">
        <img class="h-full aspect-auto" src="/Church_Image.png" alt="教堂">
        <div class="flex m-auto flex-wrap">
          <div class="text-4xl font-bold use_font px-16 w-full" style="line-height:44px">
            Get started and find the best quality research
          </div>
          <div class="w-full px-16">
            <div
                class="font-bold w-full mx-auto py-4 px-10 bg-blue-800 hover:bg-blue-900 text-white text-center rounded-md transition-colors duration-400 mt-6">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="background: #f0f0f0">
      <HomeView_Footer></HomeView_Footer>
    </div>
  </div>
</template>

<style scoped>
.home_background {
  background: #fff url('/HomeView_Background.png') no-repeat;
  background-position-x: 40vw;
  background-position-y: 60%;
  background-size: 1000px;
  color: rgba(0, 226, 247, 0.57);
}

.gold_background {
  background: #f9f7f4;
  border: 1px solid #e0d9c6;
}
</style>