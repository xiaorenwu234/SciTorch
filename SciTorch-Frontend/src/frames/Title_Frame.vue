<script setup>
import {ref} from 'vue';

// 出版类型
const selectedPublicationType = ref('all');

// 语言选择复选框
const selectedLanguages = ref(['all']); // 这里保存所有被选中的语言

// 出版类型选项
const PublicationTabs = [
  {name: 'all', label: 'All', description: '10000'},
  {name: 'journal', label: 'Journal', description: '20000'},
  {name: 'conference', label: 'Conference', description: '10000'},
  {name: 'book', label: 'Book', description: '20000'},
  {name: 'other', label: 'Other', description: '20000'},
];

// 语言选项
const LanguageTabs = [
  {name: 'all', label: 'All', description: '10000'},
  {name: 'english', label: 'English', description: '20000'},
  {name: 'chinese', label: 'Chinese', description: '10000'},
  {name: 'spanish', label: 'Spanish', description: '20000'},
  {name: 'french', label: 'French', description: '20000'},
  {name: 'german', label: 'German', description: '20000'},
  {name: 'japanese', label: 'Japanese', description: '20000'},
  {name: 'other', label: 'Other', description: '20000'},
];

const Articles = [
  {title: 'Search all journals Advanced Search Search History Sign In', author: 'Danu Danu'},
  {title: 'Search all journals Advanced Search Search History Sign In', author: 'Danu Danu'},
  {title: 'Search all journals Advanced Search Search History Sign In', author: 'Danu Danu'},
  {title: 'Search all journals Advanced Search Search History Sign In', author: 'Danu Danu'},
  {title: 'Search all journals Advanced Search Search History Sign In', author: 'Danu Danu'},
  {title: 'Search all journals Advanced Search Search History Sign In', author: 'Danu Danu'},
]

const Authors = [
  {author: "Danu Danu", paperNumber: 100, viewNumber: 100, followerNumber: 100},
]
</script>

