"use client";

import { Star } from "lucide-react";

const CustomerReview = () => {
  return (
    <div className="flex items-center gap-4 text-white rounded-xl max-w-md items-stretch">
      {/* Avatars */}
      <div className="flex -space-x-3">
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="Customer 1"
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-full "
        />
        <img
          src="https://randomuser.me/api/portraits/women/2.jpg"
          alt="Customer 2"
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-full  bg-yellow-400"
        />
        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-full bg-[#232524] flex items-center justify-center  text-[#d1fe67] font-bold text-sm">
          4.8 <Star size={12} className="ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Text */}
      <div className=" flex  flex-col justify-center">
        <h4 className="text-sm ">Customer Review</h4>
        <p className="text-xs text-[#ffffff82]">
          They felt satisfied and helped
        </p>
      </div>
    </div>
  );
};

export default CustomerReview;
