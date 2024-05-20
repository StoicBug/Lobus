<template>
    <div class="container mx-auto py-20" id="LOBUS-garantit">
        <div class="text-center pt-10">
            <p class="text-primary">{{ $t('whyChooseUsIntroTitle') }}</p>
            <h1 class="text-2xl font-semibold ">- {{ $t('whyChooseUsTitle') }} -</h1>
        </div>
        <div class="grid grid-cols-8 gap-8 pt-10">
            <div class="col-span-6 col-start-2 md:col-start-2 md:col-span-1">
                <img src="../assets/images/home/whyChooseUsCard1.svg" alt="">
            </div>
            <div class="col-span-6 col-start-2 md:col-span-2">
                <h1 class="text-lg font-medium">{{ $t('whyChooseUsTitle1') }}</h1>
                <p>
                    {{ $t('whyChooseUsContent1') }}
                </p>
            </div>
            <div class="col-span-6 col-start-2 md:col-start-5 md:col-span-1">
                <img src="../assets/images/home/whyChooseUsCard2.svg" alt="">
            </div>
            <div class="col-span-6 col-start-2 md:col-span-2">
                <h1 class="text-lg font-medium">{{ $t('whyChooseUsTitle2') }}</h1>
                <p>{{ $t('whyChooseUsContent2') }}</p>
            </div>
            <div class="col-span-6 col-start-2 md:col-start-2 md:col-span-1">
                <img src="../assets/images/home/whyChooseUsCard3.svg" alt="">
            </div>
            <div class="col-span-6 col-start-2 md:col-span-2 ">
                <h1 class="text-lg font-medium">{{ $t('whyChooseUsTitle3') }}</h1>
                <p>{{ $t('whyChooseUsContent3') }}</p>
            </div>
            <div class="col-span-6 col-start-2 md:col-start-5 md:col-span-1">
                <img src="../assets/images/home/whyChooseUsCard4.svg" alt="">
            </div>
            <div class="col-span-6 col-start-2 md:col-span-2">
                <h1 class="text-lg font-medium">{{ $t('whyChooseUsTitle4') }}</h1>
                <p>{{ $t('whyChooseUsContent4') }}</p>
            </div>
        </div>
    </div>
</template>