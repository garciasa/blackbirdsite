import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet" />
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
        <h1 className="font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#4F5154]">Where arts and</h1>
        <h1 className="font-bold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#4F5154]">farming life meet</h1>
      </div>
    </div>
    <div className="bg-gray-100 h-screen w-full bg-cover bg-center">
     Details page 
    </div>
    <div className="bg-blue-100 h-screen w-full bg-center">
     Contact page
    </div>
    </>
  )
}
