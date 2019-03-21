<template>
    <div class="w-screen h-screen">
        <header class="bg-white shadow px-4 py-2">
            <div class="container mx-auto">
                <button class="px-4 py-2 font-bold rounded bg-blue-500 shadow text-white outline-none border-0 cursor-pointer hover:bg-blue-600"
                    type="button"
                    @click="$router.replace('/')">Почетна</button>
            </div>
        </header>

        <div class="container mx-auto">
            <nuxt />
        </div>
    </div>
</template>
