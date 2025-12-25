import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import './App.css';
import logo from './assets/Logo.png';
import hero from './assets/heroo.png';
import feature from './assets/feature.png';
import blog1 from './assets/blogone.jpg';
import blog2 from './assets/blogtwo.jpg';
import blog3 from './assets/blogthree.jpg';
import blog4 from './assets/blogfour.jpg';
import blog5 from './assets/blogfive.jpg';
import blog6 from './assets/blogsix.jpg';
import blog7 from './assets/blogseven.jpg';
import blog8 from './assets/blogeight.jpg';
import blog9 from './assets/blognine.jpg';
import blog10 from './assets/blogten.jpg';

function ShoeWebsite(){
  useEffect(() => {
    AOS.init({ duration: 2000, once: true }); 
  }, []);

  return(
    <>
      {/* navbar */}
      <header className="text-gray-600">
        <div className="container mx-auto flex flex-wrap px-5 py-0 items-center">
          <img src={logo} alt="" />
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-3">
            <a className="px-4 py-1.5 text-black bg-white rounded-full border border-white/30 hover:bg-white hover:text-black transition cursor-pointer" href="#home">
              Home
            </a>
            <a className="px-4 py-1.5 text-white rounded-full border border-white/30 hover:bg-white hover:text-black transition cursor-pointer"
              href="#features">
              Features
            </a>
            <a className="px-4 py-1.5 text-white rounded-full border border-white/30 hover:bg-white hover:text-black transition cursor-pointer"
             href="#contact">
              Contact
            </a>
            <a className="px-4 py-1.5 text-white rounded-full border border-white/30 hover:bg-white hover:text-black transition cursor-pointer" href="#pricing">
              Pricing
            </a>
          </nav>
          <button className="inline-flex items-center bg-[#753D88] text-white border-0 py-2 px-5 focus:outline-none hover:bg-purple-800
           rounded-2xl text-base mt-4 md:mt-0 cursor-pointer">Register
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* hero section */}
      <section className="flex flex-col justify-between gap-6 sm:gap-10 lg:flex-row px-30" id
      ="home">
        <div className="flex flex-col justify-center lg:w-1/2">
          <p data-aos="fade-right" className="font-semibold text-white text-lg">
            <span className="text-[#753D88] text-6xl">S T E P</span> Into The
          </p>

          <h1 data-aos="fade-right" className="mb-6 text-4xl font-bold text-white md:text-5xl">
            F <span className="text-[#753D88]">U</span> T <span className="text-[#753D88]">U</span> R E
          </h1>

          <p data-aos="fade-up" className="text-white">This stylish shoe is perfect for any occasion. <br />
Comfortable, trendy, and made to last.</p>

          <div data-aos="fade-up" className="flex gap-3 mt-10">
            <a className="rounded-lg bg-[#753D88] px-8 py-3 text-white font-semibold cursor-pointer">
              Get Started
            </a>
            <a className="rounded-lg bg-gray-200 px-8 py-3 text-gray-600 font-semibold cursor-pointer" href="#team">
              Our Team
            </a>
          </div>
        </div>

        <div data-aos="zoom-in" className="hero-img image-wrapper lg:w-1/2 mr-20 overflow-visible relative">
          <div className="overlay-text2">
            500K Users⭐⭐⭐
          </div>
          <img
            src={hero}
            alt=""
            className="transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="overlay-text absolute bottom-10 left-10 text-white font-bold text-2xl">
            Variety to Quality⭐⭐⭐
          </div>
        </div>
      </section>

      {/* feature section */}
      <section className="text-white body-font" id="features">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div data-aos="fade-right" className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="shoe feature"
              className="object-cover object-center h-full w-full"
              src={feature}
            />
          </div>

          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div data-aos="fade-left" className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-800 mb-5">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-groww">
                <h2 className="text-2xl font-semibold mb-3">Premium Comfort</h2>
                <p className="leading-relaxed text-base">
                  Our shoes are designed to provide maximum comfort all day long.
                </p>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="200" className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-800 mb-5">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-groww">
                <h2 className="text-2xl font-semibold mb-3">Stylish Design</h2>
                <p className="leading-relaxed text-base">
                  Trendy designs that match any outfit.
                </p>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="400" className="flex flex-col mb-10 lg:items-start items-center">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-purple-200 text-purple-800 mb-5">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-groww">
                <h2 className="text-2xl font-semibold mb-3">Durable Quality</h2>
                <p className="leading-relaxed text-base">
                  Made from high-quality materials for long-lasting use.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* our team */}
      <div class=" py-6 sm:py-8 lg:py-12" id="team">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
   
    <div data-aos="fade-up" class="mb-10 md:mb-16 ">
      <h2 class=" text-center text-2xl font-bold text-[#bcb1c0] md:mb-6 lg:text-3xl">Meet our Team</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-200 md:text-lg">"Our dedicated team of experts is committed to bringing you the best in style, comfort, and innovation. Meet the people who make it all happen."</p>
    </div>


    <div data-aos="fade-left" class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8  drop-shadow-[0_0_20px_rgba(128,0,128,0.7)] ">

      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8 transform transition duration-500 hover:shadow-2xl hover:scale-105">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32 transform transition duration-500 hover:shadow-2xl hover:scale-105">
          <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">John McCulling</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Founder / CEO</p>

       
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
         
        </div>
      </div>
    

     {/* person */}
      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8 transform transition duration-500 hover:shadow-2xl hover:scale-105">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32 transform transition duration-500 hover:shadow-2xl hover:scale-105">
          <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">Kate Berg</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">CFO</p>

          
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
         
        </div>
      </div>
     
      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8 transform transition duration-500 hover:shadow-2xl hover:scale-105">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32 transform transition duration-500 hover:shadow-2xl hover:scale-105">
          <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">Greg Jackson</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">CTO</p>

       
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
      
        </div>
      </div>
   
      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8 transform transition duration-500 hover:shadow-2xl hover:scale-105">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32 transform transition duration-500 hover:shadow-2xl hover:scale-105">
          <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Midas Hofstra" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">Robert Greyson</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Creative Director</p>

          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        
        </div>
      </div>
     
      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8 transform transition duration-500 hover:shadow-2xl hover:scale-105">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32 transform transition duration-500 hover:shadow-2xl hover:scale-105">
          <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Elizeu Dias" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">John Roberts</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Investor Relations</p>

        
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8 transform transition duration-500 hover:shadow-2xl hover:scale-105">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32 transform transition duration-500 hover:shadow-2xl hover:scale-105">
          <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Matheus Ferrero" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">Judy Amandez</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Senior Art Director</p>

          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        
        </div>
      </div>
      
      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8 transform transition duration-500 hover:shadow-2xl hover:scale-105">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32 transform transition duration-500 hover:shadow-2xl hover:scale-105">
          <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Leilani Angel" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">Rahul Williams</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Creative Director</p>

      
          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8 transform transition duration-500 hover:shadow-2xl hover:scale-105">
        <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32 transform transition duration-500 hover:shadow-2xl hover:scale-105">
          <img src="https://images.unsplash.com/photo-1562904403-a5106bef8319?auto=format&q=75&fit=crop&w=256" loading="lazy" alt="Photo by Jernej Graj" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="text-center font-bold text-indigo-500 md:text-lg">Ari Ferris</div>
          <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">Marketing Analyst</p>

          <div class="flex justify-center">
            <div class="flex gap-4">
              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</div>

