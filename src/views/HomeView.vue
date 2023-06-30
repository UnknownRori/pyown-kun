<script setup lang="ts">
import SocialListVue from '@/components/social/SocialMediaListVue.vue';
import ProfileVue from '@/components/home/ProfileVue.vue';
import LayoutVue from '@/layouts/LayoutVue.vue';
</script>

<template>
  <LayoutVue>
    <section>
      <ProfileVue />
    </section>

    <section>
      <SocialListVue />
    </section>
  </LayoutVue>
</template>
