import React from 'react';
import Link from 'next/link';



export default function Headerbottom() {
  return (
      <div className="flex min-w-full overflow-x-auto h-10 items-center md:px-6  xl:px-6 justify-between shadow-md bg-green-800 w-full">
        <Link href="/category/all">
          <a className="text-[9px] md:text-[16px] xl:text-[16px] font-bold text-[#fff] ml-1 hover:text-white flex-shrink-0">
            All Categories
          </a>
        </Link>
        <Link href="/category/computers">
          <a className="text-[9px] md:text-[16px] xl:text-[16px] font-bold text-[#fff] ml-2 md:ml-4 xl:ml-4 hover:text-white flex-shrink-0">
            Computers&Accessories
          </a>
        </Link>
        <Link href="/category/homeAndKitchen">
          <a className="text-[9px] md:text-[16px] xl:text-[16px] font-bold text-[#fff] ml-2 md:ml-4 xl:ml-4 hover:text-white flex-shrink-0">
            Home&Kitchen
          </a>
        </Link>
        <Link href="/category/fashion">
          <a className="text-[9px] md:text-[16px] xl:text-[16px] font-bold text-[#fff] ml-2 md:ml-4 xl:ml-4 hover:text-white flex-shrink-0">
            Fashion
          </a>
        </Link>
        <Link href="/category/electronics">
          <a className="text-[9px] md:text-[16px] xl:text-[16px] font-bold text-[#fff] ml-2 md:ml-4 xl:ml-4 hover:text-white flex-shrink-0">
            Electronics
          </a>
        </Link>
        <Link href="/category/fashion">
          <a className="text-[10px] md:text-[16px] xl:text-[16px] font-bold text-[#fff] ml-2 md:ml-4 xl:ml-4 hover:text-white flex-shrink-0">
            Other
          </a>
        </Link>
      </div>

  );
}
