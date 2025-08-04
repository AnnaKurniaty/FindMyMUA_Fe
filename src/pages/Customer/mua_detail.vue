<template>
        <div id="webcrumbs" v-if="mua">
            <div class="max-w-full mx-auto p-4 md:p-8 text-gray-800">
                <div class="flex flex-col md:flex-row mb-8">
                    <div class="w-full md:w-1/3 flex flex-col items-start">
                        <img
                            :src="mua.mua_profile?.profile_photo_url || 'https://via.placeholder.com/400x300?text=MUA'"
                            alt="MUA Profile"
                            class="w-64 h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            keywords="makeup artist, professional, beauty, portrait"
                        />
                    </div>
                    <div class="w-full md:w-2/3 md:pl-8 mt-6 md:mt-0">
                        <h1 class="text-3xl font-bold mt-4">{{ mua.name }}</h1>
                        <p class="text-gray-600 mb-4">{{ mua.mua_profile?.service_area }}</p>
                        <button
                           @click="openBookingModal(mua)"
                            class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-300 flex items-center"
                        >
                            <span class="material-symbols-outlined mr-2">calendar_month</span> Booking Sekarang
                        </button>
                    </div>
                </div>
            <div class="mb-12">
                <h2 class="text-2xl font-bold mb-4">Portofolio</h2>
                <div class="relative">
                    <div ref="portfolioContainer" class="overflow-x-hidden pb-4">
                        <div class="flex gap-4" :style="{ transform: `translateX(-${portfolioScrollPosition}px)` }">
                            <div v-for="(service, index) in displayedServices" :key="service.id" class="w-72 h-80 flex-shrink-0 relative group">
                                <img
                                    :src="service.service_photo_url || 'https://via.placeholder.com/400x300?text=Service+Image'"
                                    :alt="service.name"
                                    class="w-72 h-80 object-cover rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:brightness-90"
                                    :keywords="service.name"
                                />
                                <div
                                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <p class="text-white font-medium">{{ service.name }}</p>
                                    <p class="text-white/80 text-sm">{{ service.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button 
                        @click="scrollPortfolio('left')" 
                        class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                        :disabled="portfolioScrollPosition <= 0"
                    >
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button 
                        @click="scrollPortfolio('right')" 
                        class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                        :disabled="portfolioScrollPosition >= maxScroll"
                    >
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
            <div class="mb-12 bg-gray-50 rounded-xl p-6">
                <h2 class="text-2xl font-bold mb-4">Tentang {{ mua.name }}</h2>
                <p class="text-gray-700 mb-4">
                    {{ mua.mua_profile?.bio || 'Deskripsi MUA belum tersedia.' }}
                </p>
                    <div class="mt-6" v-if="mua.mua_profile?.certification && mua.mua_profile?.certification.length > 0">
                        <h3 class="font-semibold text-lg mb-2">Sertifikasi:</h3>
                        <span class="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm">
                            {{ Array.isArray(mua.mua_profile.certification) ? mua.mua_profile.certification.join(', ').replace(/[\[\]"]/g, '') : mua.mua_profile.certification.replace(/[\[\]"]/g, '') }}
                        </span>
                    </div>
            </div>
            <div class="mb-12">
                <h2 class="text-2xl font-bold mb-4">Layanan &amp; Harga</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="service in services" :key="service.id" class="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-300">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="font-bold text-lg">{{ service.name }}</h3>
                            <span class="font-bold text-primary-600">Rp {{ formatRupiah(service.price) }}</span>
                        </div>
                        <div class="flex items-center text-gray-500 mb-3">
                            <span class="material-symbols-outlined mr-1 text-sm">schedule</span>
                            <span class="text-sm">{{ service.duration }}</span>
                        </div>
                        <p class="text-gray-600 text-sm">{{ service.description }}</p>
                    </div>
                </div>
            </div>
            <div class="mb-12">
                <h2 class="text-2xl font-bold mb-4">Ketersediaan</h2>
                <div class="bg-white border border-gray-200 rounded-lg p-6">
                    <div class="flex justify-between items-center mb-6">
                        <button @click="prevMonth" class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
                            <span class="material-symbols-outlined">arrow_back_ios</span>
                        </button>
                        <h3 class="font-semibold text-lg">{{ currentMonthName }} {{ currentYear }}</h3>
                        <button @click="nextMonth" class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
                            <span class="material-symbols-outlined">arrow_forward_ios</span>
                        </button>
                    </div>
                    <div class="grid grid-cols-7 gap-2 mb-4 text-center">
                        <div class="font-medium text-gray-500">Min</div>
                        <div class="font-medium text-gray-500">Sen</div>
                        <div class="font-medium text-gray-500">Sel</div>
                        <div class="font-medium text-gray-500">Rab</div>
                        <div class="font-medium text-gray-500">Kam</div>
                        <div class="font-medium text-gray-500">Jum</div>
                        <div class="font-medium text-gray-500">Sab</div>
                    </div>
                    <div class="grid grid-cols-7 gap-2 text-center">
                        <div
                            v-for="day in calendarDays"
                            :key="day.date"
                            :class="[
                                'py-3 rounded-lg cursor-pointer transition-all duration-300',
                                day.isCurrentMonth ? '' : 'text-gray-300 cursor-not-allowed',
                                day.isAvailable && day.isCurrentMonth ? 'hover:bg-primary-50 text-primary-700 font-medium' : '',
                                day.isBooked && day.isCurrentMonth ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : '',
                                !day.isAvailable && !day.isBooked && day.isCurrentMonth ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : ''
                            ]"
                            @click="day.isAvailable && day.isCurrentMonth ? openBookingModal(mua, day.date) : null"
                        >
                            {{ day.day }}
                            <div
                                v-if="day.isAvailable"
                                class="w-1 h-1 bg-primary-500 rounded-full mx-auto mt-1"
                            ></div>
                            <div
                                v-else-if="day.isBooked"
                                class="w-1 h-1 bg-gray-400 rounded-full mx-auto mt-1"
                            ></div>
                        </div>
                    </div>
                    <div class="flex gap-6 mt-6 text-sm">
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
                            <span>Tersedia</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                            <span>Sudah Dibooking</span>
                        </div>
                        <div class="flex items-center">
                            <div class="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
                            <span>Tidak Tersedia</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-12">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-2xl font-bold">Ulasan</h2>
                    <button
                        class="text-primary-600 hover:text-primary-700 font-medium flex items-center transition-colors duration-300"
                    >
                        Lihat Semua <span class="material-symbols-outlined ml-1">arrow_forward</span>
                    </button>
                </div>
                <div v-if="reviews.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="review in reviews" :key="review.id" class="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-300">
                        <div class="flex justify-between mb-3">
                            <div class="flex items-center">
                                <div
                                    class="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-gray-500"
                                >
                                    <span class="material-symbols-outlined">person</span>
                                </div>
                                <div>
                                    <h3 class="font-semibold">{{ review.customer_name || 'Anonymous' }}</h3>
                                    <p class="text-gray-500 text-sm">{{ formatDate(review.created_at) }}</p>
                                </div>
                            </div>
                            <div class="flex text-yellow-400">
                                <span v-for="n in 5" :key="n" class="material-symbols-outlined text-sm">
                                    {{ n <= review.rating ? 'star' : 'star_outline' }}
                                </span>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm">
                            {{ review.comment || 'Tidak ada komentar' }}
                        </p>
                    </div>
                </div>
                <div v-else class="text-center py-8">
                    <p class="text-gray-500">Belum ada review</p>
                </div>
            </div>
            <div class="bg-primary-50 rounded-xl p-8 text-center">
                <h2 class="text-2xl font-bold mb-3">Siap untuk tampil cantik bersama {{ mua.name }}?</h2>
                <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Jadwalkan konsultasi atau booking layanan makeup untuk acara spesial Anda. Slot tanggal cepat
                    terisi, jangan sampai kehabisan!
                </p>
                <button
                    @click="openBookingModal(mua)"
                    class="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-300 mx-auto flex items-center"
                >
                    <span class="material-symbols-outlined mr-2">calendar_month</span> Booking Sekarang
                </button>
            </div>
        </div>
        <div v-if="bookingModalVisible" class="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 text-gray-700" style="display: flex">
      <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 ease-in-out">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold text-gray-800">Book Your MUA</h3>
          <button  @click="closeBookingModal" class="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="space-y-5">
          <h3 class="text-xl font-bold mb-4">Book MUA: {{ bookingMua?.user?.name || 'Unknown' }}</h3>
          <div>
              <label class="block text-gray-700 font-medium mb-2">Select Service</label>
              <div class="relative">
                <select v-model="bookingServiceId" class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option disabled value="">Choose a service</option>
                  <option v-for="service in bookingServices" :key="service.id" :value="service.id">{{ service.name }}</option>
                </select>
              </div>
          </div>
        <div>
        <label class="block text-gray-700 font-medium mb-2">Date</label>
        <div class="relative">
          <input
          type="date"
          class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          min="2025-07-28"
          v-model="bookingDate"
          :min="new Date().toISOString().split('T')[0]"
          />
        </div>
      </div>
      <div>
        <label class="block text-gray-700 font-medium mb-2">Time</label>
        <div class="relative">
          <input
          type="time"
          v-model="bookingTime"
          class="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
    <div class="flex gap-4 mt-8">
      <button
      class="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl hover:bg-gray-300 transition-all duration-200 font-medium"
       @click="closeBookingModal"
      >
        Cancel
      </button>
      <button
       @click="submitBooking"
      class="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 py-3 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 font-medium"
      >
        Confirm Booking
      </button>
    </div>
  </div>
</div>
</div> 
</template>


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
    #webcrumbs .bottom-0 {
        bottom: 0;
    }
    #webcrumbs .left-0 {
        left: 0;
    }
    #webcrumbs .right-0 {
        right: 0;
    }
    #webcrumbs .mx-auto {
        margin-left: auto;
        margin-right: auto;
    }
    #webcrumbs .mb-12 {
        margin-bottom: 48px;
    }
    #webcrumbs .mb-2 {
        margin-bottom: 8px;
    }
    #webcrumbs .mb-3 {
        margin-bottom: 12px;
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
    #webcrumbs .ml-2 {
        margin-left: 8px;
    }
    #webcrumbs .mr-1 {
        margin-right: 4px;
    }
    #webcrumbs .mr-2 {
        margin-right: 8px;
    }
    #webcrumbs .mr-3 {
        margin-right: 12px;
    }
    #webcrumbs .mt-1 {
        margin-top: 4px;
    }
    #webcrumbs .mt-6 {
        margin-top: 24px;
    }
    #webcrumbs .flex {
        display: flex;
    }
    #webcrumbs .grid {
        display: grid;
    }
    #webcrumbs .h-1 {
        height: 4px;
    }
    #webcrumbs .h-10 {
        height: 40px;
    }
    #webcrumbs .h-3 {
        height: 12px;
    }
    #webcrumbs .h-64 {
        height: 256px;
    }
    #webcrumbs .h-80 {
        height: 320px;
    }
    #webcrumbs .h-full {
        height: 100%;
    }
    #webcrumbs .w-1 {
        width: 4px;
    }
    #webcrumbs .w-10 {
        width: 40px;
    }
    #webcrumbs .w-3 {
        width: 12px;
    }
    #webcrumbs .w-72 {
        width: 288px;
    }
    #webcrumbs .w-full {
        width: 100%;
    }
    #webcrumbs .max-w-2xl {
        max-width: 42rem;
    }
    #webcrumbs .max-w-7xl {
        max-width: 80rem;
    }
    #webcrumbs .flex-shrink-0 {
        flex-shrink: 0;
    }
    #webcrumbs .cursor-not-allowed {
        cursor: not-allowed;
    }
    #webcrumbs .cursor-pointer {
        cursor: pointer;
    }
    #webcrumbs .list-disc {
        list-style-type: disc;
    }
    #webcrumbs .grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    #webcrumbs .grid-cols-7 {
        grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    #webcrumbs .flex-row {
        flex-direction: row;
    }
    #webcrumbs .flex-col {
        flex-direction: column;
    }
    #webcrumbs .flex-wrap {
        flex-wrap: wrap;
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
    #webcrumbs .gap-2 {
        gap: 8px;
    }
    #webcrumbs .gap-4 {
        gap: 16px;
    }
    #webcrumbs .gap-6 {
        gap: 24px;
    }
    #webcrumbs .overflow-x-auto {
        overflow-x: auto;
    }
    #webcrumbs .rounded-full {
        border-radius: 9999px;
    }
    #webcrumbs .rounded-lg {
        border-radius: 24px;
    }
    #webcrumbs .rounded-xl {
        border-radius: 36px;
    }
    #webcrumbs .rounded-b-lg {
        border-bottom-left-radius: 24px;
        border-bottom-right-radius: 24px;
    }
    #webcrumbs .border {
        border-width: 1px;
    }
    #webcrumbs .border-gray-200 {
        --tw-border-opacity: 1;
        border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .bg-gray-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-gray-200 {
        --tw-bg-opacity: 1;
        background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-gray-400 {
        --tw-bg-opacity: 1;
        background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-gray-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-primary-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(233 229 255 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-primary-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(243 241 255 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-primary-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(115 65 255 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-primary-600 {
        --tw-bg-opacity: 1;
        background-color: rgb(99 27 255 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-gradient-to-t {
        background-image: linear-gradient(to top, var(--tw-gradient-stops));
    }
    #webcrumbs .from-black\/70 {
        --tw-gradient-from: rgba(0, 0, 0, 0.7) var(--tw-gradient-from-position);
        --tw-gradient-to: transparent var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .to-transparent {
        --tw-gradient-to: transparent var(--tw-gradient-to-position);
    }
    #webcrumbs .object-cover {
        object-fit: cover;
    }
    #webcrumbs .p-2 {
        padding: 8px;
    }
    #webcrumbs .p-4 {
        padding: 16px;
    }
    #webcrumbs .p-5 {
        padding: 20px;
    }
    #webcrumbs .p-6 {
        padding: 24px;
    }
    #webcrumbs .p-8 {
        padding: 32px;
    }
    #webcrumbs .px-3 {
        padding-left: 12px;
        padding-right: 12px;
    }
    #webcrumbs .px-6 {
        padding-left: 24px;
        padding-right: 24px;
    }
    #webcrumbs .px-8 {
        padding-left: 32px;
        padding-right: 32px;
    }
    #webcrumbs .py-1 {
        padding-bottom: 4px;
        padding-top: 4px;
    }
    #webcrumbs .py-3 {
        padding-bottom: 12px;
        padding-top: 12px;
    }
    #webcrumbs .pb-4 {
        padding-bottom: 16px;
    }
    #webcrumbs .pl-5 {
        padding-left: 20px;
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
    #webcrumbs .text-lg {
        font-size: 18px;
        line-height: 27px;
    }
    #webcrumbs .text-sm {
        font-size: 14px;
        line-height: 21px;
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
    #webcrumbs .text-gray-300 {
        --tw-text-opacity: 1;
        color: rgb(209 213 219 / var(--tw-text-opacity, 1));
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
    #webcrumbs .text-primary-600 {
        --tw-text-opacity: 1;
        color: rgb(99 27 255 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-primary-700 {
        --tw-text-opacity: 1;
        color: rgb(97 27 248 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-white {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-white\/80 {
        color: hsla(0, 0%, 100%, 0.8);
    }
    #webcrumbs .text-yellow-400 {
        --tw-text-opacity: 1;
        color: rgb(250 204 21 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .opacity-0 {
        opacity: 0;
    }
    #webcrumbs .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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
    #webcrumbs .transition-opacity {
        transition-duration: 0.15s;
        transition-property: opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs .transition-shadow {
        transition-duration: 0.15s;
        transition-property: box-shadow;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs .duration-300 {
        transition-duration: 0.3s;
    }
    #webcrumbs {
        font-family: Open Sans !important;
        font-size: 16px !important;
    }
    #webcrumbs :is(.bg-primary-50) {
        color: rgba(0, 0, 0, 0.9) !important;
    }
    #webcrumbs :is(.bg-primary-100) {
        color: rgba(0, 0, 0, 0.9) !important;
    }
    #webcrumbs :is(.bg-primary-500) {
        color: hsla(0, 0%, 100%, 0.9) !important;
    }
    #webcrumbs :is(.bg-primary-600) {
        color: hsla(0, 0%, 100%, 0.9) !important;
    }
    #webcrumbs .hover\:bg-gray-100:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:bg-primary-50:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(243 241 255 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:bg-primary-700:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(97 27 248 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:text-primary-700:hover {
        --tw-text-opacity: 1;
        color: rgb(97 27 248 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .hover\:shadow-lg:hover {
        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    }
    #webcrumbs .hover\:shadow-lg:hover,
    #webcrumbs .hover\:shadow-md:hover {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .hover\:shadow-md:hover {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    }
    #webcrumbs :is(.group:hover .group-hover\:opacity-100) {
        opacity: 1;
    }
    #webcrumbs :is(.group:hover .group-hover\:brightness-90) {
        --tw-brightness: brightness(0.9);
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate)
            var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    }
    @media (min-width: 768px) {
        #webcrumbs .md\:w-1\/3 {
            width: 33.333333%;
        }
        #webcrumbs .md\:w-2\/3 {
            width: 66.666667%;
        }
        #webcrumbs .md\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        #webcrumbs .md\:flex-row {
            flex-direction: row;
        }
        #webcrumbs .md\:p-8 {
            padding: 32px;
        }
    }
    @media (min-width: 1024px) {
        #webcrumbs .lg\:grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }
    </style>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { apiFetch } from '@/config'

const mua = ref(null)
const services = ref([])
const reviews = ref([])
const route = useRoute()
const router = useRouter()
const portfolioScrollPosition = ref(0)
const portfolioContainer = ref(null)

// Calendar state
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const bookedDates = ref([])
const availableDates = ref([])

// Booking modal state
const bookingModalVisible = ref(false)
const bookingMua = ref(null)
const bookingDate = ref('')
const bookingTime = ref('')
const bookingServiceId = ref(null)
const bookingServices = ref([])

// Computed properties for calendar
const currentMonthName = computed(() => {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ]
  return months[currentMonth.value]
})

