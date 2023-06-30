<script setup lang='ts'>
import Profile from "@/assets/image/profile/profile.webp";
</script>

<template>
    <figure>
        <img class='w-52 shadow-md rounded-full border-2 border-gray-400' :src='Profile' alt="Profile Image">
        <figcaption class='text-center text-2xl'>{{ $firebase.name }}</figcaption>
    </figure>
</template>