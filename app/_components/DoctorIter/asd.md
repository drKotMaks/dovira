<article className="flex flex-col relative rounded-lg shadow-2xl bg-white dark:bg-neutral-800">
        <div className="relative w-full min-h-[18rem]  pt-[56.25%] overflow-hidden rounded-lg text-white">
            <Image className="absolute top-0 w-full h-full object-cover"   
            src="/photo_2024-05-13_09-54-37.jpg"
                    alt="Picture of the author"  
                    width={200}
                    height={200}/>
            <div className="flex flex-col justify-between w-full h-full absolute top-0 p-4 bg-gradient-to-t from-black to-50%">
                <div className="flex gap-3 justify-between items-start">
                    <div className="flex gap-1 flex-wrap overflow-hidden">
                        <span className="inline-flex gap-1 items-center text-xs overflow-hidden px-2 py-1 rounded bg-white text-neutral-900">
                            <span className="truncate">11 Listings</span>
                        </span>
                    </div>
                    <label className="ms-auto rounded-full cursor-pointer" aria-label="Favorite">
                   
                        <span className="group inline-flex justify-center items-center w-9 h-9 rounded-full bg-white">
                            <i className="iconify icon-[heroicons--heart-solid] w-5 h-5 text-neutral-500 peer-checked:group-[]:text-red-600"></i>
                        </span>
                    </label>
                </div>
                <a href="#" className="flex flex-col mt-auto pt-4">
                    <div className="flex gap-1 items-center">
                        <h4 className="text-xl font-bold line-clamp-1">Ethan Walker</h4>
                        <i className="iconify icon-[heroicons--check-badge-solid] w-6 h-6 shrink-0 text-green-500"></i>
                    </div>
                    <div className="flex gap-1 items-center mt-1">
                        <span className="text-sm font-bold text-amber-500">4.4</span>
                        <span className="inline-flex text-amber-500">
                            <i className="iconify icon-[material-symbols--star] w-4 h-4"></i>
                            <i className="iconify icon-[material-symbols--star] w-4 h-4"></i>
                            <i className="iconify icon-[material-symbols--star] w-4 h-4"></i>
                            <i className="iconify icon-[material-symbols--star] w-4 h-4"></i>
                            <i className="iconify icon-[material-symbols--star-half] w-4 h-4"></i>
                        </span>
                        <span className="text-xs font-semibold line-clamp-1">(13)</span>
                    </div>
                </a>
                <div className="flex gap-3 mt-4">
                    <a href="#" className="inline-flex gap-2 justify-center items-center w-full text-sm px-3 py-2 overflow-hidden rounded-md bg-white hover:bg-neutral-200 text-neutral-900">
                        <span className="truncate">View Listings</span>
                    </a>
                </div>
            </div>
        </div>
    </article>