<template>
    <div 
        :class="{'bg-gray-700 text-white': checked, 'bg-gray-200 text-black/80': !checked}" 
        class="relative transition-all duration-700 overflow-x-hidden pb-20 2xl:pt-8"
    >
        <Header :checked="checked" />

        <div 
            id="welcome"
            class="lg:my-20 my-8"
        >
            <WelcomeSection v-model:checked="checked"/>
        </div>

        <Suspense>
            <template #default>
                <div
                    id="feature"  
                    class="my-24"
                >
                    <FeatureSection v-model:checked="checked"/>
                </div>
            </template>
        </Suspense>

        <Suspense>
            <template #default>
                <div 
                    id="skill"
                    class="my-24 lg:my-36"
                >
                    <SkillSection v-model:checked="checked"/>
                </div>
            </template>
        </Suspense>

        <Suspense>
            <template #default>
                <div 
                    id="portfolio"
                    class="my-24 lg:my-36"
                >
                    <PortfolioSection v-model:checked="checked"/>
                </div>
            </template>
        </Suspense>

        <Suspense>
            <template #default>
                <div 
                    id="resume"
                    class="my-24 lg:my-36"
                >
                    <ResumeSection v-model:checked="checked"/>
                </div>
            </template>
        </Suspense>

        <Suspense>
            <template #default>
                <div
                    id="contact"
                    class="mt-24 lg:mt-36 mb-28"
                >
                    <ContactSection v-model:checked="checked"/>
                </div>
            </template>
        </Suspense>

        <Suspense>
            <template #default>
                <div>
                    <Footer v-model:checked="checked"/>
                </div>
            </template>
        </Suspense>

        <div class="fixed bottom-72 right-2">
            <SwitchTheme v-model:checked="checked"/>
        </div>

        <ScrollTop 
            :pt="{
                root: checked ? 'text-white bg-blue-400 rounded-full' : 'text-white bg-blue-700/70 rounded-full',
            }"
        />
    </div>

</template>

<script setup>
import { ref, watch, onMounted, defineAsyncComponent } from 'vue';
import { injectSpeedInsights } from '@vercel/speed-insights';

import ScrollTop from 'primevue/scrolltop';

import Header from "./components/Layouts/Header.vue";
import WelcomeSection from "./components/inc/WelcomeSection.vue"
import SwitchTheme from "./components/SwitchTheme.vue";

const FeatureSection = defineAsyncComponent(() => import("./components/inc/FeatureSection.vue"));
const SkillSection = defineAsyncComponent(() => import("./components/inc/SkillSection.vue"));
const PortfolioSection = defineAsyncComponent(() => import('./components/inc/PortfolioSection.vue'));
const ResumeSection = defineAsyncComponent(() => import('./components/inc/ResumeSection.vue'));
const ContactSection = defineAsyncComponent(() => import('./components/inc/ContactSection.vue'));
const Footer = defineAsyncComponent(() => import('./components/Layouts/Footer.vue'));

const checked = ref(localStorage.getItem("theme") === "dark");

injectSpeedInsights();

onMounted(() => {
    if (checked.value) {
        document.body.classList.add("bg-gray-700", "text-white");
    } else {
        document.body.classList.add("bg-gray-100", "text-black/80");
    }
});

watch(checked, (newVal) => {
    localStorage.setItem("theme", newVal ? "dark" : "light");
});

</script>
