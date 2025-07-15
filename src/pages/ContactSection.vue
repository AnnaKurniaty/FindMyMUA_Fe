<template>
   <section id="footer">
   </section>
</template>

<script>
export default {
  name: 'ContactSection'
}

document.addEventListener("DOMContentLoaded", function () {
                                const clientRadio = document.getElementById("client")
                                const artistRadio = document.getElementById("artist")
                                const customerFields = document.getElementById("customer-fields")
                                const muaFields = document.getElementById("mua-fields")
                                function toggleFields() {
                                    if (clientRadio.checked) {
                                        customerFields.style.display = "block"
                                        muaFields.style.display = "none"
                                    } else if (artistRadio.checked) {
                                        customerFields.style.display = "none"
                                        muaFields.style.display = "block"
                                    }
                                }
                                clientRadio.addEventListener("change", toggleFields)
                                artistRadio.addEventListener("change", toggleFields)
                                clientRadio.checked = true
                                toggleFields()
                            })
</script>
