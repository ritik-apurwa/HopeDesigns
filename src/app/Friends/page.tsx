import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='main-div' >
    This is Friends Page 
    <p className='flex flex-row my-Box font-[yi-var] text-lg h-fit p-4 font-bold text-blue-950 ' >We are the Apurwa Family  a close knit group of Individuals who love spending time together and creating lasting memories. From adventurous outing to cozy evenings at home, we cherish every moment we share. Get to know each of us below </p>
    <section className="family-intro flex flex-col my-Box h-screen overflow-x-auto overflow-y-auto ">
        <main id="family-main-head" className="text-3xl font-bold font-[yi-var]  px-4 pt-2 text-blue-950 pb-2  ">
          Welcome to Our Family
        </main>

        <main>
          <div className="flex my-Box flex-col  h-fit justify-center mt-8">
            <div className=" flex flex-col   h-fit items-center bg-red-100 my-Box ">
              <div className="border-black border-2 relative  rounded-[999px] h-24 w-24 ">
                <Image
                  src="/images/bg/homepage.jpg"
                  fill
                  alt="icons"
                  className="rounded-[999px] "
                />
              </div>
              <div className="font-bold ">Great Grand-Father</div>
            </div>
          </div>

          <div className="h-fit flex flex-col my-Box  ">
            <div className="flex flex-row  my-Box  h-fit  ">
              <div className="flex w-full h-8 border-r-[1px] border-r-gray-900 "></div>
              <div className="flex w-full h-8 border-s-[1px] border-gray-900 "></div>
            </div>

            <div className="flex flex-row justify-around mx-4 ">
              <div className="flex w-full h-8 border-s-[2px] border-t-[2px] border-gray-900 "></div>
              <div className="flex w-full h-8 border-e-[2px] border-t-[2px] border-gray-900 "></div>
            </div>

          </div>

          <main id="grandfather" className="flex flex-row justify-between space-x-[400px] " >

          <div className=" flex flex-col   h-fit items-start bg-red-100 my-Box w-1/2 ">
              <div className="border-black border-2 relative  rounded-[999px] h-24 w-24 ">
                <Image
                  src="/images/bg/homepage.jpg"
                  fill
                  alt="icons"
                  className="rounded-[999px] "
                />
              </div>
              <div className="font-bold ">Great Grand-Father</div>
            </div>
          <div className=" flex flex-col   h-fit items-end bg-green-100 my-Box  w-1/2 ">
              <div className="border-black border-2 relative  rounded-[999px] h-24 w-24 ">
                <Image
                  src="/images/bg/homepage.jpg"
                  fill
                  alt="icons"
                  className="rounded-[999px] "
                />
              </div>
              <div className="font-bold ">Great Grand-Father</div>
            </div>

          </main>
        </main>
      </section>
 
 </main>
  
  )
}

export default page