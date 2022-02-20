import Head from 'next/head'
import CardPost from '../components/CardPost';
import NavMenu from '../components/NavMenu';
import Image from 'next/image'

export default function Blog(){
    return(
        <>
            <Head>
                <title>BlackBird Cultur Lab</title>
                <link rel="icon" href="/logo.png" />

                <meta property="og:title" content="Blackbird Cultur Lab Blog" key="ogtitle" />
                <meta property="og:description" content="We aim to provide an environment for artists, farmers, scientists, and practitioners from other disciplines to work beyond traditional boundaries." key="ogdesc" />
                <meta property="og:type" content="website" key="ogtype" />
                <meta property="og:url" content="https://blackbirdcultur-lab.com/blog" key="ogurl"/>
                <meta property="og:image" content="https://blackbirdcultur-lab.com/logo.png" key="ogimage"/>
                <meta property="og:site_name" content="https://blackbirdcultur-lab/" key="ogsitename" />
            </Head>
            <div className="absolute bg-bottom top-0 right-0 z-[-1] bg-blog-form-1 bg-cover h-screen w-full opacity-30"></div>
            <div className="flex flex-col 2xl:mx-auto max-w-screen-2xl">
                <NavMenu />
                <div className="flex flex-col md:flex-row px-4 gap-4 pb-6">
                    <div className='flex flex-1 justify-center'>
                        <Image className='rounded-lg' src="/post-image-4.png" width={640} height={400}/>
                    </div>
                    <div className='flex flex-col flex-1 justify-center'>
                        <div class="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Main Post</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="flex px-6 pt-4 pb-6">
                            <Image src="/karla.png" alt="oisin" width="36" height="36" className="rounded-full hidden" />
                            <div className='flex flex-col'>
                                <div className='px-3 text-xs'>Karla Sánchez Zepeda</div>
                                <div className='px-3 text-xs text-gray-500 '>Owner</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 justify-items-center px-4 gap-4 '>
                    <CardPost imageUrl="/post-image.png" />                    
                    <CardPost imageUrl="/post-image-1.png" />
                    <CardPost imageUrl="/post-image-2.png" />
                </div>
            </div>
            <div className="flex justify-center items-center font-lato pb-10 pt-20">
                <span className="mx-4">Find us here </span>
                <div className="w-10 border-t border-gray-400"></div>
                <div className="mx-3">
                    <Image src="/facebook-negative.png" width="24" height="24" />
                </div>
                <div className="mx-3">
                    <Image src="/twitter-negative.png" width="24" height="24" />
                </div>
                <div className="mx-3">
                    <Image src="/instagram-negative.png" width="24" height="24" />
                </div>
            </div>
        </>
    );
}