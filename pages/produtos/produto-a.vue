<template>
    <div>
        <div class="bg-gray-100">
            <div class="container mx-auto flex items-center space-x-4 h-10 mb-10">
                <NuxtLink :to="{name: 'empresa'}">A empresa</NuxtLink>
                <NuxtLink :to="{name: 'produtos'}">Produtos</NuxtLink>
                <NuxtLink to="/servicos">Serviços</NuxtLink>
            </div>
        </div>
        <div>
            Produto A
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data(){
            return {

            }
        }
    }
</script>