<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const paperNumber = ref(0);
const needFullAccess = ref(true);
const router = useRouter();

const navigateToService = () => {
  router.push('getService');
};
</script>

<template>
  <div v-if="needFullAccess" class="py-5 w-full h-56 flex">
    <div class="w-[98%] md:w-[94%] lg:w-[90%] mx-auto flex border shadow-sm flex-col items-center justify-center">
      <span class="font-extrabold text-2xl mb-4 text-center">Get Full Access To {{ paperNumber }} Papers</span>
      <el-button color="#3B82F6" class="font-extrabold text-lg" @click="navigateToService">Upgrade to view all ></el-button>
    </div>
  </div>
</template>

<style scoped>
</style>
