<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const paperNumber = ref(0);
const needFullAccess = ref(true);
const router = useRouter();

const navigateToService = () => {
  router.push('getService');
};
</script>

<template>
  <div v-if="needFullAccess" class="my-5 w-full h-[270px] flex cursor-pointer" @click="navigateToService">
    <div class="w-[98%] md:w-[94%] lg:w-[90%] flex border rounded-md shadow-sm flex-col mx-auto justify-center pl-8 ad-background">
      <div class="flex">
        <span class="mb-1.5 text-black" style="font-weight: 550;font-size:32px; line-height: 38px;">Advanced Search found</span>
        <span class="mb-1.5 text-blue-700 ml-2" style="font-weight: 550;font-size:32px; line-height: 38px;">9,465,672 Papers</span>
      </div>
      <span class="text-2xl mb-6 text-gray-700" style="font-weight:400">with "search" in the full text</span>
      <div class="text-xl bg-blue-700 hover:bg-blue-800 transition-colors duration-400 py-2 text-white rounded-md w-56 text-center"
           style="font-weight: 600;">Upgrade to view all
      </div>
    </div>
  </div>
</template>

<style scoped>
.ad-background {
  background: #fff url('/background_image.png') no-repeat;
  background-position-x: 50vw;
  background-position-y: 60%;
  background-size: 1000px;
  color: rgba(0, 226, 247, 0.57);
}
</style>
