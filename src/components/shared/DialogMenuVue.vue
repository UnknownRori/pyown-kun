<script setup lang='ts'>
defineProps<{
    class: string
}>();


</script>

<template>
    <div :class='`p-2 border-1 border-gray-200 shadow-md ${$props.class}`'>
        <slot />
    </div>
</template>
