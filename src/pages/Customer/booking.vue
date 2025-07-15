<template
    > 
                <div class="flex-1 space-y-6">
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-2xl font-bold text-gray-800">Personal Skin Profile Confirmation</h2>
                            <span class="material-symbols-outlined text-primary-500 text-2xl"
                                >face_retouching_natural</span
                            >
                        </div>
                        <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                            <div class="flex items-center gap-2 mb-2">
                                <span class="material-symbols-outlined text-amber-600">info</span>
                                <span class="font-medium text-amber-800">Profile Review Required</span>
                            </div>
                            <p class="text-amber-700 text-sm">
                                Please review and confirm your skin profile information before proceeding with the
                                booking.
                            </p>
                        </div>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Skin Type</label>
                                    <div class="flex gap-2">
                                        <button
                                            class="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium"
                                        >
                                            Oily
                                        </button>
                                        <button
                                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                        >
                                            Dry
                                        </button>
                                        <button
                                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                        >
                                            Combination
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Skin Sensitivity</label>
                                    <div class="flex gap-2">
                                        <button
                                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                        >
                                            Sensitive
                                        </button>
                                        <button
                                            class="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium"
                                        >
                                            Normal
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Skin Tone</label>
                                    <div class="flex gap-2">
                                        <div
                                            class="w-8 h-8 bg-yellow-200 rounded-full cursor-pointer ring-2 ring-primary-500"
                                        ></div>
                                        <div
                                            class="w-8 h-8 bg-yellow-300 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all"
                                        ></div>
                                        <div
                                            class="w-8 h-8 bg-orange-300 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all"
                                        ></div>
                                        <div
                                            class="w-8 h-8 bg-orange-400 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all"
                                        ></div>
                                        <div
                                            class="w-8 h-8 bg-yellow-700 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all"
                                        ></div>
                                        <div
                                            class="w-8 h-8 bg-yellow-800 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400 transition-all"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2"
                                        >Makeup Style Preference</label
                                    >
                                    <div class="flex gap-2 flex-wrap">
                                        <button
                                            class="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium"
                                        >
                                            Natural
                                        </button>
                                        <button
                                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                        >
                                            Glam
                                        </button>
                                        <button
                                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                        >
                                            Bold
                                        </button>
                                        <button
                                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                        >
                                            Dewy
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2"
                                        >Any Skin Concerns</label
                                    >
                                    <div class="flex gap-2 flex-wrap">
                                        <button
                                            class="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium"
                                        >
                                            Acne
                                        </button>
                                        <button
                                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                        >
                                            Redness
                                        </button>
                                        <button
                                            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                        >
                                            Hyperpigmentation
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end gap-4 mt-6">
                            <button
                                class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                            >
                                Edit Profile
                            </button>
                            <button
                                class="px-6 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                            >
                                Confirm Profile
                            </button>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-2xl font-bold text-gray-800">Booking Confirmation</h2>
                            <span class="material-symbols-outlined text-primary-500 text-2xl">event_available</span>
                        </div>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="space-y-6">
                                <div class="border rounded-lg p-4">
                                    <h3 class="font-semibold text-gray-800 mb-3">Booking Summary</h3>
                                    <div class="space-y-2">
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">MUA:</span>
                                            <span class="font-medium">Sarah Johnson</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Date:</span>
                                            <span class="font-medium">March 15, 2024</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Time:</span>
                                            <span class="font-medium">2:00 PM</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Service:</span>
                                            <span class="font-medium">Bridal Makeup</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600">Duration:</span>
                                            <span class="font-medium">2 hours</span>
                                        </div>
                                        <div class="border-t pt-2 mt-2">
                                            <div class="flex justify-between text-lg font-semibold">
                                                <span>Total Price:</span> <span class="text-primary-600">$250.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border rounded-lg p-4">
                                    <h3 class="font-semibold text-gray-800 mb-3">Payment Options</h3>
                                    <div class="space-y-3">
                                        <label class="flex items-center gap-3 cursor-pointer">
                                            <input type="radio" name="payment" class="w-4 h-4 text-primary-600" />
                                            <span class="font-medium">Deposit Payment (50%)</span>
                                            <span class="text-gray-600">- $125.00</span>
                                        </label>
                                        <label class="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="payment"
                                                class="w-4 h-4 text-primary-600"
                                                checked=""
                                            />
                                            <span class="font-medium">Full Payment</span>
                                            <span class="text-gray-600">- $250.00</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-6">
                                <div class="border rounded-lg p-4">
                                    <h3 class="font-semibold text-gray-800 mb-3">Cancellation Policy</h3>
                                    <div class="space-y-2 text-sm text-gray-600">
                                        <p>• 48+ hours: Full refund</p>
                                        <p>• 24-48 hours: 50% refund</p>
                                        <p>• Less than 24 hours: No refund</p>
                                        <p>• Emergency cancellations will be reviewed case by case</p>
                                    </div>
                                </div>
                                <div class="border rounded-lg p-4">
                                    <h3 class="font-semibold text-gray-800 mb-3">Important Notes</h3>
                                    <div class="space-y-2 text-sm text-gray-600">
                                        <p>• Please arrive 15 minutes early</p>
                                        <p>• Bring reference photos if desired</p>
                                        <p>• Skin should be clean and moisturized</p>
                                        <p>• Hair should be styled before makeup</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end gap-4 mt-6">
                            <button
                                class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                            >
                                Back
                            </button>
                            <button
                                class="px-6 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl shadow-lg p-8">
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-2xl font-bold text-gray-800">Payment</h2>
                            <span class="material-symbols-outlined text-primary-500 text-2xl">payment</span>
                        </div>
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="space-y-6">
                                <div class="border rounded-lg p-4">
                                    <h3 class="font-semibold text-gray-800 mb-4">Payment Amount</h3>
                                    <div class="bg-gray-50 rounded-lg p-4">
                                        <div class="text-center">
                                            <p class="text-gray-600 mb-2">Total to Pay</p>
                                            <p class="text-3xl font-bold text-primary-600">$250.00</p>
                                            <p class="text-sm text-gray-500 mt-1">Full Payment Selected</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="border rounded-lg p-4">
                                    <h3 class="font-semibold text-gray-800 mb-4">Payment Method</h3>
                                    <div class="space-y-3">
                                        <label
                                            class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                                        >
                                            <input
                                                type="radio"
                                                name="method"
                                                class="w-4 h-4 text-primary-600"
                                                checked=""
                                            />
                                            <div class="flex items-center gap-3">
                                                <span class="material-symbols-outlined text-blue-600"
                                                    >account_balance_wallet</span
                                                >
                                                <span class="font-medium">E-Wallet</span>
                                            </div>
                                        </label>
                                        <label
                                            class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                                        >
                                            <input type="radio" name="method" class="w-4 h-4 text-primary-600" />
                                            <div class="flex items-center gap-3">
                                                <span class="material-symbols-outlined text-green-600"
                                                    >account_balance</span
                                                >
                                                <span class="font-medium">Bank Transfer</span>
                                            </div>
                                        </label>
                                        <label
                                            class="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                                        >
                                            <input type="radio" name="method" class="w-4 h-4 text-primary-600" />
                                            <div class="flex items-center gap-3">
                                                <span class="material-symbols-outlined text-purple-600"
                                                    >credit_card</span
                                                >
                                                <span class="font-medium">Credit/Debit Card</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="space-y-6">
                                <div class="border rounded-lg p-4">
                                    <h3 class="font-semibold text-gray-800 mb-4">E-Wallet Options</h3>
                                    <div class="grid grid-cols-2 gap-3">
                                        <button
                                            class="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <img
                                                src="https://img.icons8.com/color/24/000000/gopay.png"
                                                alt="GoPay"
                                                keywords="gopay, payment, ewallet"
                                            />
                                            <span class="font-medium">GoPay</span>
                                        </button>
                                        <button
                                            class="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <img
                                                src="https://img.icons8.com/color/24/000000/dana.png"
                                                alt="Dana"
                                                keywords="dana, payment, ewallet"
                                            />
                                            <span class="font-medium">Dana</span>
                                        </button>
                                        <button
                                            class="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <img
                                                src="https://img.icons8.com/color/24/000000/ovo.png"
                                                alt="OVO"
                                                keywords="ovo, payment, ewallet"
                                            />
                                            <span class="font-medium">OVO</span>
                                        </button>
                                        <button
                                            class="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <img
                                                src="https://img.icons8.com/color/24/000000/shopeepay.png"
                                                alt="ShopeePay"
                                                keywords="shopeepay, payment, ewallet"
                                            />
                                            <span class="font-medium">ShopeePay</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="border rounded-lg p-4">
                                    <h3 class="font-semibold text-gray-800 mb-4">Upload Payment Proof</h3>
                                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                        <span class="material-symbols-outlined text-gray-400 text-3xl mb-2"
                                            >cloud_upload</span
                                        >
                                        <p class="text-gray-600 mb-2">Drag &amp; drop or click to upload</p>
                                        <p class="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                                        <input type="file" class="hidden" />
                                        <button
                                            class="mt-3 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                                        >
                                            Choose File
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-end gap-4 mt-6">
                            <button
                                class="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                            >
                                Back
                            </button>
                            <button
                                class="px-6 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
                            >
                                Complete Payment
                            </button>
                        </div>
                    </div>
                </div>
</template>