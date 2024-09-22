import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import ReactMarkdown from 'react-markdown';
import CardPost from '../../components/CardPost';
import NavMenu from '../../components/NavMenu';
import SocialFooter from '../../components/SocialFooter';
import AuthorCard from '../../components/AuthorCard';

export async function getServerSideProps() {
    const resp = await fetch(
        "https://blackbirdcultur-lab-cms.azurewebsites.net/api/posts?sort=createdAt:DESC&populate=cover,author"
    );
    return {
        props: {
            posts: await resp.json()
        }
    }
}


export default function Blog({ posts }) {
    // We consider mainPost the most recent
    const mainPost = posts.data[0];
    const restPosts = posts.data.slice(1);

    const MarkdownComponents = {
        img: ({ node, ...props }) => <Image {...props} alt="image inside the post" objectFit="cover" src={node.properties.src} height="376" width="500" />,
        //img: () => <br />,
    };

    return (
        <>
            <Head>
                <title>BlackBird Cultur Lab</title>
                <link rel="icon" href="/logo.png" />

                <meta property="og:title" content="Blackbird Cultur Lab Blog" key="ogtitle" />
                <meta property="og:description" content="This page is about blogging for artists, farmers, scientists, and practitioners from other disciplines to work beyond traditional boundaries." key="ogdesc" />
                <meta property="og:type" content="blog" key="ogtype" />
                <meta property="og:url" content="https://blackbirdcultur-lab.com/blog" key="ogurl" />
                <meta property="og:image" content="https://blackbirdcultur-lab.com/logo.png" key="ogimage" />
                <meta property="og:site_name" content="https://blackbirdcultur-lab/" key="ogsitename" />
            </Head>
            <div className="absolute bg-bottom top-0 right-0 z-[-1] bg-blog-form-1 bg-cover h-screen w-full opacity-30"></div>
            <div className="flex flex-col 2xl:mx-auto max-w-screen-2xl">
                <NavMenu />
                <div className="flex flex-col md:flex-row px-4 gap-4 pb-6">
                    <div className='flex flex-1 justify-center hover:cursor-pointer'>
                        <Link href={`/blog/${mainPost.attributes.slug}`}>
                            <a>
                                <Image alt="small image inside the blog post" className='rounded-lg' src={mainPost.attributes.cover.data.attributes.formats.small.url} width={640} height={400} />
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-col flex-1 justify-center'>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                <Link href={`/blog/${mainPost.attributes.slug}`}>
                                    {mainPost.attributes.title}
                                </Link>
                            </div>
                            <div className="text-gray-700 text-base prose">
                                <ReactMarkdown
                                    linkTarget={"_blank"}
                                    children={`${mainPost.attributes.content.substring(0, 350)}...`}
                                    components={MarkdownComponents}
                                />

                            </div>
                        </div>
                        {(mainPost.attributes.author !== null || mainPost.attributes.author !== undefined) &&
                            <AuthorCard author={mainPost.attributes.author} publishedAt={mainPost.attributes.publishedAt} />
                        }
                    </div>
                </div>
                <div className='grid md:grid-cols-3 justify-items-center px-4 gap-4 '>
                    {restPosts.map(p =>
                        <CardPost key={p.id}
                            imageUrl={p.attributes.cover.data.attributes.formats.small.url}
                            slug={p.attributes.slug}
                            content={p.attributes.content}
                            author={p.attributes.author}
                            title={p.attributes.title}
                            publishedAt={p.attributes.publishedAt}
                        />)}
                </div>
            </div>
            <SocialFooter type="negative" />
        </>
    );
}
