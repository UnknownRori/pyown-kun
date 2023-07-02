<script setup lang='ts'>
import Profile from "@/assets/image/profile/profile.webp";
</script>

<template>
    <figure class='flex flex-col gap-4'>
        <img class='w-52 rounded-full border-2 border-gray-400 shadow-md' :src='Profile' alt="Profile Image">
        <figcaption class='text-center text-2xl'>Pyown kun</figcaption>
    </figure>
</template>