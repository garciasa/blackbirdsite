import Image from 'next/image';


export default function AuthorCard({ author }){
    const AuthorImage =  author.data.id === 1 ? 
            <Image src="/karla.png" alt="karla" width="36" height="36" className="rounded-full hidden" /> :
            <Image src="/oisin.png" alt="oisin" width="36" height="36" className="rounded-full hidden" />;

    return(
        <div className="flex px-6 pt-4 pb-6">
            {AuthorImage}
            <div className='flex flex-col'>
                <div className='px-3 text-xs'>{author.data.attributes.name}</div>
                <div className='px-3 text-xs text-gray-500 '>{author.data.attributes.role}</div>
            </div>
        </div> 
    )
}

