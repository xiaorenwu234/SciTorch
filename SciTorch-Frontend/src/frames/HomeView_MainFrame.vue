<template>
  <div class="tabs">
    <!-- Tab Header -->
    <div class="tab-header">
      <div class="w-[98%] md:w-[94%] lg:w-[90%] mx-auto flex">
        <div
            v-for="tab in tabs"
            :key="tab.name"
            class="tab-item"
            :class="{ active: activeTab === tab.name }"
            @click="selectTab(tab.name)"
        >
          <div class="font-bold">
            {{ tab.label }}
          </div>
          <div class="text-sm sub">
            {{ tab.description }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex w-full" style="background-color: #f0f0f0;">
      <div class="w-[98%] md:w-[94%] lg:w-[90%] mx-auto flex my-7">
        <div v-if="activeTab === '文章'" class="w-full flex flex-row">
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
        </div>

        <div v-if="activeTab === '全文'">
          <p>这是 Tab 2 的内容</p>
        </div>
        <div v-if="activeTab === '作者'">
          <p>这是 Tab 3 的内容</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

// Tab 列表
const tabs = [
  {name: '文章', label: '文章', description: '共10000条结果'},
  {name: '全文', label: '全文', description: '共20000条结果'},
  {name: '作者', label: '作者', description: '共100条结果'},
];

// 当前激活的 Tab
const activeTab = ref('文章');

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

// 切换 Tab 的函数
function selectTab(tabName) {
  activeTab.value = tabName;
}
</script>

<style scoped>
.tab-header {
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid oklch(0.746477 0.0216 264.436);
}

.tab-item {
  color: black;
  padding: 10px 30px 10px 30px;
  text-align: center;
  border-left: 1px solid oklch(0.746477 0.0216 264.436);
  border-top: 1px solid oklch(0.746477 0.0216 264.436);
  border-right: 1px solid oklch(0.746477 0.0216 264.436);
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  margin: 0 10px 0 0;
}

.tab-item .sub {
  color: oklch(0.746477 0.0216 264.436);
}

.tab-item.active {
  background-color: #f0f0f0;
  color: #538FFF;
}

.tab-item.active .sub {
  color: black;
}

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
  font-weight: 900;
}

.text-normal {
  color: oklch(0.529 0.016 258.365);
  font-weight: 700;
}

.publication-tab-item {
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  margin-top: 4px;
  margin-bottom: 8px;
  color: oklch(0.529 0.016 258.365);
  font-weight: 700;
}

.publication-tab-item.active {
  color: rgb(37 99 235);
  font-weight: 900;
}
</style>