const calendarDays = computed(() => {
  const days = []
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())
  
  const endDate = new Date(lastDay)
  endDate.setDate(endDate.getDate() + (6 - lastDay.getDay()))
  
  const currentDate = new Date(startDate)
  
  while (currentDate <= endDate) {
    const dateStr = currentDate.toISOString().split('T')[0]
    const isCurrentMonth = currentDate.getMonth() === currentMonth.value
    const day = currentDate.getDate()
    
    // Check if date is available (in MUA's available dates)
    const isAvailable = isCurrentMonth && availableDates.value.includes(dateStr)
    
    // Check if date is booked (has bookings)
    const isBooked = isCurrentMonth && bookedDates.value.includes(dateStr)
    
    days.push({
      date: dateStr,
      day,
      isCurrentMonth,
      isAvailable,
      isBooked
    })
    
    currentDate.setDate(currentDate.getDate() + 1)
  }
  
  return days
})

// Format number to Rupiah currency
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID').format(number)
}

// Format date to Indonesian format (e.g., "12 Oktober 2023")
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('id-ID', options)
}

// Format specializations array into a readable string
function formatSpecializations(specializations) {
  if (!specializations || !Array.isArray(specializations) || specializations.length === 0) {
    return 'Specialization not specified'
  }
  return specializations.join(', ')
}

