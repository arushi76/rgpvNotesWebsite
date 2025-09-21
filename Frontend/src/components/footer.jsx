import React from 'react';
function Footer(){
    return(
        <footer className="relative bg-gradient-to-b from-black via-[#0b0b1d] to-[#0e1a36] text-gray-300 pt-20 pb-10 px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-900 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900 rounded-full filter blur-3xl"></div>
                <div className="absolute top-40 right-1/4 w-64 h-64 bg-cyan-800 rounded-full filter blur-3xl"></div>
            </div>
            <div className="relative max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-extrabold text-4xl sm:text-5xl bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6">Share And Support Others
                    </h2>
                    <p className="text-base lg:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Help others learn and grow by sharing your notes. Together,we can create a community where knowledge is Freely available to all.</p>
                    <a href = "https://forms.gle/4UFG3YqpdPXPCXKWA" class="inline-block bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">Submit Your Notes</a>
                </div>
                <div class="border-t border-cyan-900 pt-10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        
                        <div className="flex items-center gap-4 text-center md:text-right">
                             <p className="text-sm flex flex-wrap justify-center md:justify-end items-center gap-1">Made With
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="inline text-red-500 mx-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                                 by
                                <a href = "https://www.linkedin.com/in/arushi-mishra-482b1131b" target="_blank" rel="noopener noreferrer" class="font-bold text-blue-400 hover:text-white transition-colors duration-300 ml-1">Arushi Mishra</a>
                                &
                                <a href = "https://www.linkedin.com/in/krishna-s-lal-1105a233b" target="_blank" rel="noopener noreferrer" class="font-bold text-blue-400 hover:text-white transition-colors duration-300 ml-1">Krishna S Lal</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;
{/*
            <p>Made with love by <a href = "www.linkedin.com/in/arushi-mishra-482b1131b">Arushi Mishra</a> & <a href = "linkedin.com/in/minakshi-chaturvedi-370abb242">Minakshi Chaturvedi</a></p>
*/}

