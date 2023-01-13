import React from "react";
import Link from "next/link";

function Header() {
    return (
        <header className="header-section relative z-30 border-b border-slate-300">
            <div className="hidden sm:flex bg-secondary-color">
                <div className="grid grid-cols-12 container mx-auto px-2 sm:px-8 py-[6px] h-full">
                    <div className="col-span-8 self-center tracking-wider">
                        <div className="flex gap-[15px]">
                            <div className="flex items-center gap-2">
                                <span>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M2.33198 4.73757C2.56665 4.40744 2.8767 4.13808 3.23637 3.95185C3.59605 3.76563 3.99496 3.66792 4.39998 3.66685H17.6C18.458 3.66685 19.2069 4.0977 19.668 4.73757C19.9824 5.17575 20.1666 5.7157 20.1666 6.29506V15.706C20.1666 17.126 19.0483 18.3342 17.6 18.3342H4.39998C2.95165 18.3342 1.83331 17.126 1.83331 15.706V6.29506C1.83331 5.7157 2.01665 5.17575 2.33198 4.73665V4.73757ZM4.5219 5.50027L10.3216 11.8852C10.4076 11.9797 10.5123 12.0552 10.6291 12.1069C10.7459 12.1586 10.8722 12.1853 11 12.1853C11.1277 12.1853 11.254 12.1586 11.3709 12.1069C11.4877 12.0552 11.5924 11.9797 11.6783 11.8852L17.4781 5.50027H4.5219ZM18.3333 7.28602L13.035 13.1181C12.7772 13.4017 12.4631 13.6283 12.1126 13.7834C11.7622 13.9384 11.3832 14.0185 11 14.0185C10.6168 14.0185 10.2378 13.9384 9.88734 13.7834C9.5369 13.6283 9.22273 13.4017 8.96498 13.1181L3.66665 7.28602V15.706C3.66665 16.1772 4.02598 16.5008 4.39998 16.5008H17.6C17.974 16.5008 18.3333 16.1772 18.3333 15.706V7.28602Z" fill="white" />
                                    </svg>

                                </span>
                                <a href="#" className="text-white font-light">sales@tamaduni.tk</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.43975 13.5609C10.5646 15.6858 12.5382 16.8702 14.0067 17.5284C15.2891 18.1032 16.8025 17.6522 17.9823 16.4724L18.2518 16.202L15.0104 14.1394C14.3944 15.0377 13.2293 15.5648 12.0661 15.0744C11.1852 14.7022 10.0192 14.066 8.97692 13.0237C7.93467 11.9814 7.29942 10.8154 6.92725 9.9344C6.43592 8.77109 6.96209 7.60595 7.86134 6.98992L5.79884 3.74843L5.52842 4.01795C4.34867 5.19775 3.89859 6.71124 4.47242 7.99372C5.13059 9.46229 6.31492 11.436 8.43975 13.5609V13.5609ZM13.2578 19.2014C11.594 18.4561 9.43342 17.1471 7.14359 14.8571C4.85375 12.5681 3.54475 10.4065 2.79859 8.74267C1.81317 6.54257 2.71334 4.24162 4.23225 2.72172L4.50175 2.45129C4.69585 2.25705 4.9311 2.1089 5.19013 2.01777C5.44915 1.92664 5.72534 1.89486 5.99829 1.92478C6.27124 1.9547 6.53399 2.04555 6.76712 2.19063C7.00026 2.3357 7.19783 2.5313 7.34525 2.76297L9.93942 6.84233C10.0081 6.95054 10.0534 7.07196 10.0723 7.19874C10.0911 7.32553 10.0832 7.45486 10.049 7.57839C10.0148 7.70193 9.95507 7.81691 9.87366 7.91593C9.79226 8.01494 9.691 8.09578 9.57642 8.15323L8.99617 8.44383C8.60017 8.64184 8.5195 8.9911 8.61575 9.2212C8.9265 9.95732 9.44625 10.8997 10.2731 11.7275C11.1008 12.5544 12.0432 13.0741 12.7793 13.3849C13.0093 13.4821 13.3586 13.4005 13.5566 13.0045L13.8472 12.4242C13.9045 12.3095 13.9853 12.2082 14.0843 12.1267C14.1833 12.0452 14.2982 11.9853 14.4218 11.951C14.5453 11.9167 14.6746 11.9087 14.8015 11.9276C14.9283 11.9464 15.0497 11.9916 15.158 12.0603L19.2372 14.6555C19.4688 14.8029 19.6644 15.0005 19.8095 15.2336C19.9546 15.4668 20.0454 15.7295 20.0753 16.0025C20.1052 16.2755 20.0735 16.5517 19.9823 16.8107C19.8912 17.0697 19.7431 17.305 19.5488 17.4991L19.2784 17.7686C17.7595 19.2885 15.4587 20.1878 13.2578 19.2014V19.2014Z" fill="white" />
                                    </svg>

                                </span>
                                <a href="#" className="text-white font-light">+254 706 121 049</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 justify-self-end self-center">
                        <div className="flex items-center gap-[20px] uppercase text-sm">
                            <a href="#" className="flex gap-1 text-white items-center">
                                <span>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.33333 8.25037C7.33333 7.27787 7.71964 6.34519 8.40728 5.65752C9.09491 4.96986 10.0275 4.58353 11 4.58353C11.9725 4.58353 12.9051 4.96986 13.5927 5.65752C14.2804 6.34519 14.6667 7.27787 14.6667 8.25037C14.6667 9.22288 14.2804 10.1556 13.5927 10.8432C12.9051 11.5309 11.9725 11.9172 11 11.9172C10.0275 11.9172 9.09491 11.5309 8.40728 10.8432C7.71964 10.1556 7.33333 9.22288 7.33333 8.25037V8.25037ZM14.5053 12.4883C15.3776 11.7667 16.0059 10.7936 16.3046 9.70168C16.6033 8.60976 16.5578 7.45226 16.1744 6.38714C15.791 5.32202 15.0882 4.40117 14.1621 3.75023C13.2359 3.0993 12.1315 2.75 10.9995 2.75C9.86755 2.75 8.76314 3.0993 7.837 3.75023C6.91087 4.40117 6.20813 5.32202 5.82469 6.38714C5.44125 7.45226 5.39578 8.60976 5.69449 9.70168C5.9932 10.7936 6.62153 11.7667 7.49375 12.4883C4.5705 13.5178 2.75 15.8105 2.75 18.3342C2.75 18.5773 2.84658 18.8105 3.01849 18.9824C3.19039 19.1543 3.42355 19.2509 3.66667 19.2509C3.90978 19.2509 4.14294 19.1543 4.31485 18.9824C4.48676 18.8105 4.58333 18.5773 4.58333 18.3342C4.58333 16.2533 6.74208 13.7506 11 13.7506C15.2579 13.7506 17.4167 16.2533 17.4167 18.3342C17.4167 18.5773 17.5132 18.8105 17.6852 18.9824C17.8571 19.1543 18.0902 19.2509 18.3333 19.2509C18.5764 19.2509 18.8096 19.1543 18.9815 18.9824C19.1534 18.8105 19.25 18.5773 19.25 18.3342C19.25 15.8105 17.4313 13.5178 14.5053 12.4883Z" fill="white" />
                                    </svg>

                                </span>
                                <span className="h-4">Account</span>
                            </a>
                            <a href="#" className="flex gap-1 text-white items-center">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.83332 1.83344C1.59021 1.83344 1.35705 1.93002 1.18514 2.10193C1.01323 2.27385 0.916656 2.50702 0.916656 2.75015C0.916656 2.99327 1.01323 3.22644 1.18514 3.39836C1.35705 3.57028 1.59021 3.66686 1.83332 3.66686H2.26599C2.46713 3.66682 2.6627 3.73294 2.82256 3.85503C2.98241 3.97712 3.09767 4.1484 3.15057 4.34247L3.53191 5.74137L5.49999 12.9559V14.6674C5.49999 15.3036 5.71541 15.8884 6.07749 16.3541C5.81833 16.6463 5.63815 16.9999 5.55403 17.3813C5.46992 17.7627 5.48468 18.1593 5.5969 18.5334C5.70912 18.9075 5.91508 19.2467 6.19523 19.5188C6.47538 19.791 6.82043 19.987 7.19762 20.0883C7.57481 20.1895 7.97163 20.1927 8.35041 20.0976C8.72918 20.0024 9.07735 19.812 9.36186 19.5444C9.64637 19.2768 9.85778 18.941 9.97603 18.5688C10.0943 18.1965 10.1154 17.8002 10.0375 17.4175H12.8792C12.808 17.7675 12.8195 18.1292 12.9129 18.4739C13.0063 18.8185 13.179 19.1366 13.4171 19.4027C13.6552 19.6689 13.9522 19.8756 14.2844 20.0066C14.6167 20.1375 14.9749 20.189 15.3305 20.157C15.6862 20.1249 16.0294 20.0102 16.3329 19.822C16.6363 19.6337 16.8916 19.3772 17.0783 19.0728C17.265 18.7683 17.378 18.4245 17.4082 18.0687C17.4385 17.7129 17.3852 17.3549 17.2526 17.0233C17.3479 16.8859 17.4039 16.7249 17.4143 16.5579C17.4247 16.3909 17.3892 16.2243 17.3117 16.076C17.2342 15.9277 17.1176 15.8035 16.9745 15.7168C16.8314 15.6301 16.6673 15.5842 16.5 15.5841H8.25091C8.00779 15.5841 7.77463 15.4875 7.60273 15.3156C7.43082 15.1437 7.33424 14.9105 7.33424 14.6674V13.7507H16.7172C17.1195 13.7508 17.5107 13.6185 17.8304 13.3743C18.1501 13.1302 18.3806 12.7876 18.4864 12.3994L19.9852 6.89918C20.0593 6.62703 20.0697 6.34143 20.0155 6.06461C19.9613 5.78779 19.844 5.52721 19.6726 5.30315C19.5012 5.07909 19.2805 4.89759 19.0275 4.77279C18.7746 4.64798 18.4962 4.58323 18.2142 4.58357H5.11682L4.91974 3.85937C4.76087 3.27733 4.41501 2.76368 3.93547 2.39759C3.45592 2.03149 2.8693 1.83326 2.26599 1.83344H1.83332ZM15.125 17.4175C15.0034 17.4175 14.8869 17.4658 14.8009 17.5518C14.7149 17.6377 14.6667 17.7543 14.6667 17.8759C14.6667 17.9974 14.7149 18.114 14.8009 18.2C14.8869 18.2859 15.0034 18.3342 15.125 18.3342C15.2465 18.3342 15.3631 18.2859 15.4491 18.2C15.535 18.114 15.5833 17.9974 15.5833 17.8759C15.5833 17.7543 15.535 17.6377 15.4491 17.5518C15.3631 17.4658 15.2465 17.4175 15.125 17.4175ZM16.7163 11.9173H7.11699L5.61641 6.41699H18.2151L16.7163 11.9173V11.9173ZM7.79166 17.4175C7.6701 17.4175 7.55352 17.4658 7.46757 17.5518C7.38161 17.6377 7.33332 17.7543 7.33332 17.8759C7.33332 17.9974 7.38161 18.114 7.46757 18.2C7.55352 18.2859 7.6701 18.3342 7.79166 18.3342C7.91321 18.3342 8.02979 18.2859 8.11575 18.2C8.2017 18.114 8.24999 17.9974 8.24999 17.8759C8.24999 17.7543 8.2017 17.6377 8.11575 17.5518C8.02979 17.4658 7.91321 17.4175 7.79166 17.4175Z" fill="white" />
                                </svg>
                                <span className="h-4">Cart</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary-color">
                <div className="container mx-auto px-2 sm:px-8 py-5 h-full grid grid-cols-4 lg:grid-cols-12 gap-1 lg:gap-0">
                    <div className="col-span-2 lg:col-span-3 order-1 lg:order-1 self-center ">
                        <a href="index.html" className="font-extrabold text-2xl text-white tracking-widest uppercase">
                            Tamaduni
                        </a>
                    </div>
                    <div className="header-search hidden lg:block col-span-4 lg:col-span-6 order-3 lg:order-2 self-center mt-[10px] lg:mt-0 transition-all-300">
                        <form className="search" action="#">
                            <div className="flex overflow-hidden h-[40px] bg-primary-rgba border-b">
                                <input
                                    className="bg-transparent w-full border-none focus:ring-0 focus:ring-transparent focus:border-none py-2 pl-5 text-white placeholder-icon text-sm"
                                    type="search"
                                    placeholder="Search..."
                                />
                                <button className="btn-search text-white px-3" type="submit">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.16667 4.58355C7.95109 4.58355 6.7853 5.06646 5.92576 5.92604C5.06622 6.78563 4.58333 7.95147 4.58333 9.16711C4.58333 10.3827 5.06622 11.5486 5.92576 12.4082C6.7853 13.2678 7.95109 13.7507 9.16667 13.7507C10.3822 13.7507 11.548 13.2678 12.4076 12.4082C13.2671 11.5486 13.75 10.3827 13.75 9.16711C13.75 7.95147 13.2671 6.78563 12.4076 5.92604C11.548 5.06646 10.3822 4.58355 9.16667 4.58355ZM2.75 9.16711C2.75 8.15071 2.99143 7.14885 3.4544 6.24404C3.91736 5.33922 4.58863 4.55732 5.41292 3.96273C6.23721 3.36814 7.19094 2.97787 8.19558 2.82405C9.20022 2.67023 10.227 2.75727 11.1914 3.07799C12.1559 3.39871 13.0303 3.94395 13.7428 4.6688C14.4552 5.39365 14.9853 6.27738 15.2894 7.24722C15.5935 8.21705 15.6629 9.24525 15.4918 10.2471C15.3207 11.249 14.9141 12.196 14.3055 13.01L18.9814 17.6852C19.1534 17.8571 19.2501 18.0903 19.2502 18.3334C19.2503 18.5766 19.1538 18.8099 18.9819 18.9819C18.81 19.1539 18.5768 19.2506 18.3337 19.2507C18.0905 19.2507 17.8573 19.1542 17.6852 18.9823L13.0102 14.3071C12.0565 15.0206 10.9229 15.4546 9.73653 15.5603C8.55013 15.6661 7.3577 15.4396 6.29274 14.9061C5.22778 14.3726 4.33233 13.5532 3.70664 12.5396C3.08094 11.526 2.7497 10.3583 2.75 9.16711V9.16711Z" fill="white" />
                                    </svg>

                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-span-2 lg:col-span-3 order-2 lg:order-3 justify-self-end self-center flex gap-2 xl:gap-5">
                        <div className="flex items-center lg:hidden">
                            <button className="btn-search-mob text-white p-[5px]">
                                <i className="bi bi-search flex text-2xl pointer-events-none"></i>
                            </button>
                        </div>
                        <div className="flex items-center lg:hidden">
                            <button className="btn-open-modal text-white" data-target=".menu-mob">
                                <i className="bi bi-list flex text-3xl pointer-events-none"></i>
                            </button>
                        </div>
                        <div className="hidden lg:flex relative group">
                            <a href="#" className="flex items-center justify-center antialiased rounded-0 border-solid border-2 bg-tmdprimary border-tmdprimary select-none uppercase pt-2 pb-1 w-40">
                                <span className="text-[13px] tracking-widest font-semibold text-white">
                                    Sell
                                </span>
                                {/* <i className="bi bi-caret-down-fill text-white text-sm flex rotate-0 group-hover:rotate-180 transition-all-300"></i> */}
                            </a>
                            <div className="absolute top-full z-30 w-[120%] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all-300 pt-[10px]">
                                <div className="relative arrow">
                                    <ul className="bg-white shadow-custom-1 rounded-md overflow-hidden p-[6px]">
                                        <li className="hover:font-semibold">
                                            <a href="#" className="btn-open-modal" data-tab="0" data-target=".entry-modal">
                                                <div className="flex items-center gap-2 p-1 pointer-events-none">
                                                    <i className="bi bi-box-arrow-in-right text-xl text-primary-color flex"></i>
                                                    <span>Login</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="hover:font-semibold">
                                            <a href="#" className="btn-open-modal" data-tab="1" data-target=".entry-modal">
                                                <div className="flex items-center gap-2 p-1 pointer-events-none">
                                                    <i className="bi bi-person text-xl text-primary-color flex"></i>
                                                    <span>Sign up</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white hidden lg:block">
                <nav className="container mx-auto px-2 sm:px-8">
                    <ul className="menu flex flex-wrap justify-center items-center text-[13px] uppercase font-semibold tracking-widest">
                        <li className="group relative underlined-animated">
                            <a href="#" className="btn-open flex items-center pt-2.5 pb-1 px-4">
                                <span>Categories</span>
                                <i className="bi bi-caret-down-fill flex text-xs text-primary-color rotate-0 group-hover:rotate-180 transition-all-300"></i>
                            </a>
                            <div className="submenu absolute pt-[10px] left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all-300">
                                <ul className="bg-white shadow-custom-1 text-base w-[250px] relative">
                                    <li className="group-1">
                                        <a href="#" className="flex gap-2 items-center p-2">
                                            <i className="bi bi-circle-fill flex text-[6px] text-primary-color invisible group-1-hover-visible"></i>
                                            <span className="group-1-hover-font">Pc components</span>
                                            <i className="bi bi-caret-right-fill flex text-xs text-primary-color ml-auto invisible group-1-hover-visible"></i>
                                        </a>
                                        <div className="submenu absolute top-0 left-full min-h-full min-w-[680px] invisible opacity-0 group-1-hover-visible transition-all-300">
                                            <div className="bg-white shadow-custom-2">
                                                <div className="border-b-2 border-primary-color py-[10px]">
                                                    <span className="uppercase text-primary-color font-bold text-3xl px-5">Pc components</span>
                                                </div>
                                                {/* <div className="submenu-categories flex flex-wrap">
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/pc_components/motherboards.jpg" alt="motherboard" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Motherboards</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/pc_components/processors.jpg" alt="processors" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Processors</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/pc_components/rams.jpg" alt="rams" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">RAMS</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/pc_components/video_cards.jpg" alt="video cards" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Video Cards</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/pc_components/power_supplys.jpg" alt="video cards" />
                                                            </div>
                                                            <span className="block text-center object-contain group-2-hover-font">Power Supplys</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/pc_components/hard_drives.jpg" alt="video cards" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Hard Drives</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/pc_components/ssd_disk.jpg" alt="video cards" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">SSD Disk</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/pc_components/computer_case.jpg" alt="video cards" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Case</span>
                                                        </a>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </li>
                                    <li className="group-1">
                                        <a href="#" className="flex gap-2 items-center p-2">
                                            <i className="bi bi-circle-fill flex text-[6px] text-primary-color invisible group-1-hover-visible"></i>
                                            <span className="group-1-hover-font">Peripherals</span>
                                            <i className="bi bi-caret-right-fill flex text-xs text-primary-color ml-auto invisible group-1-hover-visible"></i>
                                        </a>
                                        {/* <div className="submenu absolute top-0 left-full min-h-full min-w-[680px] invisible opacity-0 group-1-hover-visible transition-all-300">
                                            <div className="bg-white shadow-custom-2">
                                                <div className="border-b-2 border-primary-color py-[10px]">
                                                    <span className="uppercase text-primary-color font-bold text-3xl px-5">Peripherals</span>
                                                </div>
                                                <div className="submenu-categories flex flex-wrap">
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/peripherals/keywords.jpg" alt="motherboard" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Keywords</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/peripherals/mouse.jpg" alt="processors" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Mouses</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/peripherals/mic.jpg" alt="rams" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Mics</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/peripherals/webcam.jpg" alt="rams" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Webcam</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </li>
                                    <li className="group-1">
                                        <a href="#" className="flex gap-2 items-center p-2">
                                            <i className="bi bi-circle-fill flex text-[6px] text-primary-color invisible group-1-hover-visible"></i>
                                            <span className="group-1-hover-font">Computers</span>
                                            <i className="bi bi-caret-right-fill flex text-xs text-primary-color ml-auto invisible group-1-hover-visible"></i>
                                        </a>
                                        {/* <div className="submenu absolute top-0 left-full min-h-full min-w-[680px] invisible opacity-0 group-1-hover-visible transition-all-300">
                                            <div className="bg-white shadow-custom-2">
                                                <div className="border-b-2 border-primary-color py-[10px]">
                                                    <span className="uppercase text-primary-color font-bold text-3xl px-5">Computers</span>
                                                </div>
                                                <div className="submenu-categories flex flex-wrap">
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/computers/desktops.jpg" alt="motherboard" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Desktops</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/computers/notebooks.jpg" alt="processors" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Notebooks</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </li>
                                    <li className="group-1">
                                        <a href="#" className="flex gap-2 items-center p-2">
                                            <i className="bi bi-circle-fill flex text-[6px] text-primary-color invisible group-1-hover-visible"></i>
                                            <span className="group-1-hover-font">Monitors</span>
                                        </a>
                                    </li>
                                    <li className="group-1">
                                        <a href="#" className="flex gap-2 items-center p-2">
                                            <i className="bi bi-circle-fill flex text-[6px] text-primary-color invisible group-1-hover-visible"></i>
                                            <span className="group-1-hover-font">Printers</span>
                                        </a>
                                    </li>
                                    <li className="group-1">
                                        <a href="#" className="flex gap-2 items-center p-2">
                                            <i className="bi bi-circle-fill flex text-[6px] text-primary-color invisible group-1-hover-visible"></i>
                                            <span className="group-1-hover-font">Gaming</span>
                                            <i className="bi bi-caret-right-fill flex text-xs text-primary-color ml-auto invisible group-1-hover-visible"></i>
                                        </a>
                                        {/* <div className="submenu absolute top-0 left-full min-h-full min-w-[680px] invisible opacity-0 group-1-hover-visible transition-all-300">
                                            <div className="bg-white shadow-custom-2">
                                                <div className="border-b-2 border-primary-color py-[10px]">
                                                    <span className="uppercase text-primary-color font-bold text-3xl px-5">Gaming</span>
                                                </div>
                                                <div className="submenu-categories flex flex-wrap">
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/gaming/consoles.jpg" alt="motherboard" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Consoles</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/gaming/games.jpg" alt="processors" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Games</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/gaming/accessories.jpg" alt="processors" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Accessories</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </li>
                                    <li className="group-1">
                                        <a href="#" className="flex gap-2 items-center p-2">
                                            <i className="bi bi-circle-fill flex text-[6px] text-primary-color invisible group-1-hover-visible"></i>
                                            <span className="group-1-hover-font">Tablets</span>
                                        </a>
                                    </li>
                                    <li className="group-1">
                                        <a href="#" className="flex gap-2 items-center p-2">
                                            <i className="bi bi-circle-fill flex text-[6px] text-primary-color invisible group-1-hover-visible"></i>
                                            <span className="group-1-hover-font">Smartphones</span>
                                        </a>
                                    </li>
                                    <li className="group-1">
                                        <a href="#" className="flex gap-2 items-center p-2">
                                            <i className="bi bi-circle-fill flex text-[6px] text-primary-color invisible group-1-hover-visible"></i>
                                            <span className="group-1-hover-font">Software</span>
                                            <i className="bi bi-caret-right-fill flex text-xs text-primary-color ml-auto invisible group-1-hover-visible"></i>
                                        </a>
                                        <div className="submenu absolute top-0 left-full min-h-full min-w-[680px] invisible opacity-0 group-1-hover-visible transition-all-300">
                                            <div className="bg-white shadow-custom-2">
                                                <div className="border-b-2 border-primary-color py-[10px]">
                                                    <span className="uppercase text-primary-color font-bold text-3xl px-5">Software</span>
                                                </div>
                                                {/* <div className="submenu-categories flex flex-wrap">
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/software/os.jpg" alt="motherboard" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Operating System</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/software/office.jpg" alt="processors" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Office Package</span>
                                                        </a>
                                                    </div>
                                                    <div className="p-[10px] group-2">
                                                        <a className="categorie-container inline-block" href="#">
                                                            <div className="categorie-img h-[150px] w-[150px]">
                                                                <Image className="img-product group-2-hover-img" src="img/categories/software/antivirus.jpg" alt="processors" />
                                                            </div>
                                                            <span className="block text-center group-2-hover-font">Antivirus</span>
                                                        </a>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="pt-2.5 pb-1 px-4"><a href="index.html">Electronics</a></li>
                        <li className="pt-2.5 pb-1 px-4"><a href="#">Fashion</a></li>
                        <li className="pt-2.5 pb-1 px-4"><a href="#">Kitchen</a></li>
                        <li className="pt-2.5 pb-1 px-4"><a href="#">Food</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
