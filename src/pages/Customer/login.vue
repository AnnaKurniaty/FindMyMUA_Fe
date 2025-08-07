<template
    ><div id="webcrumbs">
        <div
            class="w-full min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center px-4 py-10 text-gray-700"
        >
            <div
                class="w-full max-w-4xl bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row"
            >
                <div class="md:w-1/2 bg-gradient-to-br from-[#D56E6E] to-[#D56E6E]/80 p-8 md:p-12 text-white relative">
                    <div class="absolute top-6 left-6 flex items-center space-x-1">
                        <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <span class="material-symbols-outlined text-white text-sm">palette</span>
                        </div>
                        <span class="text-xl font-bold">Wezz Beauty</span>
                    </div>
                    <div class="mt-16 md:mt-24">
                        <h2 class="text-3xl md:text-4xl font-bold mb-6">Welcome Back!</h2>
                        <p class="text-pink-100 mb-8">
                            Login to access your personalized makeup artist recommendations and manage your beauty
                            appointments.
                        </p>
                        <div class="space-y-6 mt-12">
                            <div class="flex items-center space-x-4 text-pink-100">
                                <span class="material-symbols-outlined">check_circle</span>
                                <p>Find the perfect makeup artist for your style</p>
                            </div>
                            <div class="flex items-center space-x-4 text-pink-100">
                                <span class="material-symbols-outlined">check_circle</span>
                                <p>Book appointments with top-rated professionals</p>
                            </div>
                            <div class="flex items-center space-x-4 text-pink-100">
                                <span class="material-symbols-outlined">check_circle</span>
                                <p>Save your favorite looks and artists</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 p-8 md:p-12">
                    <div class="flex justify-between items-center mb-8">
                        <a
                            href="/guest"
                            class="bg-white text-[#D56E6E] border border-pink-200 px-4 py-2 rounded-full font-medium hover:bg-pink-50 transition-colors flex items-center"
                        >
                            <span class="material-symbols-outlined text-sm mr-1">arrow_back</span>
                            Back
                        </a>
                        <div class="flex space-x-2">
                                <a
                                    href="/login/cus"
                                    class="bg-white text-[#D56E6E] border border-pink-200 px-4 py-2 rounded-full font-medium hover:bg-pink-50 transition-colors"
                                >
                                    Login
                                 </a>
                                <a
                                    href="/register/cus"
                                    class="bg-pink-100 text-[#D56E6E] px-4 py-2 rounded-full font-medium hover:bg-pink-200 transition-colors"
                                >
                                    Register
                                </a>
                        </div>
                    </div>
                    <div class="mb-8">
                        <h2 class="text-2xl font-bold text-[#D56E6E] mb-2">Login to Your Account</h2>
                        <p class="text-pink-600">Enter your credentials to access your account</p>
                    </div>
                    <form class="space-y-6" @submit.prevent="handleLogin">
                        <div class="space-y-2">
                            <label class="block text-pink-800 font-medium">Email</label>
                            <div class="relative">
                                <span class="absolute inset-y-0 left-3 flex items-center text-pink-400">
                                    <span class="material-symbols-outlined text-sm">email</span>
                                </span>
                                <input
                                    type="email"
                                    v-model="email"
                                    class="w-full pl-10 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-between">
                                <label class="block text-pink-800 font-medium">Password</label>
                                <!-- <a href="#" class="text-[#D56E6E] text-sm hover:underline">Forgot password?</a> -->
                            </div>
                            <div class="relative">
                                <span class="absolute inset-y-0 left-3 flex items-center text-pink-400">
                                    <span class="material-symbols-outlined text-sm">lock</span>
                                </span>
                                <input
                                    type="password"
                                    v-model="password"
                                    class="w-full pl-10 pr-4 py-3 rounded-full border-2 border-pink-200 focus:border-[#D56E6E] focus:outline-none transition-colors"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="w-full bg-gradient-to-r from-[#D56E6E] to-[#D56E6E]/80 text-white py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-medium"
                        >
                            Sign In
                        </button>
                        <p class="text-center text-pink-600">
                            Don&#x27;t have an account?
                            <a href="/register/cus" class="text-[#D56E6E] font-medium hover:underline ml-1">Register here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>

         <!-- Success Modal -->
        <div v-if="showSuccessModal" class="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300">
        <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-[360px] text-center animate-fadeIn">
            <div class="mb-4">
            <svg class="mx-auto h-12 w-12 text-pink-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            </div>
            <h2 class="text-xl font-bold text-pink-500 mb-2">Welcome, {{ loggedInUsername }}! 💖</h2>
            <p class="text-sm text-gray-700 mb-6">Here’s to a day as radiant as your smile.<br/>Let’s make today glow ✨</p>
            <button @click="closeModal"
                    class="w-full bg-gradient-to-r from-[#D56E6E] to-[#D56E6E]/80 text-white py-2 px-2 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-md">
            ok
            </button>
        </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { config, apiFetch } from '@/config'

