<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: 'About',
  activated() {
    console.log('hash about activated');
  },
  deactivated() {
    console.log('hash about deactivated');
  },
}
</script>