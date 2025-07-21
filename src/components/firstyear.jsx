import React, { useState } from 'react';

function FirstYear() {
  const [activeTab, setActiveTab] = useState('physics');

  return (
    <div className="mt-[30vh] bg-gradient-to-t from-[#0F172A] via-[#0A1320] to-black rounded-lg border border-white/10 backdrop-blur-md mx-4 px-4 py-4  lg:mx-40" id="first-year">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 drop-shadow-[0_0_10px_rgba(0,200,255,0.5)] mb-8 text-center">First Year</h1>

      <div className="flex flex-col bg-black p-6 border border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(59,130,246,0.1),transparent_80%)]"></div>
        <div dir="ltr" data-orientation="horizontal" className="w-full relative">
          <div role="tablist" aria-orientation="horizontal" className="inline-flex h-10 items-center justify-center text-muted-foreground bg-black w-full lg:max-w-lg p-1 rounded-lg mb-4 border border-white/10" tabIndex="0" data-orientation="horizontal" style={{ outline: "none" }}>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'physics'}
              aria-controls="radix-:Raefkq:-content-physics"
              data-state={activeTab === 'physics' ? 'active' : 'inactive'}
              id="radix-:Raefkq:-trigger-physics"
              className={`justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm flex items-center gap-2 px-4 py-2.5 font-medium transition-all duration-300 ${activeTab === 'physics' ? 'bg-white/5 text-white' : 'text-white/70 hover:text-white'} w-full rounded-md text-sm`}
              tabIndex="-1"
              data-orientation="horizontal"
              data-radix-collection-item
              onClick={() => setActiveTab('physics')}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-lg text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M223.99908,224a32,32,0,1,0,32.00782,32A32.06431,32.06431,0,0,0,223.99908,224Zm214.172-96c-10.877-19.5-40.50979-50.75-116.27544-41.875C300.39168,34.875,267.63386,0,223.99908,0s-76.39066,34.875-97.89653,86.125C50.3369,77.375,20.706,108.5,9.82907,128-6.54984,157.375-5.17484,201.125,34.958,256-5.17484,310.875-6.54984,354.625,9.82907,384c29.13087,52.375,101.64652,43.625,116.27348,41.875C147.60842,477.125,180.36429,512,223.99908,512s76.3926-34.875,97.89652-86.125c14.62891,1.75,87.14456,10.5,116.27544-41.875C454.55,354.625,453.175,310.875,413.04017,256,453.175,201.125,454.55,157.375,438.171,128ZM63.33886,352c-4-7.25-.125-24.75,15.00391-48.25,6.87695,6.5,14.12891,12.875,21.88087,19.125,1.625,13.75,4,27.125,6.75,40.125C82.34472,363.875,67.09081,358.625,63.33886,352Zm36.88478-162.875c-7.752,6.25-15.00392,12.625-21.88087,19.125-15.12891-23.5-19.00392-41-15.00391-48.25,3.377-6.125,16.37891-11.5,37.88478-11.5,1.75,0,3.875.375,5.75.375C104.09864,162.25,101.84864,175.625,100.22364,189.125ZM223.99908,64c9.50195,0,22.25586,13.5,33.88282,37.25-11.252,3.75-22.50391,8-33.88282,12.875-11.377-4.875-22.62892-9.125-33.88283-12.875C201.74516,77.5,214.49712,64,223.99908,64Zm0,384c-9.502,0-22.25392-13.5-33.88283-37.25,11.25391-3.75,22.50587-8,33.88283-12.875C235.378,402.75,246.62994,407,257.8819,410.75,246.25494,434.5,233.501,448,223.99908,448Zm0-112a80,80,0,1,1,80-80A80.00023,80.00023,0,0,1,223.99908,336ZM384.6593,352c-3.625,6.625-19.00392,11.875-43.63479,11,2.752-13,5.127-26.375,6.752-40.125,7.75195-6.25,15.00391-12.625,21.87891-19.125C384.7843,327.25,388.6593,344.75,384.6593,352ZM369.65538,208.25c-6.875-6.5-14.127-12.875-21.87891-19.125-1.625-13.5-3.875-26.875-6.752-40.25,1.875,0,4.002-.375,5.752-.375,21.50391,0,34.50782,5.375,37.88283,11.5C388.6593,167.25,384.7843,184.75,369.65538,208.25Z"></path></svg>
              <div>Physics Sem</div>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'chemistry'}
              aria-controls="radix-:Raefkq:-content-chemistry"
              data-state={activeTab === 'chemistry' ? 'active' : 'inactive'}
              id="radix-:Raefkq:-trigger-chemistry"
              className={`justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm flex items-center gap-2 px-4 py-2.5 font-medium transition-all duration-300 ${activeTab === 'chemistry' ? 'bg-white/5 text-white' : 'text-white/70 hover:text-white'} w-full rounded-md text-sm`}
              tabIndex="-1"
              data-orientation="horizontal"
              data-radix-collection-item
              onClick={() => setActiveTab('chemistry')}
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-lg text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"></path></svg>
              <div>Chemistry Sem</div>
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
          {activeTab === 'physics' && (
               <>
                  <div className="flex justify-between items-center w-full p-4 mb-2 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-blue-500/30 shadow-lg transition-all duration-300" style={{ transform: "none" }}>
                     <div class="flex items-center gap-3 flex-1 mr-4"><div class="p-2 rounded-lg bg-blue-500/10"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><span class="font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Physics</span></div>
                     <a href="Download" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span class="text-sm font-medium">Download</span></a>
                     <a href="Download" target="_blank" rel="noopener noreferrer" class="block sm:hidden p-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
                  </div>
                  <div className="flex justify-between items-center w-full p-4 mb-2 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-blue-500/30 shadow-lg transition-all duration-300" style={{ transform: "none" }}>
                     <div class="flex items-center gap-3 flex-1 mr-4"><div class="p-2 rounded-lg bg-blue-500/10"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><span class="font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Mathematics I</span></div>
                     <a href="Download" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span class="text-sm font-medium">Download</span></a>
                     <a href="Download" target="_blank" rel="noopener noreferrer" class="block sm:hidden p-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
                  </div>
                  <div className="flex justify-between items-center w-full p-4 mb-2 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-blue-500/30 shadow-lg transition-all duration-300" style={{ transform: "none" }}>
                    <div class="flex items-center gap-3 flex-1 mr-4"><div class="p-2 rounded-lg bg-blue-500/10"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><span class="font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Basic Mechanical Engineering</span></div>
                     <a href="Download" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span class="text-sm font-medium">Download</span></a>
                     <a href="Download" target="_blank" rel="noopener noreferrer" class="block sm:hidden p-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
                  </div>
                  <div className="flex justify-between items-center w-full p-4 mb-2 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-blue-500/30 shadow-lg transition-all duration-300" style={{ transform: "none" }}><div class="flex items-center gap-3 flex-1 mr-4">
                    <div class="p-2 rounded-lg bg-blue-500/10"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><span class="font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Basic Civil & Engineering Mechanincs</span></div>
                     <a href="Download" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span class="text-sm font-medium">Download</span></a>
                     <a href="Download" target="_blank" rel="noopener noreferrer" class="block sm:hidden p-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
                  </div>
                  <div className="flex justify-between items-center w-full p-4 mb-2 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-blue-500/30 shadow-lg transition-all duration-300" style={{ transform: "none" }}>
                    <div class="flex items-center gap-3 flex-1 mr-4"><div class="p-2 rounded-lg bg-blue-500/10"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><span class="font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Basic Computer Engineering</span></div>
                     <a href="Download" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span class="text-sm font-medium">Download</span></a>
                     <a href="Download" target="_blank" rel="noopener noreferrer" class="block sm:hidden p-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
                  </div>
               </>
           )}

          {activeTab === 'chemistry' && (
               <>
                <div class="flex justify-between items-center w-full p-4 mb-2 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-blue-500/30 shadow-lg transition-all duration-300">
                     <div class="flex items-center gap-3 flex-1 mr-4">
                        <div class="p-2 rounded-lg bg-blue-500/10">
                          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                          <span class="font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Chemistry</span>
                          </div>
                          <a href="https://drive.google.com/uc?export=download&amp;id=1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span class="text-sm font-medium">Download</span></a><a href="https://drive.google.com/uc?export=download&amp;id=1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03" target="_blank" rel="noopener noreferrer" class="block sm:hidden p-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
                </div>

                <div class="flex justify-between items-center w-full p-4 mb-2 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-blue-500/30 shadow-lg transition-all duration-300">
                     <div class="flex items-center gap-3 flex-1 mr-4">
                        <div class="p-2 rounded-lg bg-blue-500/10">
                           <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                          <span class="font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Mathmatics - II</span>
                          </div>
                          <a href="https://drive.google.com/uc?export=download&amp;id=1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span class="text-sm font-medium">Download</span></a><a href="https://drive.google.com/uc?export=download&amp;id=1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03" target="_blank" rel="noopener noreferrer" class="block sm:hidden p-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
                </div>
               
                <div class="flex justify-between items-center w-full p-4 mb-2 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-blue-500/30 shadow-lg transition-all duration-300">
                   <div class="flex items-center gap-3 flex-1 mr-4">
                     <div class="p-2 rounded-lg bg-blue-500/10">
                       <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                      <span class="font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">English For Communication</span>
                      </div>
                        <a href="https://drive.google.com/uc?export=download&amp;id=1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span class="text-sm font-medium">Download</span></a><a href="https://drive.google.com/uc?export=download&amp;id=1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03" target="_blank" rel="noopener noreferrer" class="block sm:hidden p-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></a>
                </div>

                <div class="flex justify-between items-center w-full p-4 mb-2 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-blue-500/30 shadow-lg transition-all duration-300">
                  <div class="flex items-center gap-3 flex-1 mr-4">
                     <div class="p-2 rounded-lg bg-blue-500/10">
                       <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                       </svg>
                     </div>
                     <span class="font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Basic Electrical And Electronics Engineering</span>
                   </div>
                   <a href="https://drive.google.com/uc?export=download&amp;id=1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0">
                     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                       <polyline points="7 10 12 15 17 10"></polyline>
                       <line x1="12" y1="15" x2="12" y2="3"></line>
                     </svg>
                     <span class="text-sm font-medium">Download</span>
                   </a>
                   <a href="https://drive.google.com/uc?export=download&amp;id=1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03" target="_blank" rel="noopener noreferrer" class="block sm:hidden p-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0">
                     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                       <polyline points="7 10 12 15 17 10"></polyline>
                       <line x1="12" y1="15" x2="12" y2="3"></line>
                     </svg>
                   </a>
                </div>

               <div class="flex justify-between items-center w-full p-4 mb-2 bg-gradient-to-r from-zinc-900/80 to-black/80 backdrop-blur-sm rounded-lg border border-zinc-800/50 hover:border-blue-500/30 shadow-lg transition-all duration-300">
                 <div class="flex items-center gap-3 flex-1 mr-4">
                   <div class="p-2 rounded-lg bg-blue-500/10">
                     <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                     </svg>
                   </div>
                   <span class="font-medium bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Engineering Graphics</span>
                 </div>
                 <a href="https://drive.google.com/uc?export=download&amp;id=1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 rounded-full text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0">
                   <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                     <polyline points="7 10 12 15 17 10"></polyline>
                     <line x1="12" y1="15" x2="12" y2="3"></line>
                   </svg>
                   <span class="text-sm font-medium">Download</span>
                 </a>
                 <a href="https://drive.google.com/uc?export=download&amp;id=1NruwnuuNiJJfPuCunFYO7dTSyUvLMr03" target="_blank" rel="noopener noreferrer" class="block sm:hidden p-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-gray-200 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300" tabindex="0">
                   <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                     <polyline points="7 10 12 15 17 10"></polyline>
                     <line x1="12" y1="15" x2="12" y2="3"></line>
                   </svg>
                 </a>
               </div>

               </>
         )}
         </div>
        </div>
      </div>
    </div>
  );
}

export default FirstYear;
