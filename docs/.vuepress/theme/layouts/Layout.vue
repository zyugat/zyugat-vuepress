<template>
  <ParentLayout>
    <template #page-bottom>
      <hr/>
      <div style="text-align: center; color: #767676">
        <p>粤ICP备2021116118号</p>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',

  components: {
    ParentLayout
  }
}
</script>