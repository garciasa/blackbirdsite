import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import AuthorCard from "../../components/AuthorCard";
import NavMenu from "../../components/NavMenu";
import SocialFooter from "../../components/SocialFooter";


export async function getServerSideProps({params}){
    const resp = await fetch(
        `https://blackbirdcultur-lab-cms.azurewebsites.net/api/posts?filters[slug]=${params.slug}&populate=cover,author`
    );
    return {
        props: {
            post: await resp.json()
        }
    }
}

export default function Page({post}) {
    const MarkdownComponents = {
    img: ({node, ...props}) => <Image {...props} src={node.properties.src} height="75%" width="100%" layout="responsive" objectFit="cover" />,
    };
    const {attributes} = post.data[0];
    return(
        <>
            <Head>
                <title>BlackBird Cultur Lab</title>
                <link rel="icon" href="/logo.png" />
                <meta property="og:title" content={attributes.title} key="ogtitle" />
                <meta property="og:description" content={attributes.ogdescription} key="ogdesc" />
                <meta property="og:type" content="website" key="ogtype" />
                <meta property="og:url" content={`https://blackbirdcultur-lab.com/blog/${attributes.slug}`} key="ogurl"/>
                <meta property="og:image" content={attributes.cover.data.attributes.formats.thumbnail.url} key="ogimage"/>
                <meta property="og:site_name" content="https://blackbirdcultur-lab/" key="ogsitename" />
            </Head>
            <div className="absolute bg-bottom top-0 right-0 z-[-1] bg-blog-form-1 bg-cover h-screen w-full opacity-30"></div>
            <div className="flex flex-col 2xl:mx-auto max-w-screen-2xl">
                <NavMenu />
                <article className="flex flex-col p-4 font-lato">
                    <div className="relative md:h-[32rem] h-48 w-full">
                        <Image className="rounded-lg" src={attributes.cover.data.attributes.url} layout="fill" objectFit="cover" alt="cover image Post"/>
                    </div>
                    <div className="flex-1">
                        <AuthorCard author={attributes.author} publishedAt={attributes.publishedAt} />
                    </div>
                    <div className="flex-1 text-3xl text-black font-bold">
                        {attributes.title}
                    </div>
                    <div className="flex-1 text-base  text-justify space-y-6 prose prose md:max-w-none">
                        <ReactMarkdown 
                            linkTarget="_blank"
                            children={attributes.content}
                            components={MarkdownComponents}
                        />
                    </div>
                </article>
                <div className="p-4">
                    <Link href="/blog">
                        <button className="bg-[#D99700] text-white font-bold py-2 rounded-full w-24">
                            Back
                        </button>   
                    </Link>
                </div>
                <SocialFooter type="negative" />
            </div>
        </>
    );
}
