<template>
    <div class="flex justify-center">
        <div class="flex-1 max-w-4xl">
            <div class="aspect-w-16 aspect-h-9 mt-3 mb-6">
                <ContentSlot :use="$slots.embed"/>
            </div>
        </div>
    </div>
</template>