// Calculate maximum scroll position for portfolio
const maxScroll = computed(() => {
  if (!portfolioContainer.value) return 0
  const containerWidth = portfolioContainer.value.offsetWidth
  const totalWidth = services.value.length * 288 + (services.value.length - 1) * 16
  return Math.max(0, totalWidth - containerWidth)
})

// Displayed services (first 4 items)
const displayedServices = computed(() => {
  return services.value.slice(0, 4)
})

// Scroll portfolio left or right
function scrollPortfolio(direction) {
  const container = portfolioContainer.value
  if (!container) return
  
  const scrollAmount = 288 + 16 // width of one item + gap
  const containerWidth = container.offsetWidth
  
  if (direction === 'left') {
    portfolioScrollPosition.value = Math.max(0, portfolioScrollPosition.value - scrollAmount)
  } else {
    portfolioScrollPosition.value = Math.min(maxScroll.value, portfolioScrollPosition.value + scrollAmount)
  }
}

// Calendar navigation
function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
  fetchAvailabilityData()
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
  fetchAvailabilityData()
}

// Fetch availability data for current month
async function fetchAvailabilityData() {
  if (!mua.value) return
  
  try {
    // Fetch booked dates for the current month
    const startDate = new Date(currentYear.value, currentMonth.value, 1).toISOString().split('T')[0]
    const endDate = new Date(currentYear.value, currentMonth.value + 1, 0).toISOString().split('T')[0]
    
    // Fetch booked dates from backend
    const bookingsResponse = await apiFetch(`/customer/bookings?mua_id=${mua.value.id}&start_date=${startDate}&end_date=${endDate}`)
    const bookings = bookingsResponse.data || bookingsResponse
    
    // Extract booked dates
    bookedDates.value = bookings.map(booking => booking.date)
    
    // Fetch available dates from backend
    const availabilityResponse = await apiFetch(`/mua/${mua.value.id}/availability?date=${startDate}`)
    const availability = availabilityResponse.data || availabilityResponse
    
    // Extract available dates
    availableDates.value = availability.available_slots || []
    
    // Get MUA's available days from profile
    const muaAvailableDays = mua.value.mua_profile?.available_days || []
    
    // Generate available dates based on MUA's available days
    const currentDate = new Date(currentYear.value, currentMonth.value, 1)
    const lastDate = new Date(currentYear.value, currentMonth.value + 1, 0)
    
    while (currentDate <= lastDate) {
      const dayOfWeek = currentDate.getDay() // 0 = Sunday, 1 = Monday, etc.
      const dateStr = currentDate.toISOString().split('T')[0]
      
      // Check if this day is in MUA's available days and not already booked
      if (muaAvailableDays.includes(dayOfWeek.toString()) && !bookedDates.value.includes(dateStr)) {
        availableDates.value.push(dateStr)
      }
      
      currentDate.setDate(currentDate.getDate() + 1)
    }
  } catch (error) {
    console.error('Failed to fetch availability data:', error)
  }
}

