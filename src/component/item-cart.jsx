/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import clsx from "clsx";

export function ItemCart({
  imageSrc, title, price, qty, className, small, children
}) {
  return (
    <div className={clsx("p-6 bg-white rounded-lg shadow flex flex-col justify-start items-start gap-4", className)}>
      <img className="w-[277.46px] min-w-[277.6px] h-[200px] rounded-[5px]" src={imageSrc} />
      <div className="self-stretch flex-col justify-start items-start gap-4 flex">
        <div className={clsx(
          "self-stretch text-cyan-900 font-bold leading-tight",
          small ? "text-base" : "text-2xl"
          )}>{title}</div>
        <div className="self-stretch flex-col justify-center items-center gap-8 flex">
          <div className="self-stretch justify-start items-center gap-1 inline-flex">
            <div className="grow shrink basis-0 text-blue-500 text-xl font-bold leading-[27px]">{price}</div>
            <div className="rounded-sm border border-gray-100 justify-start items-start flex">
              <div className="w-5 self-stretch pb-0.5 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-blue-500 text-[22px] font-bold leading-[4px]">-</div>
              </div>
              <div className="px-3.5 py-0.5 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-cyan-900 text-base font-normal leading-snug">{qty}</div>
              </div>
              <div className="w-5 self-stretch flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="text-blue-500 text-base font-bold leading-tight">+</div>
              </div>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  )
}