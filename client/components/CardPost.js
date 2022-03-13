import Image from 'next/image';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import AuthorCard from './AuthorCard';


export default function CardPost({isMain=false, imageUrl, slug, content, author, title}){
    return(
        <div className="max-w-2xl rounded-lg overflow-hidden shadow-lg">
            {!isMain && 
                <Link href={`/blog/${slug}`}>
                    <a className='hover:cursor-pointer'>
                        <Image className="w-full" layout="responsive" width="640" height="400" src={imageUrl} alt="Mountain" />
                    </a>
                </Link>}
            <div className="px-6 py-4">

                <div className="font-bold text-xl mb-2">
                    <Link href={`/blog/${slug}`}>
                       {title} 
                    </Link>
                </div>
                <div className="text-gray-700 text-base">
                        <ReactMarkdown>
                            {`${content.substring(0,240)}...`}
                        </ReactMarkdown>
                </div>
            </div>
            <AuthorCard author={author} />
        </div>
    );
}