<template>
 <div>
        <div class="bg-gray-100">
            <div class="container mx-auto flex items-center space-x-4 h-10 mb-10">
                <NuxtLink :to="{name: 'empresa'}">A empresa</NuxtLink>
                <NuxtLink to="servicos">Serviços</NuxtLink>
            </div>
        </div>
        
        <div>
            <div class="container mx-auto">
                <h1 class="text-lg font-bold">Serviços</h1>
                <p>Essa é uma grande descrição da empresa e blablabla...</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return{

            }
        }
    }
</script>