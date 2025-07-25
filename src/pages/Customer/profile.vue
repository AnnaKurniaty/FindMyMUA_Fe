<template
    ><div id="webcrumbs">
        <div class="bg-gray-50 min-h-screen p-4 md:p-8">
            <div class="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div class="md:flex">
                    <div class="md:w-1/3 bg-gradient-to-b from-primary-50 to-primary-100 p-6">
                        <div class="flex flex-col items-center">
                            <h1 class="text-2xl font-bold mt-2">Sofia Anderson</h1>
                            <p class="text-gray-600 mb-4">Professional Makeup Artist</p>
                            <p class="text-sm text-gray-500 mb-6 text-center">User ID: MUA78945612</p>
                            <div class="w-full space-y-3">
                                <button
                                    class="w-full py-2 px-4 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
                                >
                                    <span class="material-symbols-outlined">edit</span> Edit Profile
                                </button>
                                <button
                                    class="w-full py-2 px-4 border border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2"
                                >
                                    <span class="material-symbols-outlined">share</span> Share Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-2/3 p-6">
                        <div class="mb-8">
                            <div class="relative group mb-6 flex justify-center">
                                <div
                                    class="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 transition-transform group-hover:scale-105"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                                        alt="Profile Photo"
                                        class="w-full h-full object-cover"
                                        keywords="woman, portrait, professional, makeup artist"
                                    />
                                </div>
                                <div
                                    class="absolute bottom-4 right-0 bg-primary-500 p-2 rounded-full shadow-lg cursor-pointer hover:bg-primary-600 transition-colors"
                                >
                                    <span class="material-symbols-outlined text-white">photo_camera</span>
                                </div>
                            </div>
                            <h2 class="text-xl font-semibold border-b border-gray-200 pb-2 mb-4 flex items-center">
                                <span class="material-symbols-outlined mr-2">contact_mail</span> Contact Information
                            </h2>
                            <div class="space-y-3">
                                <div class="flex items-center">
                                    <span class="material-symbols-outlined text-primary-500 mr-3">person</span>
                                    <div class="flex flex-col">
                                        <span class="text-sm text-gray-600">Full Name</span>
                                        <span class="text-gray-800 font-medium">Sofia Anderson</span>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <span class="material-symbols-outlined text-primary-500 mr-3">mail</span>
                                    <div class="flex flex-col">
                                        <span class="text-sm text-gray-600">Email Address</span>
                                        <span class="text-gray-800 font-medium">sofia.anderson@example.com</span>
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <span class="material-symbols-outlined text-primary-500 mr-3">location_on</span>
                                    <div class="flex flex-col">
                                        <span class="text-sm text-gray-600">Address</span>
                                        <span class="text-gray-800 font-medium"
                                            >123 Makeup Avenue, Manhattan, NY 10001</span
                                        >
                                    </div>
                                </div>
                                <div class="flex items-center">
                                    <span class="material-symbols-outlined text-primary-500 mr-3">smartphone</span>
                                    <div class="flex flex-col">
                                        <span class="text-sm text-gray-600">Phone Number</span>
                                        <span class="text-gray-800 font-medium">+1 (212) 555-1234</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                                <h3 class="text-lg font-medium mb-3 flex items-center">
                                    <span class="material-symbols-outlined mr-2">workspace_premium</span> User
                                    Information
                                </h3>
                                <ul class="space-y-2">
                                    <li class="flex items-start">
                                        <span class="material-symbols-outlined text-primary-500 mr-2">badge</span>
                                        <span class="text-gray-700 font-medium">User ID:</span>
                                        <span class="ml-2">MUA78945612</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="material-symbols-outlined text-primary-500 mr-2">palette</span>
                                        <span class="text-gray-700 font-medium">Skin Tone:</span>
                                        <span class="ml-2">Medium with warm undertones</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="material-symbols-outlined text-primary-500 mr-2">water_drop</span>
                                        <span class="text-gray-700 font-medium">Skin Type:</span>
                                        <span class="ml-2">Combination</span>
                                    </li>
                                    <li class="flex items-start">
                                        <span class="material-symbols-outlined text-primary-500 mr-2"
                                            >health_and_safety</span
                                        >
                                        <span class="text-gray-700 font-medium">Skin Issues:</span>
                                        <span class="ml-2">Occasional breakouts, some hyperpigmentation</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                                <h3 class="text-lg font-medium mb-3 flex items-center">
                                    <span class="material-symbols-outlined mr-2">history</span> Skincare History &amp;
                                    Allergies
                                </h3>
                                <div class="mb-3">
                                    <h4 class="font-medium text-gray-700">Skincare History:</h4>
                                    <p class="text-sm mt-1">
                                        Using retinol for 2 years, vitamin C serum for hyperpigmentation, and salicylic
                                        acid treatments for occasional breakouts. Previous professional treatments
                                        include microdermabrasion and chemical peels.
                                    </p>
                                </div>
                                <div>
                                    <h4 class="font-medium text-gray-700">Allergies:</h4>
                                    <div class="flex flex-wrap gap-2 mt-1">
                                        <span
                                            class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors"
                                            >Fragrance</span
                                        >
                                        <span
                                            class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors"
                                            >Lanolin</span
                                        >
                                        <span
                                            class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors"
                                            >Formaldehyde</span
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
                                <h3 class="text-lg font-medium mb-3 flex items-center">
                                    <span class="material-symbols-outlined mr-2">brush</span> Makeup Preferences
                                </h3>
                                <div class="space-y-2">
                                    <div class="flex justify-between">
                                        <span class="text-gray-700">Coverage Level:</span> <span>Medium to Full</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-700">Finish:</span> <span>Natural to Dewy</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-700">Product Types:</span>
                                        <span>Cruelty-free, Vegan preferred</span>
                                    </div>
                                    <div class="mt-3">
                                        <h4 class="font-medium text-gray-700">Favorite Looks:</h4>
                                        <div class="flex flex-wrap gap-2 mt-1">
                                            <span
                                                class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors"
                                                >Soft Glam</span
                                            >
                                            <span
                                                class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors"
                                                >Natural Glow</span
                                            >
                                            <span
                                                class="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors"
                                                >Editorial</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="md:col-span-2 bg-gray-50 p-6 rounded-lg mt-4 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h3 class="text-xl font-semibold mb-6 flex items-center">
                                    <span class="material-symbols-outlined mr-2">edit_document</span> Edit Profile
                                    Information
                                </h3>
                                <form class="space-y-6">
                                    <div class="grid md:grid-cols-2 gap-6">
                                        <div class="space-y-2">
                                            <label for="fullName" class="block text-sm font-medium text-gray-700"
                                                >Full Name</label
                                            >
                                            <input
                                                type="text"
                                                id="fullName"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                value="Sofia Anderson"
                                            />
                                        </div>
                                        <div class="space-y-2">
                                            <label for="email" class="block text-sm font-medium text-gray-700"
                                                >Email Address</label
                                            >
                                            <input
                                                type="email"
                                                id="email"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                value="sofia.anderson@example.com"
                                            />
                                        </div>
                                        <div class="space-y-2">
                                            <label for="phone" class="block text-sm font-medium text-gray-700"
                                                >Phone Number</label
                                            >
                                            <input
                                                type="tel"
                                                id="phone"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                value="+1 (212) 555-1234"
                                            />
                                        </div>
                                        <div class="space-y-2">
                                            <label for="address" class="block text-sm font-medium text-gray-700"
                                                >Address</label
                                            >
                                            <input
                                                type="text"
                                                id="address"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                value="123 Makeup Avenue, Manhattan, NY 10001"
                                            />
                                        </div>
                                        <div class="space-y-2">
                                            <label for="skinTone" class="block text-sm font-medium text-gray-700"
                                                >Skin Tone</label
                                            >
                                            <select
                                                id="skinTone"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                            >
                                                <option value="light">Light with cool undertones</option>
                                                <option value="lightWarm">Light with warm undertones</option>
                                                <option value="medium" selected="">Medium with warm undertones</option>
                                                <option value="mediumCool">Medium with cool undertones</option>
                                                <option value="deep">Deep with warm undertones</option>
                                                <option value="deepCool">Deep with cool undertones</option>
                                            </select>
                                        </div>
                                        <div class="space-y-2">
                                            <label for="skinType" class="block text-sm font-medium text-gray-700"
                                                >Skin Type</label
                                            >
                                            <select
                                                id="skinType"
                                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                            >
                                                <option value="dry">Dry</option>
                                                <option value="oily">Oily</option>
                                                <option value="combination" selected="">Combination</option>
                                                <option value="normal">Normal</option>
                                                <option value="sensitive">Sensitive</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <label for="skinIssues" class="block text-sm font-medium text-gray-700"
                                            >Skin Issues</label
                                        >
                                        <textarea
                                            id="skinIssues"
                                            rows="2"
                                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                        >
