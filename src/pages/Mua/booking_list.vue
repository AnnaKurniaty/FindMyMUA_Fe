<template
    ><div id="webcrumbs">
        <div class="bg-gradient-to-br from-pink-50 to-rose-50 min-h-screen p-4 md:p-6 lg:p-8">
            <header class="mb-6">
                <h1 class="text-2xl md:text-3xl font-bold text-rose-800">Daftar Booking MUA</h1>
                <p class="text-gray-600 mt-1">Semua janji temu makeup artist Anda dalam satu tempat</p>
            </header>
            <div class="bg-white rounded-xl shadow-md p-4 mb-6 flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <span class="material-symbols-outlined text-gray-600">filter_list</span>
                    <select class="bg-transparent border-0 focus:ring-0 text-gray-700 cursor-pointer">
                        <option>Semua Status</option>
                        <option>Menunggu Konfirmasi</option>
                        <option>Dikonfirmasi</option>
                        <option>Selesai</option>
                        <option>Dibatalkan</option>
                    </select>
                </div>
                <div class="relative">
                    <input
                        type="text"
                        placeholder="Cari booking..."
                        class="pl-9 pr-4 py-2 rounded-lg border border-gray-300 focus:border-rose-400 focus:ring focus:ring-rose-200 transition-all"
                    />
                    <span class="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
                </div>
            </div>
            <div class="space-y-4">
                <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                    <div class="border-l-4 border-yellow-400 p-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-semibold text-lg">Natural Makeup Look</h3>
                                <p class="text-gray-600 text-sm mt-1">
                                    MUA: <span class="font-medium text-rose-700">Anisa Beauty</span>
                                </p>
                            </div>
                            <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium"
                                >Menunggu Konfirmasi</span
                            >
                        </div>
                        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">calendar_month</span>
                                <span class="text-sm text-gray-700">20 November 2023</span>
                            </div>
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">schedule</span>
                                <span class="text-sm text-gray-700">13:00 - 15:00</span>
                            </div>
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">payments</span>
                                <span class="text-sm text-gray-700">Rp 450.000</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 flex justify-between items-center">
                        <div class="flex items-center">
                            <span class="material-symbols-outlined text-gray-500 mr-2">location_on</span>
                            <span class="text-sm text-gray-700">Grand City Mall, Surabaya</span>
                        </div>
                        <div class="flex space-x-2">
                            <button class="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                <span class="material-symbols-outlined text-gray-600">chat</span>
                            </button>
                            <button class="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                <span class="material-symbols-outlined text-gray-600">star_rate</span>
                            </button>
                            <button class="p-2 rounded-full hover:bg-red-100 transition-colors">
                                <span class="material-symbols-outlined text-red-600">close</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                    <div class="border-l-4 border-green-400 p-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-semibold text-lg">Glamour Party Makeup</h3>
                                <p class="text-gray-600 text-sm mt-1">
                                    MUA: <span class="font-medium text-rose-700">Cantik Pro Makeup</span>
                                </p>
                            </div>
                            <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                                >Dikonfirmasi</span
                            >
                        </div>
                        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">calendar_month</span>
                                <span class="text-sm text-gray-700">25 November 2023</span>
                            </div>
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">schedule</span>
                                <span class="text-sm text-gray-700">18:00 - 19:30</span>
                            </div>
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">payments</span>
                                <span class="text-sm text-gray-700">Rp 650.000</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 flex justify-between items-center">
                        <div class="flex items-center">
                            <span class="material-symbols-outlined text-gray-500 mr-2">location_on</span>
                            <span class="text-sm text-gray-700">Hotel Mulia, Jakarta</span>
                        </div>
                        <div class="flex space-x-2">
                            <button class="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                <span class="material-symbols-outlined text-gray-600">chat</span>
                            </button>
                            <button class="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                <span class="material-symbols-outlined text-gray-600">edit</span>
                            </button>
                            <button class="p-2 rounded-full hover:bg-red-100 transition-colors">
                                <span class="material-symbols-outlined text-red-600">close</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                    <div class="border-l-4 border-purple-400 p-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-semibold text-lg">Wedding Makeup Package</h3>
                                <p class="text-gray-600 text-sm mt-1">
                                    MUA: <span class="font-medium text-rose-700">Dian Wedding Makeup</span>
                                </p>
                            </div>
                            <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                                >Prewedding</span
                            >
                        </div>
                        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">calendar_month</span>
                                <span class="text-sm text-gray-700">5 Desember 2023</span>
                            </div>
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">schedule</span>
                                <span class="text-sm text-gray-700">08:00 - 14:00</span>
                            </div>
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">payments</span>
                                <span class="text-sm text-gray-700">Rp 2.500.000</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 flex justify-between items-center">
                        <div class="flex items-center">
                            <span class="material-symbols-outlined text-gray-500 mr-2">location_on</span>
                            <span class="text-sm text-gray-700">Pantai Kuta, Bali</span>
                        </div>
                        <div class="flex space-x-2">
                            <button class="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                <span class="material-symbols-outlined text-gray-600">chat</span>
                            </button>
                            <button class="p-2 rounded-full hover:bg-gray-200 transition-colors">
                                <span class="material-symbols-outlined text-gray-600">edit</span>
                            </button>
                            <button class="p-2 rounded-full hover:bg-red-100 transition-colors">
                                <span class="material-symbols-outlined text-red-600">close</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                    <div class="border-l-4 border-gray-400 p-4">
                        <div class="flex justify-between items-start">
                            <div>
                                <h3 class="font-semibold text-lg">Casual Makeup Tutorial</h3>
                                <p class="text-gray-600 text-sm mt-1">
                                    MUA: <span class="font-medium text-rose-700">Makeup by Rina</span>
                                </p>
                            </div>
                            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                                >Selesai</span
                            >
                        </div>
                        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">calendar_month</span>
                                <span class="text-sm text-gray-700">15 Oktober 2023</span>
                            </div>
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">schedule</span>
                                <span class="text-sm text-gray-700">10:00 - 12:00</span>
                            </div>
                            <div class="flex items-center">
                                <span class="material-symbols-outlined text-gray-500 mr-2">payments</span>
                                <span class="text-sm text-gray-700">Rp 350.000</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 flex justify-between items-center">
                        <div class="flex items-center">
                            <span class="material-symbols-outlined text-gray-500 mr-2">location_on</span>
                            <span class="text-sm text-gray-700">Studio Rina, Bandung</span>
                        </div>
                        <div class="flex space-x-2">
                            <button
                                class="px-3 py-1 text-sm bg-rose-500 hover:bg-rose-600 text-white rounded-md transition-colors"
                            >
                                Beri Ulasan
                            </button>
                            <button
                                class="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
                            >
                                Booking Lagi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 flex justify-center">
                <button
                    class="flex items-center space-x-2 bg-white border border-rose-300 text-rose-600 px-4 py-2 rounded-lg hover:bg-rose-50 transition-colors"
                >
                    <span class="material-symbols-outlined">add</span> <span>Booking MUA Baru</span>
                </button>
            </div>
        </div>
    </div></template
