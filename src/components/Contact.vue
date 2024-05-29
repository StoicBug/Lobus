<template>
  <div>
    <!-- Start Section-->
    <!-- Start Section-->
    <section class="relative lg:py-24 py-16" id="contact">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center">
          <div class="lg:col-span-7 md:col-span-6">
            <img src="../assets/contact.svg" alt="" class="ml-20 w-[500px]">
          </div>

          <div class="lg:col-span-5 md:col-span-6">
            <div class="lg:ms-5">
              <div class="bg-white  rounded-md shadow  p-6">
                <h3 class="mb-6 text-2xl leading-normal font-medium text-center">Get in touch !</h3>

                <form>
                  <div class="grid lg:grid-cols-12 lg:gap-6">
                    <div class="lg:col-span-6 mb-5">
                      <label for="name" class="form-label font-medium">Your Name:</label>
                      <input name="name" id="name" type="text" class="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit rounded outline-none focus:border-violet-600/50  focus:ring-0 mt-2" placeholder="Name :">
                    </div>

                    <div class="lg:col-span-6 mb-5">
                      <label for="email" class="form-label font-medium">Your Email:</label>
                      <input name="email" id="email" type="email" class="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit rounded outline-none focus:border-violet-600/50  focus:ring-0 mt-2" placeholder="Email :">
                    </div>
                  </div>

                  <div class="grid grid-cols-1">
                    <div class="mb-5">
                      <label for="subject" class="form-label font-medium">Your Question:</label>
                      <input name="subject" id="subject" class="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit  rounded outline-none focus:border-violet-600/50  focus:ring-0 mt-2" placeholder="Subject :">
                    </div>

                    <div class="mb-5">
                      <label for="comments" class="form-label font-medium">Your Comment:</label>
                      <textarea name="comments" id="comments" class="form-input w-full py-2 px-3 bg-transparent border border-inherit  rounded outline-none focus:border-violet-600/50 focus:ring-0 mt-2 textarea h-28" placeholder="Message :"></textarea>
                    </div>
                  </div>
                  <button type="submit" id="submit" name="send" class="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div><!--end container-->

      <div class="container mx-auto lg:mt-24 mt-16">
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
          <div class="text-center px-6">
            <div class="relative overflow-hidden text-transparent -m-3">
              <i data-feather="hexagon" class="size-28 fill-orange-600/5 mx-auto rotate-[30deg]"></i>
              <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-violet-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                <i class="uil uil-phone"></i>
              </div>
            </div>

            <div class="content mt-7">
              <h5 class="title h5 text-xl font-medium">Phone</h5>
              <p class="text-slate-400 mt-3">For inquiries, support, or further information, please reach out to us at:
              </p>

              <div class="mt-5">
                <a href="tel:+212-7-87-35-24-16" class="text-orange-600 hover:text-orange-600 after:bg-orange-600 transition duration-500">+212 7 87 35 24 16</a>
              </div>
            </div>
          </div>

          <div class="text-center px-6">
            <div class="relative overflow-hidden text-transparent -m-3">
              <i data-feather="hexagon" class="size-28 fill-violet-600/5 mx-auto rotate-[30deg]"></i>
              <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-violet-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                <i class="uil uil-envelope"></i>
              </div>
            </div>

            <div class="content mt-7">
              <h5 class="title h5 text-xl font-medium">Email</h5>
              <p class="text-slate-400 mt-3">For inquiries, support, or further information, please reach out to us at:</p>
              <div class="mt-5">
                <a href="mailto:contact@Lobus.com" class="text-orange-600 hover:text-orange-600 after:bg-orange-600 transition duration-500">contact@Lobus.com</a>
              </div>
            </div>
          </div>

          <div class="text-center px-6">
            <div class="relative overflow-hidden text-transparent -m-3">
              <i data-feather="hexagon" class="size-28 fill-violet-600/5 mx-auto rotate-[30deg]"></i>
              <div class="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-violet-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
                <i class="uil uil-map-marker"></i>
              </div>
            </div>

            <div class="content mt-7">
              <h5 class="title h5 text-xl font-medium">Location</h5>
              <p class="text-slate-400 mt-3">Enset Mohammedia  <br> bd hassan 2 , 28810 </p>
              <div class="mt-5">
                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                   data-type="iframe" class="video-play-icon read-more lightbox text-orange-600 hover:text-orange-600 after:bg-orange-600 transition duration-500">View on Google map</a>
              </div>
            </div>
          </div>
        </div><!--end grid-->
      </div><!--end container-->
    </section><!--end section-->
    <!-- End Section-->

    <!-- Google Map -->
    <div class="container-fluid relative">
      <div class="grid grid-cols-1">
        <div class="w-full leading-[0] border-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.165095177777!2d-7.363028224760932!3d33.704676673289875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7b6d0db170185%3A0x79759da1a916fc50!2sENSET%20Mohammedia!5e0!3m2!1sfr!2sma!4v1716755154593!5m2!1sfr!2sma" style="border:0" class="w-full h-[500px]" allowfullscreen></iframe>
        </div>
      </div><!--end grid-->
    </div><!--end container-->
    <!-- Google Map -->
  </div>
</template>

<script>

export default {
  name: "ContactVue",
  data() {
    return {
      // ContactData:[
      //     {
      //         icon:"uil uil-phone",
      //         name: "Phone",
      //         desc: "The phrasal sequence of the is now so that many campaign and benefit",
      //         title: "+152 534-468-854"
      //     },
      //     {
      //         icon:"uil uil-phone",
      //         name: "Email",
      //         desc: "The phrasal sequence of the is now so that many campaign and benefit",
      //         title: "contact@example.com"
      //     },
      //     {
      //         icon:"uil uil-phone",
      //         name: "Location",
      //         desc: "C/54 Northwest Freeway, Suite 558, Houston, USA 485",
      //         title: "View on Google map"
      //     }
      // ]

    }
  },

}
</script>

<style  scoped>

</style>