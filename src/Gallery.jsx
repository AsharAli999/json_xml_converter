import React from 'react'
import abc from './abc.png'
import abc1 from './abc1.png'

const Gallery = () => {
  return (
    <div>
      {/* <!-- hero - start --> */}
      <div class="pb-6 sm:pb-8 lg:pb-12">


        <section class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-8 flex flex-wrap justify-between md:mb-16">
            <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
              <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Find your<br />data formatter</h1>

              <p class="max-w-md leading-relaxed text-slate-900 xl:text-lg">Effortlessly convert XML data to JSON and vice versa with our versatile data format converter app. Streamline your data handling and integration process with ease</p>
            </div>

            <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <img src={abc} loading="lazy" alt="Photo by Kaung Htet" class="h-full w-full object-cover object-center" />
              </div>

              <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img src={abc1} loading="lazy" alt="Photo by Manny Moreno" class="h-full w-full object-cover object-center" />
              </div>
            </div>
          </div>


        </section>
      </div>
      {/* <!-- hero - end --> */}

    </div>
  )
}

export default Gallery