<script setup lang='ts'>
import InlineSvg from 'vue-inline-svg';

import useTwitterShare from '@/composable/useTwitterShare';
import Twitter from '@/assets/image/social/twitter.svg';
import { None, Some } from '@sniptt/monads';

const props = defineProps<{
    href: string,
}>();

let [redirect, url] = useTwitterShare({
    target: Some('_blank'),
    href: props.href,
    rel: None,
    text: None,
});
</script>


<template>
    <a :href='url' @click.prevent='(event) => redirect()'>
        <InlineSvg :src='Twitter' class='h-8 w-8 rounded-md bg-blue-500 p-1 text-white' />
    </a>
</template>