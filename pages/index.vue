<template>
  <div>

    <pre>
      {{ $config }}
    </pre>

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

  asyncData({$config}){
    console.log('no async data consegue ler variável privada? ', $config.facebook_api_key)
  },

  created(){
    console.log('variável de ambiente youtube: ' ,this.$config.youtube_api_key)
    console.log('variável de ambiente facebook: ' ,this.$config.facebook_api_key)
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