async function openBookingModal(mua, date = null) {
  bookingMua.value = mua
  bookingModalVisible.value = true
  bookingDate.value = date || ''
  bookingTime.value = ''
  bookingServiceId.value = null
  try {
    const token = localStorage.getItem('token')
    const services = await apiFetch(`/mua/${mua.user?.id || mua.id}/services`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    bookingServices.value = services
    console.log('✅ services fetched:', services)
  } catch (err) {
    console.error('Failed to fetch services:', err)
    bookingServices.value = []
  }
}

function closeBookingModal() {
  bookingModalVisible.value = false
  bookingMua.value = null
  bookingDate.value = ''
  bookingTime.value = ''
  bookingServiceId.value = null
  bookingServices.value = []
}

// Submit booking
async function submitBooking() {
  try {
    const response = await apiFetch('/customer/bookings', {
      method: 'POST',
      body: JSON.stringify({
        mua_id: bookingMua.value.id,
        service_id: bookingServiceId.value,
        date: bookingDate.value,
        time: bookingTime.value
      }),
    })
    
    // Close the modal
    closeBookingModal()
    
    // Show success message
    alert('Booking berhasil dibuat!')
    
    // Redirect to the booking page with the new booking ID
    router.push(`/booking/${response.data.id}`)
  } catch (error) {
    console.error('Failed to create booking:', error)
    alert('Failed to create booking. Please try again.')
  }
}

// Initiate booking process
const initiateBooking = async () => {
  try {
    // Create a new booking with the MUA ID
    const response = await apiFetch('/customer/bookings', {
      method: 'POST',
      body: JSON.stringify({
        mua_id: mua.value.id,
        service_id: services.value[0]?.id || null, // Use the first service or null if no services
        date: new Date().toISOString().split('T')[0], // Today's date as default
        time: '09:00' // Default time
      }),
    })
    
    // Redirect to the booking page with the new booking ID
    router.push(`/booking/${response.data.id}`)
  } catch (error) {
    console.error('Failed to create booking:', error)
    alert('Failed to initiate booking. Please try again.')
  }
}

onMounted(async () => {
  const muaId = route.params.id
  try {
    // Fetch MUA profile
    const profileData = await apiFetch(`/mua/${muaId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    mua.value = profileData.data || profileData
    console.log('✅ MUA profile fetched:', mua.value)
    
    // Fetch MUA services
    const servicesData = await apiFetch(`/mua/${muaId}/services`, {
      headers: {
        Accept: 'application/json',
      },
    })
    services.value = servicesData.data || servicesData
    console.log('✅ MUA services fetched:', services.value)
    
    // Fetch MUA reviews
    const reviewsData = await apiFetch(`/mua/${muaId}/reviews`, {
      headers: {
        Accept: 'application/json',
      },
    })
    reviews.value = reviewsData.data || reviewsData
    console.log('✅ MUA reviews fetched:', reviews.value)
    
    // Fetch availability data
    fetchAvailabilityData()
  } catch (err) {
    console.error('❌ Failed to fetch MUA data:', err)
  }
})
</script>
