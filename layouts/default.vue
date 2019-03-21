<template>
    <div class="w-screen h-screen">
        <header class="bg-white shadow px-4 py-2">
            <div class="container mx-auto">
                <div class="flex flex-wrap justify-between items-center">
                    <button class="px-4 py-2 font-bold rounded text-sm bg-blue-500 shadow text-white outline-none border-0 cursor-pointer hover:bg-blue-600"
                        type="button"
                        @click="$router.replace('/')">Почетна</button>

                    <a href="https://bangjelkoski.com"
                        target="_blank"
                        class="px-4 py-2 no-underline font-bold text-sm rounded bg-teal-500 shadow text-white outline-none border-0 cursor-pointer hover:bg-teal-600">За мене</a>
                </div>
            </div>
        </header>

        <div class="container mx-auto">
            <nuxt />
        </div>

    </div>
</template>