{/* pricing */}

<section data-aos="fade-right" class="text-gray-200 body-font" id="pricing">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20 drop-shadow-[0_0_20px_rgba(128,0,128,0.7)]">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-100">Pricing</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">"Find the perfect shoe plan for you. Affordable, flexible, and designed to give you the ultimate style and comfort."</p>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Plan</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Speed</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Storage</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price</th>
            <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">Start</td>
            <td class="px-4 py-3">5 Mb/s</td>
            <td class="px-4 py-3">15 GB</td>
            <td class="px-4 py-3 text-lg text-gray-900">Free</td>
            <td class="w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Pro</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-gray-200 px-4 py-3">Business</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
            <td class="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
            <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
            <td class="border-t-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
          <tr>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
            <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
            <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              <input name="plan" type="radio"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <a class="text-purple-900 inline-flex items-center md:mb-2 lg:mb-0">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <button class="flex ml-auto text-white bg-[#753D88] border-0 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded">Button</button>
    </div>
  </div>
</section>

 {/* Blog Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-5">
          <h2 data-aos="fade-down" className="text-3xl font-bold text-center mb-6">
            Our Latest Blogs
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-center text-gray-300 mb-12">
            Get insights, tips, and stories from our experts and community.
          </p>

          <div className="grid md:grid-cols-5 gap-8 drop-shadow-[0_0_20px_rgba(128,0,128,0.7)]">
            {/* Blog Card 1 */}
            <div data-aos="fade-up" className="bg-purple-500 border border-gray-700 rounded-xl shadow-xl  overflow-hidden hover:shadow-2xl transition duration-500">
              <img src={blog1} alt="Blog 1" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">5 Tips for Choosing Perfect Shoes</h3>
                <p className="text-gray-300 mb-4">Learn how to pick the best shoes for comfort and style, every day.</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                  Read More
                </button>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-purple-500 border border-gray-700 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
              <img src={blog2} alt="Blog 2" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Top Shoe Trends 2025</h3>
                <p className="text-gray-300 mb-4">Explore the latest trends in shoes and how to style them effortlessly.</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                  Read More
                </button>
              </div>
            </div>
            {/* blog3 */}

              <div data-aos="fade-up" data-aos-delay="100" className="bg-purple-500 border border-gray-700 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
              <img src={blog4} alt="Blog 2" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Top Shoe Trends 2025</h3>
                <p className="text-gray-300 mb-4">Explore the latest trends in shoes and how to style them effortlessly.</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                  Read More
                </button>
              </div>
            </div>
            

            {/* blog4 */}
              <div data-aos="fade-up" data-aos-delay="100" className="bg-purple-500 border border-gray-700 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
              <img src={blog5} alt="Blog 2" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Top Shoe Trends 2025</h3>
                <p className="text-gray-300 mb-4">Explore the latest trends in shoes and how to style them effortlessly.</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                  Read More
                </button>
              </div>
            </div>

            {/* blog5 */}
              <div data-aos="fade-up" data-aos-delay="100" className="bg-purple-500 border border-gray-700 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
              <img src={blog6} alt="Blog 2" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Top Shoe Trends 2025</h3>
                <p className="text-gray-300 mb-4">Explore the latest trends in shoes and how to style them effortlessly.</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                  Read More
                </button>
              </div>
            </div>
            {/* Blog Card 6 */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-purple-500 border border-gray-700 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
              <img src={blog3} alt="Blog 3" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">How to Maintain Your Shoes</h3>
                <p className="text-gray-300 mb-4">Keep your shoes looking new with these simple maintenance tips.</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                  Read More
                </button>
              </div>
            </div>
            {/* block7 */}
             <div data-aos="fade-up" data-aos-delay="100" className="bg-purple-500 border border-gray-700 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
              <img src={blog7} alt="Blog 2" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Top Shoe Trends 2025</h3>
                <p className="text-gray-300 mb-4">Explore the latest trends in shoes and how to style them effortlessly.</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                  Read More
                </button>
              </div>
            </div>
            {/* block8 */}
             <div data-aos="fade-up" data-aos-delay="100" className="bg-purple-500 border border-gray-700 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
              <img src={blog8} alt="Blog 2" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Top Shoe Trends 2025</h3>
                <p className="text-gray-300 mb-4">Explore the latest trends in shoes and how to style them effortlessly.</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                  Read More
                </button>
              </div>
            </div>
            {/* block9 */}
             <div data-aos="fade-up" data-aos-delay="100" className="bg-purple-500 border border-gray-700 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
              <img src={blog9} alt="Blog 2" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Top Shoe Trends 2025</h3>
                <p className="text-gray-300 mb-4">Explore the latest trends in shoes and how to style them effortlessly.</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                  Read More
                </button>
              </div>
            </div>
            {/* block10 */}
             <div data-aos="fade-up" data-aos-delay="100" className="bg-purple-500 border border-gray-700 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
              <img src={blog10} alt="Blog 2" className="w-full h-48 object-cover"/>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">Top Shoe Trends 2025</h3>
                <p className="text-gray-300 mb-4">Explore the latest trends in shoes and how to style them effortlessly.</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
    
<section className="py-20  text-white" id="contact">
  <div className="container mx-auto px-5">
    <h2 data-aos="fade-down" className="text-3xl font-bold text-center mb-6">
      Contact Me
    </h2>
    <p data-aos="fade-up" data-aos-delay="200" className="text-center text-gray-300 mb-12">
      Have a question or want to work together? Fill out the form below and I’ll get back to you.
    </p>

    <div className="max-w-3xl mx-auto bg-[#512873] rounded-xl drop-shadow-[0_0_20px_rgba(128,0,128,0.7)] p-8" data-aos="fade-up" data-aos-delay="300">
      <form className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2" htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2" htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Write your message..."
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>

{/* footer */}

<footer className="border-t text-white py-12 mt-20">
  <div className="container mx-auto px-5">
    <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">

      {/* Logo & About */}
      <div className="md:w-1/3" data-aos="fade-up">
        <img src={logo} alt="Logo" className="w-32 mb-4"/>
        <p className="text-gray-400">
          STEP Shoes – Stylish, comfortable, and durable footwear for everyone.
          Step into the future of footwear today.
        </p>
      </div>

      {/* Quick Links */}
      <div className="md:w-1/3" data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#home" className="hover:text-purple-500 transition">Home</a></li>
          <li><a href="#features" className="hover:text-purple-500 transition">Features</a></li>
          <li><a href="#team" className="hover:text-purple-500 transition">Our Team</a></li>
          <li><a href="#contact" className="hover:text-purple-500 transition">Contact</a></li>
          <li><a href="#pricing" className="hover:text-purple-500 transition">Pricing</a></li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="md:w-1/3" data-aos="fade-up" data-aos-delay="200">
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a href="#" className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition shadow-md">
            <i className="fab fa-facebook-f">facebook</i>
          </a>
          <a href="#" className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition shadow-md">
            <i className="fab fa-twitter">instagram</i>
          </a>
          <a href="#" className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition shadow-md">
            <i className="fab fa-linkedin-in">linkdin</i>
          </a>
          <a href="#" className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition shadow-md">
            <i className="fab fa-instagram">youTube</i>
          </a>
        </div>
      </div>

    </div>

    {/* Bottom Text */}
    <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
      &copy; {new Date().getFullYear()} STEP Shoes. All rights reserved.
    </div>
  </div>
</footer>


    </>
  )
}

export default ShoeWebsite;
