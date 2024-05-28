<template>
    <div>
        <h1 class="text-lg font-bold">Produtos</h1>
        <NuxtLink to="/produtos/produto-a">Produto A</NuxtLink>
        <NuxtLink to="/produtos/produto-b">Produto B</NuxtLink>

        <br /><br />

        <div v-for="product in products" :key="product.id" class="border-b border-gray-400 py-3">
            {{ product.title }}
        </div>

    </div>
</template>

<script>
export default {
    name: '',
    layout: '',
    data() {
        return {}
    },
    async asyncData({ $axios }) {

        const products = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=3')
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 3000)
        })
        return {
            products
        }
    }
}
</script>