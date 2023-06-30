<script setup lang='ts'>
const props = defineProps<{
    class?: string,
}>();
</script>

<template>
    <main :class='props.class ?? "flex flex-col justify-center items-center min-h-screen gap-12"'>
        <slot />
    </main>
</template>