Occasional breakouts, some hyperpigmentation</textarea
                                        >
                                    </div>
                                    <div class="space-y-2">
                                        <label for="skinHistory" class="block text-sm font-medium text-gray-700"
                                            >Skincare History</label
                                        >
                                        <textarea
                                            id="skinHistory"
                                            rows="3"
                                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                        >
Using retinol for 2 years, vitamin C serum for hyperpigmentation, and salicylic acid treatments for occasional breakouts. Previous professional treatments include microdermabrasion and chemical peels.</textarea
                                        >
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Allergies</label>
                                        <div class="flex flex-wrap gap-3">
                                            <div class="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="allergyFragrance"
                                                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                                    checked=""
                                                />
                                                <label for="allergyFragrance" class="ml-2 text-sm text-gray-700"
                                                    >Fragrance</label
                                                >
                                            </div>
                                            <div class="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="allergyLanolin"
                                                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                                    checked=""
                                                />
                                                <label for="allergyLanolin" class="ml-2 text-sm text-gray-700"
                                                    >Lanolin</label
                                                >
                                            </div>
                                            <div class="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="allergyFormaldehyde"
                                                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                                    checked=""
                                                />
                                                <label for="allergyFormaldehyde" class="ml-2 text-sm text-gray-700"
                                                    >Formaldehyde</label
                                                >
                                            </div>
                                            <div class="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="allergyParabens"
                                                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                                />
                                                <label for="allergyParabens" class="ml-2 text-sm text-gray-700"
                                                    >Parabens</label
                                                >
                                            </div>
                                            <div class="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="allergySulfates"
                                                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                                />
                                                <label for="allergySulfates" class="ml-2 text-sm text-gray-700"
                                                    >Sulfates</label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700"
                                            >Makeup Preferences</label
                                        >
                                        <div class="grid md:grid-cols-2 gap-4">
                                            <div class="space-y-2">
                                                <label for="coverage" class="block text-sm text-gray-700"
                                                    >Coverage Level</label
                                                >
                                                <select
                                                    id="coverage"
                                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                >
                                                    <option value="sheer">Sheer</option>
                                                    <option value="light">Light</option>
                                                    <option value="medium">Medium</option>
                                                    <option value="mediumFull" selected="">Medium to Full</option>
                                                    <option value="full">Full</option>
                                                </select>
                                            </div>
                                            <div class="space-y-2">
                                                <label for="finish" class="block text-sm text-gray-700">Finish</label>
                                                <select
                                                    id="finish"
                                                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                                >
                                                    <option value="matte">Matte</option>
                                                    <option value="semiMatte">Semi-Matte</option>
                                                    <option value="naturalDewy" selected="">Natural to Dewy</option>
                                                    <option value="dewy">Dewy</option>
                                                    <option value="luminous">Luminous</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="block text-sm font-medium text-gray-700">Favorite Looks</label>
                                        <div class="flex flex-wrap gap-3">
                                            <div class="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="lookSoftGlam"
                                                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                                    checked=""
                                                />
                                                <label for="lookSoftGlam" class="ml-2 text-sm text-gray-700"
                                                    >Soft Glam</label
                                                >
                                            </div>
                                            <div class="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="lookNaturalGlow"
                                                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                                    checked=""
                                                />
                                                <label for="lookNaturalGlow" class="ml-2 text-sm text-gray-700"
                                                    >Natural Glow</label
                                                >
                                            </div>
                                            <div class="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="lookEditorial"
                                                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                                    checked=""
                                                />
                                                <label for="lookEditorial" class="ml-2 text-sm text-gray-700"
                                                    >Editorial</label
                                                >
                                            </div>
                                            <div class="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="lookSmokeyEye"
                                                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                                />
                                                <label for="lookSmokeyEye" class="ml-2 text-sm text-gray-700"
                                                    >Smokey Eye</label
                                                >
                                            </div>
                                            <div class="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="lookGlitter"
                                                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                                                />
                                                <label for="lookGlitter" class="ml-2 text-sm text-gray-700"
                                                    >Glitter</label
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-end space-x-4 pt-4">
                                        <button
                                            type="button"
                                            class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            class="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
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
    #webcrumbs .bottom-4 {
        bottom: 16px;
    }
    #webcrumbs .right-0 {
        right: 0;
    }
    #webcrumbs .mx-auto {
        margin-left: auto;
        margin-right: auto;
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
    #webcrumbs .ml-2 {
        margin-left: 8px;
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
    #webcrumbs .mt-2 {
        margin-top: 8px;
    }
    #webcrumbs .mt-3 {
        margin-top: 12px;
    }
    #webcrumbs .mt-4 {
        margin-top: 16px;
    }
    #webcrumbs .block {
        display: block;
    }
    #webcrumbs .flex {
        display: flex;
    }
    #webcrumbs .grid {
        display: grid;
    }
    #webcrumbs .h-4 {
        height: 16px;
    }
    #webcrumbs .h-48 {
        height: 192px;
    }
    #webcrumbs .h-full {
        height: 100%;
    }
    #webcrumbs .min-h-screen {
        min-height: 100vh;
    }
    #webcrumbs .w-4 {
        width: 16px;
    }
    #webcrumbs .w-48 {
        width: 192px;
    }
    #webcrumbs .w-full {
        width: 100%;
    }
    #webcrumbs .max-w-6xl {
        max-width: 72rem;
    }
    #webcrumbs .cursor-pointer {
        cursor: pointer;
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
    #webcrumbs .justify-end {
        justify-content: flex-end;
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
    #webcrumbs .gap-3 {
        gap: 12px;
    }
    #webcrumbs .gap-4 {
        gap: 16px;
    }
    #webcrumbs .gap-6 {
        gap: 24px;
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
    #webcrumbs :is(.space-y-3 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(12px * var(--tw-space-y-reverse));
        margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs :is(.space-y-6 > :not([hidden]) ~ :not([hidden])) {
        --tw-space-y-reverse: 0;
        margin-bottom: calc(24px * var(--tw-space-y-reverse));
        margin-top: calc(24px * (1 - var(--tw-space-y-reverse)));
    }
    #webcrumbs .overflow-hidden {
        overflow: hidden;
    }
    #webcrumbs .rounded {
        border-radius: 12px;
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
    #webcrumbs .border {
        border-width: 1px;
    }
    #webcrumbs .border-4 {
        border-width: 4px;
    }
    #webcrumbs .border-b {
        border-bottom-width: 1px;
    }
    #webcrumbs .border-gray-200 {
        --tw-border-opacity: 1;
        border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .border-gray-300 {
        --tw-border-opacity: 1;
        border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .border-primary-500 {
        --tw-border-opacity: 1;
        border-color: rgb(214 33 49 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .border-white {
        --tw-border-opacity: 1;
        border-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .bg-gray-50 {
        --tw-bg-opacity: 1;
        background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-primary-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(251 227 227 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-primary-500 {
        --tw-bg-opacity: 1;
        background-color: rgb(214 33 49 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-red-100 {
        --tw-bg-opacity: 1;
        background-color: rgb(254 226 226 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .bg-gradient-to-b {
        background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    }
    #webcrumbs .from-primary-50 {
        --tw-gradient-from: #fef1f1 var(--tw-gradient-from-position);
        --tw-gradient-to: hsla(0, 87%, 97%, 0) var(--tw-gradient-to-position);
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    }
    #webcrumbs .to-primary-100 {
        --tw-gradient-to: #fbe3e3 var(--tw-gradient-to-position);
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
    #webcrumbs .p-6 {
        padding: 24px;
    }
    #webcrumbs .px-3 {
        padding-left: 12px;
        padding-right: 12px;
    }
    #webcrumbs .px-4 {
        padding-left: 16px;
        padding-right: 16px;
    }
    #webcrumbs .px-6 {
        padding-left: 24px;
        padding-right: 24px;
    }
    #webcrumbs .py-1 {
        padding-bottom: 4px;
        padding-top: 4px;
    }
    #webcrumbs .py-2 {
        padding-top: 8px;
    }
    #webcrumbs .pb-2,
    #webcrumbs .py-2 {
        padding-bottom: 8px;
    }
    #webcrumbs .pt-4 {
        padding-top: 16px;
    }
    #webcrumbs .text-center {
        text-align: center;
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
    #webcrumbs .font-semibold {
        font-weight: 600;
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
    #webcrumbs .text-gray-800 {
        --tw-text-opacity: 1;
        color: rgb(31 41 55 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-primary-500 {
        --tw-text-opacity: 1;
        color: rgb(214 33 49 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-primary-600 {
        --tw-text-opacity: 1;
        color: rgb(182 19 29 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-primary-700 {
        --tw-text-opacity: 1;
        color: rgb(148 16 22 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-red-700 {
        --tw-text-opacity: 1;
        color: rgb(185 28 28 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .text-white {
        --tw-text-opacity: 1;
        color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    }
    #webcrumbs .shadow-lg {
        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    }
    #webcrumbs .shadow-lg,
    #webcrumbs .shadow-md {
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    }
    #webcrumbs .shadow-sm {
        --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .transition-colors {
        transition-duration: 0.15s;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs .transition-shadow {
        transition-duration: 0.15s;
        transition-property: box-shadow;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs .transition-transform {
        transition-duration: 0.15s;
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    #webcrumbs {
        font-family: Open Sans !important;
        font-size: 16px !important;
    }
    #webcrumbs :is(.bg-primary-100) {
        color: rgba(0, 0, 0, 0.9) !important;
    }
    #webcrumbs :is(.bg-primary-500) {
        color: hsla(0, 0%, 100%, 0.9) !important;
    }
    #webcrumbs .hover\:bg-gray-100:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:bg-primary-200:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(247 192 195 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:bg-primary-50:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(254 241 241 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:bg-primary-600:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(182 19 29 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:bg-red-200:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(254 202 202 / var(--tw-bg-opacity, 1));
    }
    #webcrumbs .hover\:shadow-md:hover {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
    #webcrumbs .focus\:border-primary-500:focus {
        --tw-border-opacity: 1;
        border-color: rgb(214 33 49 / var(--tw-border-opacity, 1));
    }
    #webcrumbs .focus\:ring-2:focus {
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    }
    #webcrumbs .focus\:ring-primary-500:focus {
        --tw-ring-opacity: 1;
        --tw-ring-color: rgb(214 33 49 / var(--tw-ring-opacity, 1));
    }
    #webcrumbs :is(.group:hover .group-hover\:scale-105) {
        --tw-scale-x: 1.05;
        --tw-scale-y: 1.05;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
            skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
    @media (min-width: 768px) {
        #webcrumbs .md\:col-span-2 {
            grid-column: span 2 / span 2;
        }
        #webcrumbs .md\:flex {
            display: flex;
        }
        #webcrumbs .md\:w-1\/3 {
            width: 33.333333%;
        }
        #webcrumbs .md\:w-2\/3 {
            width: 66.666667%;
        }
        #webcrumbs .md\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        #webcrumbs .md\:p-8 {
            padding: 32px;
        }
    }
</style>
