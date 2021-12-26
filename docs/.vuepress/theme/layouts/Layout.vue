<template>
  <Layout>
    <template #page-bottom>
      <div class="my-footer">
        <hr>
        Powered by <a href="https://github.com/zyugat" target="_blank">
        zyugat </a> 粤ICP备2021116118号
        <br>
        Copyright © 2020-2021 zyugat All Rights Reserved.
        <br>
        联系邮箱：zyugatcn@gmail.com
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
export default defineComponent({
  components: {
    Layout,
  },
})
</script>

<style lang="css">
.my-footer {
  text-align: center;
  color: #aaaaaa;
}
</style>