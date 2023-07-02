<script setup lang='ts'>
import { ref } from 'vue';

import ShareSvg from '@/assets/image/social/share.svg';
import InlineSvg from 'vue-inline-svg';

import type SocialDataType from '@/types/SocialList';

defineProps<SocialDataType>();

enum ItemState {
    None, Open, Close
}

// <!-- TODO : Maybe next time fix this (?)
const state = ref(ItemState.None);
const buttonAnimation = ref('');
const linkAnimation = ref('hidden');

function toggleState() {
    if (state.value == ItemState.None || state.value == ItemState.Close) {
        state.value = ItemState.Open;

        // Do the animation
        buttonAnimation.value = 'btn-slide-left';
        linkAnimation.value = 'link-slide-right';
    }
    else {
        state.value = ItemState.Close;

        // Do the animation
        buttonAnimation.value = 'btn-slide-right';
        linkAnimation.value = 'link-slide-left';
    }
}
</script>

<template>
    <li class='flex flex-row mx-2 min-w-[20%] justify-center relative'>
        <button @click='toggleState' :class='`z-10 cursor-pointer bg-blue-700 
        shadow-inner rounded-2xl p-1 min-w-[50%] text-center text-white ${buttonAnimation}`'>
            {{ $props.name }}
        </button>

        <div :class='`absolute flex flex-row gap-1 right-[20%] ${linkAnimation}`' aria-label='button' aria-details='link'>
            <a :href='$props.link' target='_blank'>
                <InlineSvg :src='$props.icon' class='w-8 h-8 text-blue-700' />
            </a>

            <!-- TODO : Implement Share later -->
            <button>
                <InlineSvg :src='ShareSvg' class='w-8 h-8 text-blue-700' />
            </button>
        </div>
    </li>
</template>

<style scoped>
.btn-slide-left {
    animation: btn-slide-left forwards 500ms ease-in-out;
}

.btn-slide-right {
    animation: btn-slide-right forwards 500ms ease-in-out;
}

@keyframes btn-slide-left {
    0% {
        transform: translateX(0);
    }

    80% {
        transform: translateX(-20%);
    }

    100% {
        transform: translateX(-15%);
    }
}

@keyframes btn-slide-right {
    0% {
        transform: translateX(-15%);
    }

    80% {
        transform: translateX(5%);
    }

    100% {
        transform: translateX(0);
    }
}

.link-slide-left {
    animation: link-slide-left forwards 400ms ease-in-out;
}

.link-slide-right {
    animation: link-slide-right forwards 400ms ease-in-out;
}

@keyframes link-slide-left {
    0% {
        transform: translateX(0);
        opacity: 100;
    }

    80% {
        transform: translateX(-50%);
    }

    100% {
        transform: translateX(-20%);
        opacity: 0;
    }
}

@keyframes link-slide-right {
    0% {
        transform: translateX(-20%);
        opacity: 0;
    }

    80% {
        transform: translateX(20%);
    }

    100% {
        transform: translateX(0);
        opacity: 100;
    }
}
</style>