const email = ref('')
const password = ref('')
const router = useRouter()
const showSuccessModal = ref(false)
const loggedInUsername = ref('Beautiful')

const handleLogin = async () => {
  try {
    const res = await apiFetch('/auth/login/customer', {
            method: 'POST',
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        });

    if (res) {
        localStorage.setItem('token', res.access_token)
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('user_id', res.user.id)
        localStorage.setItem('role', 'customer')
        
        showSuccessModal.value = true
        loggedInUsername.value = res.user.name
        setTimeout(() => {
        showSuccessModal.value = false
        router.push('/home')
        }, 2000)
    } else {
        alert('Email atau password salah.')
    }
    } catch (error) {
        alert('Gagal login. Silakan cek koneksi Anda.')
        console.error(error)
  }
}

const closeModal = () => {
  showSuccessModal.value = false
  router.push('/home')
}
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);
    @import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);
    @import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined);

    *,
    :after,
    :before {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
        --tw-contain-size: ;
        --tw-contain-layout: ;
        --tw-contain-paint: ;
        --tw-contain-style: ;
    }
    ::backdrop {
        --tw-border-spacing-x: 0;
        --tw-border-spacing-y: 0;
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-gradient-from-position: ;
        --tw-gradient-via-position: ;
        --tw-gradient-to-position: ;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
        --tw-contain-size: ;
        --tw-contain-layout: ;
        --tw-contain-paint: ;
        --tw-contain-style: ;
    } /*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/
    *,
    :after,
    :before {
        border: 0 solid #e5e7eb;
        box-sizing: border-box;
    }
    :after,
    :before {
        --tw-content: "";
    }
    :host,
    html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family:
            Open Sans,
            ui-sans-serif,
            system-ui,
            sans-serif,
            Apple Color Emoji,
            Segoe UI Emoji,
            Segoe UI Symbol,
            Noto Color Emoji;
        font-feature-settings: normal;
        font-variation-settings: normal;
        -moz-tab-size: 4;
        tab-size: 4;
        -webkit-tap-highlight-color: transparent;
    }
    body {
        line-height: inherit;
        margin: 0;
    }
    hr {
        border-top-width: 1px;
        color: inherit;
        height: 0;
    }
    abbr:where([title]) {
        text-decoration: underline dotted;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
    b,
    strong {
        font-weight: bolder;
    }
    code,
    kbd,
    pre,
    samp {
        font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Monaco,
            Consolas,
            Liberation Mono,
            Courier New,
            monospace;
        font-feature-settings: normal;
        font-size: 1em;
        font-variation-settings: normal;
    }
    small {
        font-size: 80%;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sub {
        bottom: -0.25em;
    }
    sup {
        top: -0.5em;
    }
    table {
        border-collapse: collapse;
        border-color: inherit;
        text-indent: 0;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        color: inherit;
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 100%;
        font-variation-settings: inherit;
        font-weight: inherit;
        letter-spacing: inherit;
        line-height: inherit;
        margin: 0;
        padding: 0;
    }
    button,
    select {
        text-transform: none;
    }
    button,
    input:where([type="button"]),
    input:where([type="reset"]),
    input:where([type="submit"]) {
        -webkit-appearance: button;
        background-color: transparent;
        background-image: none;
    }
    :-moz-focusring {
        outline: auto;
    }
    :-moz-ui-invalid {
        box-shadow: none;
    }
    progress {
        vertical-align: baseline;
    }
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
    }
    [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
    }
    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }
    summary {
        display: list-item;
    }
    blockquote,
    dd,
    dl,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    p,
    pre {
        margin: 0;
    }
    fieldset {
        margin: 0;
    }
    fieldset,
    legend {
        padding: 0;
    }
    menu,
    ol,
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    dialog {
        padding: 0;
    }
    textarea {
        resize: vertical;
    }
    input::placeholder,
    textarea::placeholder {
        color: #9ca3af;
        opacity: 1;
    }
    [role="button"],
    button {
        cursor: pointer;
    }
    :disabled {
        cursor: default;
    }
    audio,
    canvas,
    embed,
    iframe,
    img,
    object,
    svg,
    video {
        display: block;
        vertical-align: middle;
    }
    img,
    video {
        height: auto;
        max-width: 100%;
    }
    [hidden]:where(:not([hidden="until-found"])) {
        display: none;
    }
    #webcrumbs .absolute {
        position: absolute;
    }
    #webcrumbs .relative {
        position: relative;
    }
    #webcrumbs .inset-y-0 {
        bottom: 0;
        top: 0;
    }
    #webcrumbs .left-1\/2 {
        left: 50%;
    }
    #webcrumbs .left-3 {
        left: 12px;
    }
    #webcrumbs .left-6 {
        left: 24px;
    }
    #webcrumbs .top-1\/2 {
        top: 50%;
    }
    #webcrumbs .top-6 {
        top: 24px;
    }
    #webcrumbs .z-50 {
        z-index: 50;
    }
    #webcrumbs .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }
    #webcrumbs .mb-2 {
        margin-bottom: 8px;
    }
    #webcrumbs .mb-4 {
        margin-bottom: 16px;
    }
    #webcrumbs .mb-6 {
        margin-bottom: 24px;
    }
    #webcrumbs .mb-8 {
        margin-bottom: 32px;
    }
    #webcrumbs .ml-1 {
        margin-left: 4px;
    }
    #webcrumbs .mr-1 {
        margin-right: 4px;
    }
    #webcrumbs .mt-12 {
        margin-top: 48px;
    }
    #webcrumbs .mt-16 {
        margin-top: 64px;
    }
    #webcrumbs .block {
        display: block;
    }
    #webcrumbs .flex {
        display: flex;
    }
    #webcrumbs .hidden {
        display: none;
    }
    #webcrumbs .h-12 {
        height: 48px;
    }
    #webcrumbs .h-8 {
        height: 32px;
    }
    #webcrumbs .h-\[400px\] {
        height: 400px;
    }
    #webcrumbs .min-h-screen {
        min-height: 100vh;
    }
    #webcrumbs .w-12 {
        width: 48px;
    }
    #webcrumbs .w-8 {
        width: 32px;
    }
    #webcrumbs .w-\[360px\] {
        width: 360px;
    }
    #webcrumbs .w-full {
        width: 100%;
    }
    #webcrumbs .max-w-4xl {
        max-width: 56rem;
    }
    #webcrumbs .-translate-x-1\/2 {
        --tw-translate-x: -50%;
    }
    #webcrumbs .-translate-x-1\/2,
    #webcrumbs .-translate-y-1\/2 {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs .-translate-y-1\/2 {
        --tw-translate-y: -50%;
    }
    #webcrumbs .transform {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs .flex-row {
        flex-direction: row;
    }
    #webcrumbs .flex-col {
        flex-direction: column;
    }
    #webcrumbs .items-center {
        align-items: center;
    }
    #webcrumbs .justify-center {
        justify-content: center;
    }
    #webcrumbs .justify-between {
        justify-content: space-between;
    }
    #webcrumbs .gap-4 {
        gap: 16px;
    }
    #webcrumbs :is(.space-x-1 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-x-reverse: 0;
        margin-left: calc(4px * (1 - var(--tw-space-x-reverse)));
        margin-right: calc(4px * var(--tw-space-x-reverse));
    }
    #webcrumbs :is(.space-x-2 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-x-reverse: 0;
        margin-left: calc(8px * (1 - var(--tw-space-x-reverse)));
        margin-right: calc(8px * var(--tw-space-x-reverse));
    }
    #webcrumbs :is(.space-x-4 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-x-reverse: 0;
        margin-left: calc(16px * (1 - var(--tw-space-x-reverse)));
        margin-right: calc(16px * var(--tw-space-x-reverse));
    }
    #webcrumbs :is(.space-y-2 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(8px * var(--tw-space-y-reverse));
        margin-top: calc(8px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs :is(.space-y-6 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(24px * var(--tw-space-y-reverse));
        margin-top: calc(24px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs .overflow-hidden {
        overflow: hidden;
    }
    #webcrumbs .rounded-2xl {
        border-radius: 48px;
    }
    #webcrumbs .rounded-3xl {
        border-radius: 72px;
    }
    #webcrumbs .rounded-full {
        border-radius: 9999px;
    }
    #webcrumbs .border {
        border-width: 1px;
    }
    #webcrumbs .border-2 {
        border-width: 2px;
    }
    #webcrumbs .border-pink-200 {
        --tw-border-opacity: 1;
        border-color: rgb(251 207 232 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .bg-pink-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(252 231 243 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-white\/20 {
        background-color: hsla(0, 0%, 100%, 0.2);
    }
    #webcrumbs .bg-white\/80 {
        background-color: hsla(0, 0%, 100%, 0.8);
    }
    #webcrumbs .bg-white\/90 {
        background-color: hsla(0, 0%, 100%, 0.9);
    }
    #webcrumbs .bg-gradient-to-br {
        background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    }
    #webcrumbs .bg-gradient-to-r {
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
    }
    #webcrumbs .from-\[\#D56E6E\] {
        --tw-gradient-from: #d56e6e var(--tw-gradient-from-position);
        --tw-gradient-to: hsla(0, 55%, 63%, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .from-pink-100 {
        --tw-gradient-from: #fce7f3 var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(252, 231, 243, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .to-\[\#D56E6E\]\/80 {
        --tw-gradient-to: hsla(0, 55%, 63%, 0.8) var(--tw-gradient-to-position);
    }
    #webcrumbs .to-pink-200 {
        --tw-gradient-to: #fbcfe8 var(--tw-gradient-to-position);
    }
    #webcrumbs .p-8 {
        padding: 32px;
    }
    #webcrumbs .px-2 {
        padding-left: 8px;
        padding-right: 8px;
    }
    #webcrumbs .px-4 {
        padding-left: 16px;
        padding-right: 16px;
    }
    #webcrumbs .py-10 {
        padding-bottom: 40px;
        padding-top: 40px;
    }
    #webcrumbs .py-2 {
        padding-bottom: 8px;
        padding-top: 8px;
    }
    #webcrumbs .py-3 {
        padding-bottom: 12px;
        padding-top: 12px;
    }
    #webcrumbs .pl-10 {
        padding-left: 40px;
    }
    #webcrumbs .pr-4 {
        padding-right: 16px;
    }
    #webcrumbs .text-center {
        text-align: center;
    }
    #webcrumbs .text-2xl {
        font-size: 24px;
        line-height: 31.200000000000003px;
    }
    #webcrumbs .text-3xl {
        font-size: 30px;
        line-height: 36px;
    }
    #webcrumbs .text-sm {
        font-size: 14px;
        line-height: 21px;
    }
    #webcrumbs .text-xl {
        font-size: 20px;
        line-height: 28px;
    }
    #webcrumbs .font-bold {
        font-weight: 700;
    }
    #webcrumbs .font-medium {
        font-weight: 500;
    }
    #webcrumbs .text-\[\#D56E6E\] {
        --tw-text-opacity: 1;
        color: rgb(213 110 110 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-gray-700 {
        --tw-text-opacity: 1;
        color: rgb(55 65 81 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-pink-100 {
        --tw-text-opacity: 1;
        color: rgb(252 231 243 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-pink-400 {
        --tw-text-opacity: 1;
        color: rgb(244 114 182 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-pink-500 {
        --tw-text-opacity: 1;
        color: rgb(236 72 153 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-pink-600 {
        --tw-text-opacity: 1;
        color: rgb(219 39 119 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-pink-800 {
        --tw-text-opacity: 1;
        color: rgb(157 23 77 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-white {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .shadow-2xl {
        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
    }
    #webcrumbs .shadow-2xl,
    #webcrumbs .shadow-xl {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .shadow-xl {
        --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    }
    #webcrumbs .backdrop-blur-md {
        --tw-backdrop-blur: blur(12px);
        -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
            var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
            var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
        backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
            var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
            var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    }
    #webcrumbs .transition-all {
        transition-duration: 0.15s;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs .transition-colors {
        transition-duration: 0.15s;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs .duration-300 {
        transition-duration: 0.3s;
    }
    #webcrumbs {
        font-family: Open Sans !important;
        font-size: 16px !important;
    }
    #webcrumbs .hover\:-translate-y-1:hover {
        --tw-translate-y: -4px;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    #webcrumbs .hover\:bg-pink-200:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(251 207 232 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:bg-pink-50:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(253 242 248 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:bg-white\/30:hover {
        background-color: hsla(0, 0%, 100%, 0.3);
    }
    #webcrumbs .hover\:underline:hover {
        text-decoration-line: underline;
    }
    #webcrumbs .hover\:shadow-lg:hover {
        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .focus\:border-\[\#D56E6E\]:focus {
        --tw-border-opacity: 1;
        border-color: rgb(213 110 110 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .focus\:outline-none:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
    }
    #webcrumbs :is(.group:hover .group-hover\:text-white) {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    }
    @media (min-width: 768px) {
        #webcrumbs .md\:mt-24 {
            margin-top: 96px;
        }
        #webcrumbs .md\:w-1\/2 {
            width: 50%;
        }
        #webcrumbs .md\:flex-row {
            flex-direction: row;
        }
        #webcrumbs .md\:p-12 {
            padding: 48px;
        }
        #webcrumbs .md\:text-4xl {
            font-size: 36px;
            line-height: 41.4px;
        }
    }
</style>
