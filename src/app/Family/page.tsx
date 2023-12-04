import Image from "next/image";
import React from "react";
const page = () => {
  return (
    <main className="h-fit  my-Box">
      <section className="family-intro flex flex-col my-Box  ">
        <h2 className="text-3xl font-bold font-[yi-var]  px-4 pt-2 text-blue-950 pb-2  ">
          Welcome to Our Family
        </h2>
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
        </main>
      </section>
    </main>
  );
};

export default page;
