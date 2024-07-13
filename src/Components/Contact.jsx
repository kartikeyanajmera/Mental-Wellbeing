import React from 'react';

function message(){
  alert("Message sent!");
}

const ContacthtmlForm = () => {
  
  return (

    <div className="flex flex-col items-center justify-center bg-gray-800 h-screen dark">

<div className="relative mb-12 p-10 flex w-96 flex-col rounded-xl bg-gray-700 text-gray-200 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50">
  <div className="relative mx-4 -mt-6 mb-4 grid h-16 place-items-center overflow-hidden rounded-xl bag-gradient-to-tr from-indigo-400 to-indigo-400 bg-clip-border text-gray-200 ">
    <h3 className="block font-sans text-3xl font-semibold leading-snug tracking-normal text-gray-300 antialiased">
      Contact Us
    </h3>
  </div>
  <div className="flex flex-col gap-4 p-6">
    <div className="relative h-11 w-full min-w-[200px]">
      <input placeholder="E-mail" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"/>
      <label className="behtmlFore:content[' '] after:content[' '] pointer-events-none absolute left-1/2 transform -translate-x-1/2 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all behtmlFore:pointer-events-none behtmlFore:mt-[6.5px] behtmlFore:mr-1 behtmlFore:box-border behtmlFore:block behtmlFore:h-1.5 behtmlFore:w-2.5 behtmlFore:rounded-tl-md behtmlFore:border-t behtmlFore:border-l behtmlFore:border-blue-gray-200 behtmlFore:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:behtmlFore:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:behtmlFore:border-t-2 peer-focus:behtmlFore:border-l-2 peer-focus:behtmlFore:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:behtmlFore:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input placeholder="Phone no" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"/>
      <label className="behtmlFore:content[' '] after:content[' '] pointer-events-none absolute left-1/2 transform -translate-x-1/2 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all behtmlFore:pointer-events-none behtmlFore:mt-[6.5px] behtmlFore:mr-1 behtmlFore:box-border behtmlFore:block behtmlFore:h-1.5 behtmlFore:w-2.5 behtmlFore:rounded-tl-md behtmlFore:border-t behtmlFore:border-l behtmlFore:border-blue-gray-200 behtmlFore:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:behtmlFore:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:behtmlFore:border-t-2 peer-focus:behtmlFore:border-l-2 peer-focus:behtmlFore:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:behtmlFore:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input type='text' placeholder="Message" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"/>
      <label className=" behtmlFore:content[' '] after:content[' '] pointer-events-none absolute left-1/2 transform -translate-x-1/2 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all behtmlFore:pointer-events-none behtmlFore:mt-[6.5px] behtmlFore:mr-1 behtmlFore:box-border behtmlFore:block behtmlFore:h-1.5 behtmlFore:w-2.5 behtmlFore:rounded-tl-md behtmlFore:border-t behtmlFore:border-l behtmlFore:border-blue-gray-200 behtmlFore:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:behtmlFore:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:behtmlFore:border-t-2 peer-focus:behtmlFore:border-l-2 peer-focus:behtmlFore:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:behtmlFore:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        
      </label>
    </div>
    <div className="relative h-11 w-full min-w-[200px]">
      <input type="date" placeholder="Date" className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"/>
      <label className="behtmlFore:content[' '] after:content[' '] pointer-events-none absolute left-1/2 transform -translate-x-1/2 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all behtmlFore:pointer-events-none behtmlFore:mt-[6.5px] behtmlFore:mr-1 behtmlFore:box-border behtmlFore:block behtmlFore:h-1.5 behtmlFore:w-2.5 behtmlFore:rounded-tl-md behtmlFore:border-t behtmlFore:border-l behtmlFore:border-blue-gray-200 behtmlFore:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:behtmlFore:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-500 peer-focus:behtmlFore:border-t-2 peer-focus:behtmlFore:border-l-2 peer-focus:behtmlFore:!border-cyan-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-cyan-500 peer-disabled:text-transparent peer-disabled:behtmlFore:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        
      </label>
    </div>
  </div>
  <div className="p-6 pt-0">
    <button onClick={message} data-ripple-light="true" type="button" className="block w-full select-none rounded-lg bg-gradient-to-tr from-cyan-600 to-cyan-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Get In Touch
    </button>
  </div>
</div>

    </div>


  );
};

export default ContacthtmlForm;