<template>
  <div class="w-full flex flex-row h-full overflow-scroll">
    <!--左侧的白框-->
    <div class="w-[30%] bg-white p-4">
      <div class="font-black mb-3 text-black flex">
        <img src="../components/icons/Lock_Icon.svg" alt="锁" class="mr-2 my-auto">
        <div class="my-auto">
          FILTERS
        </div>
      </div>
      <!-- 日期范围 -->
      <div class="text-sm ">DATE RANGE</div>
      <div class="w-full border-b mt-1"></div>
      <div class="border rounded border-blue-600 w-full flex mt-5 mb-10">
        <div class="w-1/2 border-r border-blue-600 flex h-8 text-blue-600 text-sm" style="font-weight: 800;">
                <span class="m-auto">
                  Past Year
                </span>
        </div>
        <div class="w-1/2 flex h-8 text-blue-600 text-sm" style="font-weight: 800;">
                <span class="m-auto">
                  Past 5 Year
                </span>
        </div>
      </div>

      <!-- 出版类型 -->
      <div class="w-full">
        <div class="text-sm ">PUBLICATION TYPE</div>
        <div class="w-full border-b mt-1 mb-2"></div>
        <div class="w-full">
          <div :class="{active:selectedPublicationType===tab.name}" v-for="tab in PublicationTabs"
               class="publication-tab-item flex" @click="selectedPublicationType=tab.name">
            <div>
              {{ tab.label }}
            </div>
            <div class="flex-1"></div>
            <div>
              {{ tab.description }}
            </div>
          </div>
        </div>
      </div>

      <!-- 语言选择 -->
      <div class="w-full mt-6">
        <div class="text-sm">LANGUAGE</div>
        <div class="w-full border-b mt-1 mb-2"></div>
        <div class="w-full">
          <div class="language-tab-item flex" v-for="tab in LanguageTabs" :key="tab.name">
            <input
                type="checkbox"
                :value="tab.name"
                v-model="selectedLanguages"
                class="mr-2"
            />
            <div class="flex-1"
                 :class="{ 'text-blue': selectedLanguages.includes(tab.name) ,'text-normal': !selectedLanguages.includes(tab.name)}">
              {{ tab.label }}
            </div>
            <div
                :class="{ 'text-blue': selectedLanguages.includes(tab.name),'text-normal': !selectedLanguages.includes(tab.name) }">
              {{ tab.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[70%] pl-8">
      <div class="h-20">
        <div class="w-full flex flex-row">
          <div class="text-gray-900 text-sm font-bold">
            123653 Paper Titles
          </div>
          <div class="text-gray-900 text-sm mx-1">
            match
          </div>
          <div class="text-gray-900 text-sm font-bold">
            search
          </div>
          <div class="flex-1"></div>
          <div class="flex">
            <img src="../components/icons/Lock_Icon.svg" class="mr-2" alt="锁">
            <div class="tracking-wide text-black text-md" style="font-weight:600">SORT BY</div>
          </div>
        </div>
        <div class="w-full mt-3 mb-8" v-for="(article,index) in Articles" :key="index">
          <div class="text-blue-700 hover:text-blue-800 hover:underline cursor-pointer"
               style="font-size: 20px; line-height: 24px;">{{ article.title }}
          </div>
          <el-dropdown placement="bottom">
            <div class="cursor-pointer mt-1.5 text-gray-800 hover:text-cyan-700 w-auto px-1"
                 style=" font-size: 13px; line-height: 16px;">{{ article.author }}
            </div>
            <template #dropdown>
              <div class="flex-col w-64 h-28 bg-white">
                <div class="flex h-16">
                  <div class="rounded-full w-10 h-10 ml-5 my-2 bg-red-400"/>
                  <div class="flex-col items-start my-2 ml-2">
                    <span>{{ article.author }}</span>
                    <div class="flex cursor-pointer text-blue-700">
                      <div class="mr-1">+Follow</div>
                      <div>Message</div>
                    </div>
                  </div>
                </div>
                <div class="h-12 flex ml-5">
                  <div class="flex-col mr-3">
                    <div>PAPERS</div>
                    1
                  </div>
                  <div class="flex-col mr-3">
                    <div>VIEWS</div>
                    0
                  </div>
                  <div class="flex-col">
                    <div>FOLLOWERS</div>
                    10
                  </div>
                </div>
              </div>
            </template>
          </el-dropdown>
          <div class="flex">
            <div
                class="px-1 py-0.5 flex mt-2.5 hover:bg-white rounded-md transition-colors duration-400 cursor-pointer">
              <img src="../components/icons/Download_Icon.svg" alt="下载"
                   class="h-4 mr-1.5 my-auto stroke-gray-600 hover:stroke-blue-700 transition-colors duration-400">
              <span
                  class="my-auto text-xs text-gray-600 hover:text-blue-700 transition-colors duration-400">Download</span>
            </div>
            <div
                class="px-1 py-0.5 flex mt-2.5 hover:bg-white rounded-md transition-colors duration-400 ml-4 cursor-pointer">
              <img src="../components/icons/Like_Icon.svg" alt="收藏"
                   class="h-4 mr-1.5 my-auto stroke-gray-600 hover:stroke-blue-700 transition-colors duration-400">
              <span class="my-auto text-xs text-gray-600 hover:text-blue-700 transition-colors duration-400">Like</span>
            </div>
          </div>
        </div>
        <el-pagination background layout="->, prev, pager, next" :total="1000" style="margin-bottom: 20px"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.language-tab-item {
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  margin-top: 4px;
  margin-bottom: 8px;
}

.language-tab-item input {
  margin-right: 10px;
}

/* 设置被选中的语言文本变蓝 */
.text-blue {
  color: rgb(37 99 235);
  font-weight: 800;
}

.text-normal {
  color: oklch(0.529 0.016 258.365);
  font-weight: 500;
}

.publication-tab-item {
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  margin-top: 4px;
  margin-bottom: 8px;
  color: oklch(0.529 0.016 258.365);
  font-weight: 500;
}


.publication-tab-item.active {
  color: rgb(37 99 235);
  font-weight: 800;
}
</style>