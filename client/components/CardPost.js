import Image from 'next/image';

export default function CardPost({isMain=false, imageUrl}){
    return(
        <div className="max-w-2xl rounded-lg overflow-hidden shadow-lg">
            {!isMain && <Image className="w-full" layout="responsive" width="640" height="400" src={imageUrl} alt="Mountain" />}
            <div class="px-6 py-4">

                <div className="font-bold text-xl mb-2">Mountain</div>
                <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>

            <div className="flex px-6 pt-4 pb-6">
                <Image src="/oisin.png" alt="oisin" width="36" height="36" className="rounded-full hidden" />
                <div className='flex flex-col'>
                    <div className='px-3 text-xs'>Oisín O'Connell</div>
                    <div className='px-3 text-xs text-gray-500 '>Owner</div>
                </div>
            </div>
        </div>
    );
}