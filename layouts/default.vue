<template>
    <div class="w-screen h-screen flex flex-wrap items-center justify-center">
        <div class="container">
            <div class="mb-4 -mx-4">
                <div class="px-2">
                    <button class="px-4 py-2 font-bold rounded bg-blue-500 shadow text-white outline-none border-0 cursor-pointer hover:bg-blue-600"
                        type="button"
                        @click="$router.replace('/')">Почетна</button>
                </div>
            </div>
            <nuxt />
        </div>
    </div>
</template>
