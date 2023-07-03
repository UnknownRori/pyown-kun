<script setup lang='ts'>
const props = defineProps<{
    class?: string,
}>();

</script>

<template>
    <main :class='`m-0 p-0 min-h-screen bg-gray-100 bg-[url(../assets/image/background/grid.svg)] ${props.class}`'>
        <slot />
    </main>
</template>