>

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
    #webcrumbs .left-3 {
        left: 12px;
    }
    #webcrumbs .top-2\.5 {
        top: 10px;
    }
    #webcrumbs .mb-6 {
        margin-bottom: 24px;
    }
    #webcrumbs .mr-2 {
        margin-right: 8px;
    }
    #webcrumbs .mt-1 {
        margin-top: 4px;
    }
    #webcrumbs .mt-4 {
        margin-top: 16px;
    }
    #webcrumbs .mt-8 {
        margin-top: 32px;
    }
    #webcrumbs .flex {
        display: flex;
    }
    #webcrumbs .grid {
        display: grid;
    }
    #webcrumbs .min-h-screen {
        min-height: 100vh;
    }
    #webcrumbs .cursor-pointer {
        cursor: pointer;
    }
    #webcrumbs .grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    #webcrumbs .flex-row {
        flex-direction: row;
    }
    #webcrumbs .items-start {
        align-items: flex-start;
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
    #webcrumbs .gap-3 {
        gap: 12px;
    }
    #webcrumbs .gap-4 {
        gap: 16px;
    }
    #webcrumbs :is(.space-x-2 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-x-reverse: 0;
        margin-left: calc(8px * (1 - var(--tw-space-x-reverse)));
        margin-right: calc(8px * var(--tw-space-x-reverse));
    }
    #webcrumbs :is(.space-y-4 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(16px * var(--tw-space-y-reverse));
        margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs .overflow-hidden {
        overflow: hidden;
    }
    #webcrumbs .rounded-full {
        border-radius: 9999px;
    }
    #webcrumbs .rounded-lg {
        border-radius: 24px;
    }
    #webcrumbs .rounded-md {
        border-radius: 18px;
    }
    #webcrumbs .rounded-xl {
        border-radius: 36px;
    }
    #webcrumbs .border {
        border-width: 1px;
    }
    #webcrumbs .border-0 {
        border-width: 0;
    }
    #webcrumbs .border-l-4 {
        border-left-width: 4px;
    }
    #webcrumbs .border-gray-300 {
        --tw-border-opacity: 1;
        border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .border-gray-400 {
        --tw-border-opacity: 1;
        border-color: rgb(156 163 175 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .border-green-400 {
        --tw-border-opacity: 1;
        border-color: rgb(74 222 128 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .border-purple-400 {
        --tw-border-opacity: 1;
        border-color: rgb(192 132 252 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .border-rose-300 {
        --tw-border-opacity: 1;
        border-color: rgb(253 164 175 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .border-yellow-400 {
        --tw-border-opacity: 1;
        border-color: rgb(250 204 21 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .bg-gray-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-gray-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-green-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(220 252 231 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-purple-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(243 232 255 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-rose-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(244 63 94 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-transparent {
        background-color: transparent;
    }
    #webcrumbs .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-yellow-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 249 195 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-gradient-to-br {
        background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    }
    #webcrumbs .from-pink-50 {
        --tw-gradient-from: #fdf2f8 var(--tw-gradient-from-position);
        --tw-gradient-to: rgba(253, 242, 248, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .to-rose-50 {
        --tw-gradient-to: #fff1f2 var(--tw-gradient-to-position);
    }
    #webcrumbs .p-2 {
        padding: 8px;
    }
    #webcrumbs .p-4 {
        padding: 16px;
    }
    #webcrumbs .px-3 {
        padding-left: 12px;
        padding-right: 12px;
    }
    #webcrumbs .px-4 {
        padding-left: 16px;
        padding-right: 16px;
    }
    #webcrumbs .py-1 {
        padding-bottom: 4px;
        padding-top: 4px;
    }
    #webcrumbs .py-2 {
        padding-bottom: 8px;
        padding-top: 8px;
    }
    #webcrumbs .py-3 {
        padding-bottom: 12px;
        padding-top: 12px;
    }
    #webcrumbs .pl-9 {
        padding-left: 36px;
    }
    #webcrumbs .pr-4 {
        padding-right: 16px;
    }
    #webcrumbs .text-2xl {
        font-size: 24px;
        line-height: 31.200000000000003px;
    }
    #webcrumbs .text-lg {
        font-size: 18px;
        line-height: 27px;
    }
    #webcrumbs .text-sm {
        font-size: 14px;
        line-height: 21px;
    }
    #webcrumbs .text-xs {
        font-size: 12px;
        line-height: 19.200000000000003px;
    }
    #webcrumbs .font-bold {
        font-weight: 700;
    }
    #webcrumbs .font-medium {
        font-weight: 500;
    }
    #webcrumbs .font-semibold {
        font-weight: 600;
    }
    #webcrumbs .text-gray-400 {
        --tw-text-opacity: 1;
        color: rgb(156 163 175 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-gray-500 {
        --tw-text-opacity: 1;
        color: rgb(107 114 128 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-gray-600 {
        --tw-text-opacity: 1;
        color: rgb(75 85 99 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-gray-700 {
        --tw-text-opacity: 1;
        color: rgb(55 65 81 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-green-700 {
        --tw-text-opacity: 1;
        color: rgb(21 128 61 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-purple-700 {
        --tw-text-opacity: 1;
        color: rgb(126 34 206 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-red-600 {
        --tw-text-opacity: 1;
        color: rgb(220 38 38 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-rose-600 {
        --tw-text-opacity: 1;
        color: rgb(225 29 72 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-rose-700 {
        --tw-text-opacity: 1;
        color: rgb(190 18 60 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-rose-800 {
        --tw-text-opacity: 1;
        color: rgb(159 18 57 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-white {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-yellow-700 {
        --tw-text-opacity: 1;
        color: rgb(161 98 7 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    }
    #webcrumbs .shadow-md,
    #webcrumbs .shadow-sm {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .shadow-sm {
        --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
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
    #webcrumbs .hover\:bg-gray-200:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:bg-red-100:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(254 226 226 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:bg-rose-50:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(255 241 242 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:bg-rose-600:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(225 29 72 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:shadow-md:hover {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .focus\:border-rose-400:focus {
        --tw-border-opacity: 1;
        border-color: rgb(251 113 133 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .focus\:ring:focus {
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    }
    #webcrumbs .focus\:ring-0:focus,
    #webcrumbs .focus\:ring:focus {
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    }
    #webcrumbs .focus\:ring-0:focus {
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color);
    }
    #webcrumbs .focus\:ring-rose-200:focus {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(254 205 211 / var(--tw-ring-opacity, 1));
    }
    @media (min-width: 768px) {
        #webcrumbs .md\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        #webcrumbs .md\:p-6 {
            padding: 24px;
        }
        #webcrumbs .md\:text-3xl {
            font-size: 30px;
            line-height: 36px;
        }
    }
    @media (min-width: 1024px) {
        #webcrumbs .lg\:p-8 {
            padding: 32px;
        }
    }
</style>
