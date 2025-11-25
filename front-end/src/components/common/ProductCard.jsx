const ProductCard = () => {
    return (
        <section>
            <div className="container">
                <div class="p-4 mx-auto lg:max-w-6xl md:max-w-3xl">
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                        <div class="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
                            <div class="w-full bg-gray-50">
                                <a href="javascript:void(0)" class="block">
                                    <img src="https://readymadeui.com/images/fashion-img-1.webp" alt="Product 1"
                                        class="w-full object-cover object-top aspect-[230/307]" />
                                </a>
                            </div>
                            <div class="p-2 flex-1 flex flex-col">
                                <div class="flex-1">
                                    <a href="javascript:void(0)" class="block border-0 outline-0">
                                        <h5 class="text-sm sm:text-base font-semibold text-slate-900 truncate">Crimson Grace Gown</h5>
                                    </a>
                                    <p class="text-sm mt-1 text-slate-600 truncate">Flowy and elegant red dress</p>
                                    <div class="flex flex-wrap justify-between gap-2 mt-3">
                                        <div class="flex gap-2">
                                            <h6 class="text-sm sm:text-base font-bold text-slate-900">$10</h6>
                                            <h6 class="text-sm sm:text-base text-slate-600"><strike>$15</strike></h6>
                                        </div>
                                        <div class="flex items-center gap-0.5">
                                            <svg class="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg class="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg class="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg class="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg class="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div> 

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCard