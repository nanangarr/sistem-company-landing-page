<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import AuthorContent from '@/components/AuthorContent.vue';
</script>
<template>
  <HeaderContent/>
  <main>
    <slot>
      <AuthorContent/>
    </slot>
  </main>
  <FooterContent/>
</template>
