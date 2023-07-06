<script setup lang='ts'>
import InlineSvg from 'vue-inline-svg';

import ShareSvg from '@/assets/image/social/share.svg';
import useToggleAnimation from '@/composable/useToggleAnimation';
import DialogMenu from '@/components/shared/DialogMenuVue.vue';
import TwitterShareButton from './TwitterShareButtonVue.vue';
import FacebookShareButton from './FacebookShareButtonVue.vue';

import type SocialDataType from '@/types/SocialList';
import { None, Some } from '@sniptt/monads';

defineProps<SocialDataType>();

const [btnToggle, btnStyle] = useToggleAnimation({
    animatedOnStart: false,
    beforeAnimate: None,
    onAnimate: 'btn-slide-left',
    offAnimate: 'btn-slide-right'
});

const [linkToggle, linkStyle] = useToggleAnimation({
    animatedOnStart: false,
    beforeAnimate: Some('hidden'),
    onAnimate: 'link-slide-right',
    offAnimate: 'link-slide-left'
});

const [shareDialogMenuToggle, shareDialogStyle] = useToggleAnimation({
    animatedOnStart: false,
    beforeAnimate: Some('hidden'),
    onAnimate: 'dialog-pop-up',
    offAnimate: 'dialog-hidden'
});

function toggleState() {
    linkToggle();
    btnToggle();
}

function showShareDialog() {
    shareDialogMenuToggle();
}
</script>

<template>
    <li class='relative mx-2 flex min-w-[20%] flex-row justify-center'>
        <button @click='toggleState' :class='`z-10 cursor-pointer bg-blue-700 
        shadow-inner rounded-2xl p-1 min-w-[50%] text-center text-white ${btnStyle}`'>
            {{ $props.name }}
        </button>

        <div :class='`absolute flex flex-row gap-1 right-[20%] ${linkStyle}`' aria-label='button' aria-details='link'>
            <a :href='$props.link' target='_blank'>
                <InlineSvg :src='$props.icon' class='h-8 w-8 text-blue-700 motion-safe:hover:animate-bounce' />
            </a>

            <!-- TODO : Implement Share later -->
            <button @click='showShareDialog'>
                <InlineSvg :src='ShareSvg' class='h-8 w-8 text-blue-700 motion-safe:hover:animate-bounce' />
            </button>

            <DialogMenu :class='`absolute -translate-y-14 flex gap-2  ${shareDialogStyle}`'>
                <TwitterShareButton :href='$props.link' />
                <FacebookShareButton :href='$props.link' />
            </DialogMenu>
        </div>
    </li>
</template>

<style scoped src='./SocialMediaItemAnimate.css'></style>