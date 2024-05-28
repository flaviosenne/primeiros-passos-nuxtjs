<template>
  <div>

    <VTooltip>
      <a>Alô</a>
      <template #popper>
        Help...

      </template>
    </VTooltip>

    <pre> {{ $store.state.user }} </pre>


    <pre> {{ user }} </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',

  data() {
    return {}
  },

  mounted() {
    console.log(this.$name('joão'))
    console.log(this.$dayjs().format())
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>
