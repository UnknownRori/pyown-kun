<script setup lang='ts'>
import InlineSvg from 'vue-inline-svg';

import useFacebookShare from '@/composable/useFacebookShare';
import Facebook from '@/assets/image/social/facebook.svg';
import { None } from '@sniptt/monads';

const props = defineProps<{
    href: string,
}>();

const [redirect, url] = useFacebookShare({
    href: props.href,
    rel: None,
    target: None,
});
</script>


<template>
    <a :href='url' @click.prevent='() => redirect()'>
        <InlineSvg :src='Facebook' class='h-8 w-8 rounded-md bg-blue-500 p-1 text-white' />
    </a>
</template>