<script setup lang='ts'>
import SocialLists from '@/data/SocialLists';
import SocialItem from '@/components/social/SocialMediaItemVue.vue';


</script>

<template>
    <ul class='flex flex-col gap-2'>
        <SocialItem v-for='(SocialList, index) in SocialLists' :key='index' :icon='SocialList.icon' :link='SocialList.link'
            :name='SocialList.name' />
    </ul>
</template>