import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "../../components/NavMenu";
import SocialFooter from "../../components/SocialFooter";

export default function Page() {
    return(
        <>
            <Head>
                <title>BlackBird Cultur Lab</title>
                <link rel="icon" href="/logo.png" />

                <meta property="og:title" content="title of post" key="ogtitle" />
                <meta property="og:description" content="Small description blog" key="ogdesc" />
                <meta property="og:type" content="website" key="ogtype" />
                <meta property="og:url" content="https://blackbirdcultur-lab.com/blog" key="ogurl"/>
                <meta property="og:image" content="https://blackbirdcultur-lab.com/logo.png" key="ogimage"/>
                <meta property="og:site_name" content="https://blackbirdcultur-lab/" key="ogsitename" />
            </Head>
            <div className="absolute bg-bottom top-0 right-0 z-[-1] bg-blog-form-1 bg-cover h-screen w-full opacity-30"></div>
            <div className="flex flex-col 2xl:mx-auto max-w-screen-2xl">
                <NavMenu />
                <article className="flex flex-col p-4 font-lato">
                    <div className="relative md:h-[32rem] h-48 w-full">
                        <Image className="rounded-lg" src="/post-image-2.png" layout="fill" alt="cover image Post"/>
                    </div>
                    <div className="flex-1">
                        <div className="flex pt-4 pb-6">
                            <Image src="/oisin.png" alt="oisin" width="36" height="36" className="rounded-full hidden" />
                            <div className='flex flex-col'>
                                <div className='px-3 text-xs'>Oisín O'Connell</div>
                                <div className='px-3 text-xs text-gray-500 '>Owner</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 text-xl text-black font-bold">
                        People skills needed on large dairy farms
                    </div>
                    <div className="flex-1 text-base text-justify space-y-6">
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of 
                            classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                            discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
                            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
                            on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum 
                            dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                        <p>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 
                            and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied 
                            by English versions from the 1914 translation by H. Rackham.
                        </p>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page 
                            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                            distribution of letters, as opposed to using 'Content here, content here', making it look like 
                            readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
                            their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                    <Link href="/blog"><a className="pt-4 font-lato text-blue-600 hover:text-blue-800 visited:text-purple-600 ">Back</a></Link>
                </article>
                <SocialFooter type="negative" />
            </div>
        </>
    );
}