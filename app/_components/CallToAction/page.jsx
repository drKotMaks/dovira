"use client"

import Image from "next/image";
import React from "react";

export default function CallToAction () {

    


    return (
      
        
           <div className="grid lg:grid-cols-2 gap-4 max-w-screen-xl font-MyFont">
                
                <div className="relative h-100 md:h-125">
                <Image src="/main-foto.jpg"
                    alt="Picture of the author"  
                    width={700}
                    height={500}
                    
                     className="block  rounded-3xl object-cover" />

                    <div className="absolute top-0 left-0 h-full w-full p-8 md:p-12">
                        <div className="flex flex-col items-start justify-between h-full max-w-sm">
                            <div>
                                <span className="block mb-3 text-sm text-yellow-600 font-semibold uppercase">Ready for future</span>
                                <h2 className="text-3xl md:text-4xl text-white font-semibold">Сучасні технології для лікування  без болю</h2>
                            </div>


                            <a className="relative group inline-block w-full xs:w-auto py-4 px-6 text-orange-900 hover:text-white font-semibold bg-orange-50 rounded-md overflow-hidden transition duration-500" href="#">
                                <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
                                <div className="relative flex items-center justify-center">
                                    <span className="mr-4">See Incredible Work</span>
                                    <span>
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.92 0.62C12.8185 0.375651 12.6243 0.181475 12.38 0.0799999C12.2598 0.028759 12.1307 0.00157999 12 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1C1 1.26522 1.10536 1.51957 1.29289 1.70711C1.48043 1.89464 1.73478 2 2 2H9.59L1.29 10.29C1.19627 10.383 1.12188 10.4936 1.07111 10.6154C1.02034 10.7373 0.994202 10.868 0.994202 11C0.994202 11.132 1.02034 11.2627 1.07111 11.3846C1.12188 11.5064 1.19627 11.617 1.29 11.71C1.38296 11.8037 1.49356 11.8781 1.61542 11.9289C1.73728 11.9797 1.86799 12.0058 2 12.0058C2.13201 12.0058 2.26272 11.9797 2.38458 11.9289C2.50644 11.8781 2.61704 11.8037 2.71 11.71L11 3.41V11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11V1C12.9984 0.869323 12.9712 0.740222 12.92 0.62Z" fill="currentColor"></path>
                                        </svg>
                                    </span>
                                </div>
                            </a>

                            
                        </div>
                    </div>
                </div>
                



               
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col h-full">
                        <a className="relative block h-full mb-4 pt-8 px-8 pb-5 rounded-3xl bg-green-50 hover:bg-green-100 transition duration-200 shadow" href="#">
                            <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                                <p className="text-sm text-gray-900 mb-10 md:mb-6">We have share our journey and some story</p>
                                <span className="text-3xl font-semibold text-gray-900">Read our blog</span>
                            </div>
                            <svg className="absolute bottom-0 right-0 m-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.92 6.62C17.8185 6.37565 17.6243 6.18147 17.38 6.08C17.2598 6.02876 17.1307 6.00158 17 6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.29289 7.70711C6.48043 7.89464 6.73478 8 7 8H14.59L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L16 9.41V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V7C17.9984 6.86932 17.9712 6.74022 17.92 6.62V6.62Z" fill="black"></path>
                            </svg>
                        </a>
                        <a className="relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-red-50 hover:bg-red-100 transition duration-200 shadow" href="#">
                            <div className="flex flex-col h-full justify-between max-w-sm pr-16">
                                <p className="text-sm text-gray-900 mb-10 md:mb-6">It’s a must to that we would like to share our workflow to believe you</p>
                                <span className="text-3xl font-semibold text-gray-900">See our workflow</span>
                            </div>
                            <svg className="absolute bottom-0 right-0 m-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.92 6.62C17.8185 6.37565 17.6243 6.18147 17.38 6.08C17.2598 6.02876 17.1307 6.00158 17 6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.29289 7.70711C6.48043 7.89464 6.73478 8 7 8H14.59L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L16 9.41V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V7C17.9984 6.86932 17.9712 6.74022 17.92 6.62V6.62Z" fill="black"></path>
                            </svg>
                        </a>
                    </div>
                    <a className="relative block h-full pt-8 px-8 pb-5 rounded-3xl bg-orange-50 hover:bg-orange-100 transition duration-200 shadow" href="#">
                        <div className="flex h-full flex-col items-start justify-between max-w-sm pr-16">
                            <p className="text-sm text-gray-900 mb-10 md:mb-6">2,000+ our team members around the world who create incredible and amazing projects</p>
                            <span className="text-3xl font-semibold text-gray-900">Meet Our Expert</span>
                        </div>

                        <svg className="absolute bottom-0 right-0 m-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.92 6.62C17.8185 6.37565 17.6243 6.18147 17.38 6.08C17.2598 6.02876 17.1307 6.00158 17 6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7C6 7.26522 6.10536 7.51957 6.29289 7.70711C6.48043 7.89464 6.73478 8 7 8H14.59L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L16 9.41V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V7C17.9984 6.86932 17.9712 6.74022 17.92 6.62V6.62Z" fill="black"></path>
                        </svg>
                    </a>
                </div>
                
           </div>

         
       
            
          );
} 