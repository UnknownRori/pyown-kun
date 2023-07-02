<script setup lang='ts'>
const props = defineProps<{
    class?: string,
}>();

</script>

<template>
    <main :class='`min-h-screen bg-gray-100 ${props.class}`'>
        <slot />
    </main>
</template>