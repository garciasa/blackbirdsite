import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react';

export default function Home() {
  const [visible, setVisible] = useState(false);
  
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [sendText, setSendText] = useState("Send");
  const [successMessage, setSuccessMessage] = useState(false);
  const [failMessage, setFailMessage] = useState(false);

  const isValidForm = () => {
    let errors = {};
    let isValid = true;
    const re = /\S+@\S+\.\S+$/;

    if (name.length <= 0){
      errors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0 || !re.test(email)){
      errors["email"] = true;
      isValid = false;
    }
    if (message.length <= 0){
      errors["message"] = true;
      isValid = false;
    }
    setErrors({...errors});
    return isValid;
  }

  const onSubmit = async(e) => {
    e.preventDefault();

    if (isValidForm()){
      setSendText("Sending...");
      const res = await fetch("/api/contact", {
          body: JSON.stringify({
            name,
            email,
            message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const { error } = await res.json();
        if (error) {
          console.log(error);
          setSuccessMessage(false);
          setFailMessage(true);
          setSendText("Send");
          return;
        }
        
      setSuccessMessage(true);
      setFailMessage(false);
      setSendText("Send");
      setName("");
      setMessage("");
      setEmail("");

    }
  }
  const onMenuButton = () => {
    setVisible(!visible);
  }

  return (
    <>
    <Head>
      <title>BlackBird Cultur Lab</title>
      <link rel="icon" href="/logo.png" />

      <meta property="og:title" content="BlackBird Cultur Lab" key="ogtitle" />
      <meta property="og:description" content="We aim to provide an environment for artists, farmers, scientists, and practitioners from other disciplines to work beyond traditional boundaries." key="ogdesc" />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:url" content="https://blackbirdcultur-lab.com/" key="ogurl"/>
      <meta property="og:image" content="https://blackbirdcultur-lab.com/logo.png" key="ogimage"/>
      <meta property="og:site_name" content="https://blackbirdcultur-lab/" key="ogsitename" />
    </Head>
    <div className="flex flex-col bg-hero-section min-h-screen 2xl:mx-auto max-w-screen-2xl bg-cover bg-center lg:bg-left ">
      <nav className="flex items-center justify-between p-2 h-20 mr-2 ml-2">
        <div className="flex items-center justify-center">
          <Image src="/logo-web.svg" alt="" width="45" height="45" />
          <div className="flex flex-col ml-3">
            <span className="font-architect text-sm text-[#27292B] tracking-wider">BlackBird</span>
            <span className="font-anton text-sm text-[#D99700] uppercase tracking-wider">Cultur Lab</span>
          </div>
        </div>
        <div className="hidden lg:flex space-x-10 mx-4">
          <a href="#about" className="border-b-2 border-transparent text-[#27292B] hover:border-b-2 hover:border-[#F7B520] transition duration-500">About</a>
          <a href="#contact" className="border-b-2 border-transparent text-[#27292B] hover:border-b-2 hover:border-[#F7B520] transition duration-500">Contact</a>
        </div>
        {/* Mobile */}
        <div className={ visible ? `hidden`: `visible lg:hidden`}>
          <button onClick={onMenuButton} className="flex items-center px-3 py-2 border rounded border-[#574646]">
            <svg
              className="fill-current h-3 w-3 text-[#574646]"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={ visible ? 'visible mb-5 lg:hidden' : 'hidden'}>
          <ul className="w-[35vw] md:w-[15vw] bg-[#F4EBCD]/25 py-2 rounded-lg mt-10">
            <li onClick={onMenuButton} className="cursor-pointer font-lat text-right pr-2">X</li>
            <li><a href="#about" className="pl-2 font-lato ">About</a></li>
            <li><a href="#contact" className="pl-2 font-lato">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="flex flex-col flex-1 py-5 md:items-center md:py-10 lg:items-start lg:ml-5 lg:py-48">
        <h1 className="font-lato font-bold text-5xl lg:text-6xl 2xl:text-7xl text-[#574646]">Where arts and</h1>
        <h1 className="font-lato font-bold text-5xl lg:text-6xl 2xl:text-7xl text-[#574646]">farming life meet</h1>
      </div>
    </div>
    <div className="flex flex-col lg:h-screen w-full max-w-screen-2xl 2xl:mx-auto relative" id="about">
      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="flex flex-1 my-7 mb-5 y-7 md:mb-1 lg:mx-7 px-10 mx-auto ">
          <Image src="/photo-house.png" width="700" height="400" className="object-cover rounded-lg" />
        </div>
        <div className="flex flex-col flex-1 text-xs md:text-sm xl:text-lg">
          <div className="flex-1 md:my-7 tracking-wide px-5 lg:mx-0">
            <p className="font-lato text-justify">
              Blackbird Cultur-Lab is a creative cultural laboratory based within a working farm that is
              transitioning towards regenerative agriculture practices. It aims to provide an environment
              for farmers, artists, academics, and practitioners from various disciplines to experiment and
              work beyond traditional boundaries.
            </p>
            <p className="font-lato my-3 text-justify">
              Blackbird Cultur-Lab is run by Oisín O’Connell and Karla Sánchez.
            </p>
            <p className="font-lato my-3 text-justify">
              We both have years of experience of work in the arts, education, social sciences and agriculture.
              We are working to transition our farm from traditional methods to regenerative agriculture.
              We believe in the importance of developing and nurturing all the ecosystem processes; including community dynamics.
            </p>
          </div>
          <div className="flex items-center justify-center lg:place-content-end">
            <a href="#contact" className="mx-10 md:my-10 font-lato font-bold text-white shadow-lg rounded bg-[#574646] py-2 px-4">Learn more</a> 
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2 sm:gap-0 mt-5 md:mt-0 "  >
        <div className="flex flex-1 flex-col md:flex-row">
          <div className="flex justify-center items-center mx-8 ">
            <Image src="/oisin.png" alt="oisin" width="96" height="96" className="rounded-full hidden" /> 
          </div>
          <div className="flex-1 flex flex-col justify-center mx-2 ">
            <blockquote className="relative p-4 border-l-2 border-[#f7b520] quote">
              <p className="mb-2 text-sm lg:text-xl italic">
                <span className="text-xl text-gray-400 leading-none">&ldquo;&nbsp;</span>
                  There is an urgency to look at ecological processes in their broadest sense. We are all interconnected.
                <span className="text-xl text-gray-400 leading-none">&ldquo;&nbsp;</span>
              </p>
              <cite className="text-sm mx-5 lg:text-lg">Oisín O'Connell</cite>
            </blockquote>
          </div>
        </div>
        <div className="flex flex-1 flex-col-reverse md:flex-row lg:mb-5">
          <div className="flex-1 flex flex-col justify-center mx-2 my-4 ">
            <blockquote className="relative p-4 border-r-2 border-[#f7b520] mx-2 quote">
              <p className="mb-2 text-sm italic lg:text-xl">
                <span className="text-xl text-gray-400 leading-none">&ldquo;&nbsp;</span>
                  Learning about regenerative agriculture has forced me to rethink everything I knew about the arts and culture. 
                  This is our way of trying to find a more positive future for our children.
                <span className="text-xl text-gray-400 leading-none">&ldquo;&nbsp;</span>
              </p>
              <cite className="text-sm mx-5 lg:text-lg">Karla Sánchez Zepeda</cite>
            </blockquote>
          </div>
           <div className="flex justify-center items-center mx-8 ">
            <Image src="/karla.png" alt="oisin" width="96" height="96" className="rounded-full" /> 
          </div>
        </div>
      </div>
      <div className="absolute top-0 -right-0 z-[-1] bg-form-landing bg-cover h-[130vh] md:h-screen w-full opacity-40">
      </div>
    </div>
    <div className="w-full 2xl:mx-auto max-w-screen-2xl bg-bg-contact bg-cover opacity-90 min-h-screen" id="contact">
      <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <div className="text-white font-lato mx-10 my-10 text-lg md:flex-1">
              <p>
                We aim to provide an environment for artists, farmers, scientists, and practitioners from other disciplines to work beyond traditional boundaries. 
              </p>
              <p className="my-10 font-lato">
                We are a culture laboratory based within a working farm in Ireland. 
              </p>
            </div>
            <div className="flex-1 flex flex-col text-white content-start sm:my-5 md:my-10  mx-10 font-lato">
             <label htmlFor="name" className="pl-1">Name <span className="text-red-500">*</span></label>
             <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}} className="mb-1 rounded-lg w-full h-9 opacity-70 text-black p-3 focus:outline-none focus:ring-2 focus:ring-[#f7b520] focus:border-transparent" />
             <span className={errors["name"] ? `text-red-500 mb-3` : `hidden mb-3`}> Name is a required field </span>
             <label htmlFor="email" className="pl-1">Email <span className="text-red-500">*</span></label>
             <input type="text" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="mb-1 rounded-lg w-full h-9 opacity-70 text-black p-3 focus:outline-none focus:ring-2 focus:ring-[#f7b520] focus:border-transparent" />
             <span className={errors["email"] ? `text-red-500 mb-3` : `hidden mb-3`}> Email is a required field </span>
             <label htmlFor="message" className="pl-1">Message <span className="text-red-500">*</span></label>
             <textarea rows="10" name="message" value={message} onChange={(e) => {setMessage(e.target.value)}} className="mb-1 rounded-lg w-full opacity-70 text-black p-3 focus:outline-none focus:ring-2 focus:ring-[#f7b520] focus:border-transparent"/>
             <span className={errors["message"] ? `text-red-500 mb-3` : `hidden mb-3`}> Message is a required field </span>
             <div className="w-full flex flex-col items-center justify-center my-5 md:my-10">
                <button onClick={onSubmit} className="mx-10 w-48 font-lato font-bold text-white shadow-lg rounded bg-[#D4AF37]/60 py-2 px-4">{sendText}</button> 
                <span className={successMessage ? `text-green-400 mt-3` : `hidden`}>Thank you! Your message has been sent </span>
                <span className={failMessage ? `text-red-400 mt-3` : `hidden`}>Sorry! we're having troubles to send you message  </span>
             </div>
            </div>
        </div>
        <div className="flex justify-center items-center text-white font-lato">
          <span className="mx-4">Find us here </span>
          <div className="w-10 border-t border-gray-400"></div>
          <div className="mx-3">
            <Image src="/facebook_main_logo.png" width="24" height="24" />
          </div>
          <div className="mx-3">
            <Image src="/twitter_main_logo.png" width="24" height="24" />
          </div>
          <div className="mx-3">
            <Image src="/instagram_main_logo.png" width="24" height="24" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
