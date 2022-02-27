import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import NavMenu from '../components/NavMenu';
import SocialFooter from '../components/SocialFooter';

export default function Home() {
  
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
      <NavMenu />
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
        <SocialFooter type="positive" />
      </div>
    </div>
    </>
  )
}
