<template>
  <home-ad/>
  <div class="tabs">
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
          <Title_Frame></Title_Frame>
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
import Title_Frame from "@/frames/Title_Frame.vue";
import HomeAd from "@/components/HomeComponents/HomeAd.vue";

// Tab 列表
const tabs = [
  {name: '文章', label: '文章', description: '共10000条结果'},
  {name: '全文', label: '全文', description: '共20000条结果'},
  {name: '作者', label: '作者', description: '共100条结果'},
];

// 当前激活的 Tab
const activeTab = ref('文章');

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
</style>
