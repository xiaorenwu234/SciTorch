<template>
  <div class="tabs">
    <div class="tab-header">
      <div
          v-for="tab in tabs"
          :key="tab.name"
          class="tab-item"
          :class="{ active: activeTab === tab.name }"
          @click="selectTab(tab.name)"
      >
        <div class="font-bold">
          {{tab.label}}
        </div>
        <div class="text-sm sub">
          {{tab.description}}
        </div>
      </div>
    </div>
    <div class="tab-content">
      <slot :name="activeTab"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tabs = [
  { name: 'tab1', label: 'Tab 1',description:'This is tab 1' },
  { name: 'tab2', label: 'Tab 2',description:'This is tab 2' },
  { name: 'tab3', label: 'Tab 3',description:'This is tab 3' },
];

const activeTab = ref('tab1');

function selectTab(tabName) {
  activeTab.value = tabName;
}
</script>

<style scoped>
.tabs {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.tab-header {
  display: flex;
  cursor: pointer;
}

.tab-item {
  color:black;
  padding:10px 30px 10px 30px;
  text-align: center;
  border-bottom: 2px solid transparent;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
}


.tab-item .sub {
  color:oklch(0.746477 0.0216 264.436)
}


.tab-item.active {
  border-bottom: 2px solid #538FFF;
  background-color: #f0f0f0;
  color: #538FFF;
}

.tab-item.active .sub {
  color:black;
}

</style>
