<script setup lang="ts">
import SocialListVue from '@/components/social/SocialMediaListVue.vue';
import ProfileVue from '@/components/home/ProfileVue.vue';
import LayoutVue from '@/layouts/LayoutVue.vue';
</script>

<template>
  <LayoutVue class=' flex flex-col justify-center items-center min-h-screen m-2'>
    <div class='sm:w-full md:w-3/4 rounded-2xl py-6 shadow-lg flex flex-col justify-center items-center gap-12'>
      <section>
        <ProfileVue />
      </section>

      <section class='w-full flex flex-col'>
        <SocialListVue />
      </section>
    </div>
  </LayoutVue>
</template>
