import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Lato&family=Architects+Daughter&display=swap" rel="stylesheet" />
    </Head>
    <div className="flex flex-col bg-hero-section min-h-screen 2xl:mx-auto max-w-screen-2xl bg-cover bg-center lg:bg-left ">
      <nav className="flex items-center justify-between p-2 h-20 mr-2 ml-2">
        <div className="flex items-center justify-center">
          <Image src="/logo-web.svg" alt="" width="40" height="40" />
          <div className="flex flex-col ml-3">
            <span className="font-architect text-sm text-[#27292B] tracking-wider">BlackBird</span>
            <span className="font-anton font-bold text-xs text-[#27292B] uppercase">Cultur Lab</span>
          </div>
        </div>
        <div className="hidden lg:flex space-x-10 mx-4">
          <a href="#" className="border-b-2 border-transparent text-[#27292B] hover:border-b-2 hover:border-[#F7B520] transition duration-500">About</a>
          <a href="#" className="border-b-2 border-transparent text-[#27292B] hover:border-b-2 hover:border-[#F7B520] transition duration-500">News</a>
          <a href="#" className="border-b-2 border-transparent text-[#27292B] hover:border-b-2 hover:border-[#F7B520] transition duration-500">Contact</a>
        </div>
        {/* Mobile */}
        <div className="lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </nav>
      <div className="flex flex-col flex-1 py-5 md:items-center md:py-10 lg:items-start lg:ml-5 lg:py-48">
        <h1 className="font-lato font-bold text-5xl lg:text-6xl 2xl:text-7xl text-[#4F5154]">Where arts and</h1>
        <h1 className="font-lato font-bold text-5xl lg:text-6xl 2xl:text-7xl text-[#4F5154]">farming life meet</h1>
      </div>
    </div>
    <div className="flex flex-col h-screen w-full max-w-screen-2xl 2xl:mx-auto relative">
      <div className="flex flex-1 flex-col my-5 mx-5 lg:flex-row">
        <div className="flex flex-1 justify-center items-center">
          <Image src="/photo-house.png" alt="photo description" width="700" height="400" className="rounded-lg" /> 
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex-1 my-7 tracking-wide text-lg px-5">
            <p className="font-lato text-justify">
            Blackbird Cultur-Lab is run by Oisín O’Connell and Karla Sánchez.
            </p>
            <p className="font-lato my-5 text-justify">
              We both have years of experience of work in the arts, education, social sciences and agriculture.
              We are working to transition our farm from traditional methods to regenerative agriculture.
              We believe in the importance of developing and nurturing all the ecosystem processes; including community dynamics.
            </p>
          </div>
          <div className="flex place-content-end">
            <button className="mx-10 my-10 font-lato font-bold text-white shadow-lg rounded bg-[#574646] py-2 px-4">Learn more</button> 
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1" >
        <div className="flex-1">
          block 2
        </div>
        <div className="flex-1">
          block 3
        </div>
      </div>
      <div className="absolute top-0 -right-0.5 z-[-1]">
        <svg className="fill-current h-screen w-full opacity-70" viewBox="0 0 473 1010" xmlns="http://www.w3.org/2000/svg">
        <path d="M115.8 1024L137.4 1002.67C159 981.333 202.2 938.667 205.88 896C209.72 853.333 173.88 810.667 123.8 768C73.72 725.333 9.08 682.667 25.72 640C42.2 597.333 139.8 554.667 150.2 512C160.6 469.333 83.8 426.667 74.52 384C65.08 341.333 123.32 298.667 122.2 256C121.08 213.333 60.92 170.667 30.68 128C0.599957 85.3333 0.599976 42.6667 0.599976 21.3333V0H511V21.3333C511 42.6667 511 85.3333 511 128C511 170.667 511 213.333 511 256C511 298.667 511 341.333 511 384C511 426.667 511 469.333 511 512C511 554.667 511 597.333 511 640C511 682.667 511 725.333 511 768C511 810.667 511 853.333 511 896C511 938.667 511 981.333 511 1002.67V1024H115.8Z" fill="#F4EBCD"/>
        </svg>
      </div>
    </div>
    <div className="bg-blue-100 h-screen w-full 2xl:mx-auto max-w-screen-2xl">
     Contact page
    </div>
    </>
  )
}
