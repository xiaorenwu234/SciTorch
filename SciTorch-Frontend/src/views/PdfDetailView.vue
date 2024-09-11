<script setup>
import {UserStore} from "@/stores/UserStore.js";

const userStore = UserStore()

const CurrentArticle = {
  title: 'Cueeiculum Vitae Tips and Samples THE BASICS',
  author: 'Ahmed Younis',
  avatar: '/background_image.png'
}

const Articles = [
  {title: 'ESPECIALIDAD NOMBRE DEL MEDICO DIRECCION DEL CONSULTORIO TELEFONOS', author: 'Salvatierra Salvatierra'},
  {title: 'ESPECIALIDAD NOMBRE DEL MEDICO DIRECCION DEL CONSULTORIO TELEFONOS', author: 'Salvatierra Salvatierra'},
  {title: 'ESPECIALIDAD NOMBRE DEL MEDICO DIRECCION DEL CONSULTORIO TELEFONOS', author: 'Salvatierra Salvatierra'},
  {title: 'ESPECIALIDAD NOMBRE DEL MEDICO DIRECCION DEL CONSULTORIO TELEFONOS', author: 'Salvatierra Salvatierra'},
  {title: 'ESPECIALIDAD NOMBRE DEL MEDICO DIRECCION DEL CONSULTORIO TELEFONOS', author: 'Salvatierra Salvatierra'},
  {title: 'ESPECIALIDAD NOMBRE DEL MEDICO DIRECCION DEL CONSULTORIO TELEFONOS', author: 'Salvatierra Salvatierra'},
  {title: 'ESPECIALIDAD NOMBRE DEL MEDICO DIRECCION DEL CONSULTORIO TELEFONOS', author: 'Salvatierra Salvatierra'},
  {title: 'ESPECIALIDAD NOMBRE DEL MEDICO DIRECCION DEL CONSULTORIO TELEFONOS', author: 'Salvatierra Salvatierra'},
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
                    <div
                        class="rounded-full p-2 border flex hover:bg-gray-300/50 transition-colors duration-400 cursor-pointer"
                    >
                      <img src="../components/icons/User_Icon.svg" class="aspect-square h-6" alt="用户头像">
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
    <div class="bg-zinc-100/50 w-full pt-10">
      <div class="w-full flex">
        <div class="w-3/4 mx-auto flex">
          <div class="flex flex-row">
            <div class="w-[80%] mx-auto">
              <div class="text-3xl use_font" style="line-height:50px;font-weight:600">
                {{ CurrentArticle.title }}
              </div>
              <div class="mt-2 text-sm mb-10" style="font-weight:500">
                <img :src="CurrentArticle.avatar" alt="头像" class="rounded-full aspect-square h-6 inline mr-4">
                {{ CurrentArticle.author }}
              </div>
              <div class="w-full flex">
                <div
                    class="text-white bg-blue-800 hover:bg-blue-900 transition-colors duration-400 py-4 w-52 rounded-md text-center font-bold mr-4">
                  See Full PDF
                </div>
                <div class="text-blue-900 bg-gray-200/50 py-4 w-52 rounded-md text-center mr-4 download_button">
                  <img class="h-6 inline ml-2" src="../components/icons/Download_Icon.svg" alt="下载">
                  Download PDF
                </div>
              </div>
            </div>
            <div class="flex-1">
              <div class="w-full flex">
                <div class="relative w-full h-full">
                  <div
                      class="absolute inset-0 bg-transparent hover:bg-blue-800/90 z-20 flex items-center justify-center">
                    <span
                        class="text-white opacity-100 hover:opacity-1 transition-opacity duration-300 text-xl text-bold underline cursor-pointer">Download PDF</span>
                  </div>
                  <img src="/Discourse_Image.png" alt="论文封面" class="aspect-auto bg-white relative z-10">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 w-full flex">
        <div class="w-3/4 mx-auto">
          <div class="text-xl">Related Papers</div>
          <div class="w-full border-t mt-2 mb-4"></div>
          <div class="" v-for="(Article,index) in Articles" :key="index">
            <div class="text-blue-800 hover:text-blue-900 hover:underline cursor-pointer my-2">
              {{ Article.title }}
            </div>
            <div class="text-gray-700 mb-3 text-sm hover:text-blue-800">
              {{ Article.author }}
            </div>
            <div class="flex mb-10">
              <div class="text-sm hover:text-blue-800 hover:underline cursor-pointer mt-1 mr-6">
                <img src="../components/icons/Download_PDF_Icon.png" class="h-6 inline mr-1" alt="下载">
                Download Free PDF
              </div>
              <div class="text-sm hover:text-blue-800 hover:underline cursor-pointer mt-1  mr-6">
                View PDF
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.download_button {
  border: 1px transparent solid;
  transition: border-color .4s;
}

.download_button:hover {
  border: 1px solid rgba(30, 58, 138, 0.9);
}
</style>