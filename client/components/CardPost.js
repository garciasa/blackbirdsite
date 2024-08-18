import Image from 'next/image';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import AuthorCard from './AuthorCard';


export default function CardPost({isMain=false, imageUrl, slug, content, author, title, publishedAt}){
    const MarkdownComponents = {
      //img: ({node, ...props}) => <Image {...props} objectFit="cover" src={node.properties.src} height="376" width="500"  />,
      img: () => <br />,
      h1: () => <br />,
      h2: () => <br />,
      h3: () => <br />,
  };
    return(
        <div className="max-w-2xl rounded-lg overflow-hidden shadow-lg">
            {!isMain && 
                <Link href={`/blog/${slug}`}>
                    <a className='hover:cursor-pointer'>
                        <Image className="w-full" objectFit="cover" width="500" height="376" src={imageUrl} alt="Main image post" />
                    </a>
                </Link>}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <Link href={`/blog/${slug}`}>
                       {title} 
                    </Link>
                </div>
                <div className="text-gray-700 text-base prose">
          {/* 
                        <ReactMarkdown>
                            {`${content.substring(0,240)}...`}
                        </ReactMarkdown>
          */}

                        <ReactMarkdown
                          children={`${content.substring(0,200)}...`}
                          components={MarkdownComponents}
                        />
          
                </div>
            </div>
            <AuthorCard author={author} publishedAt={publishedAt} />
        </div>
    );
}
