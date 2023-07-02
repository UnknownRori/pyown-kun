<script setup lang="ts">
import SocialListVue from '@/components/social/SocialMediaListVue.vue';
import ProfileVue from '@/components/home/ProfileVue.vue';
import LayoutVue from '@/layouts/LayoutVue.vue';
</script>

<template>
  <LayoutVue class=' m-2 flex min-h-screen flex-col items-center justify-center'>
    <div class='flex flex-col items-center justify-center gap-12 rounded-2xl py-6 shadow-lg sm:w-full md:w-3/4'>
      <section>
        <ProfileVue />
      </section>

      <section class='flex w-full flex-col'>
        <SocialListVue />
      </section>
    </div>
  </LayoutVue>
</template>
