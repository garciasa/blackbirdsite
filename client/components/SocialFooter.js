import Image from "next/image";

export default function SocialFooter({type}){
    const colorText = type == 'positive' ? 'text-white' : 'text-black';
    const colorLine = type == 'positive' ? 'border-gray-400' : 'border-black';
    return(
        <div className="flex justify-center items-center font-lato pb-10 pt-20">
            <span className={`mx-4 ${colorText}`}>Find us here </span>
            <div className={`w-10 border-t ${colorLine}`}></div>
            {/*
            <div className="mx-3">
                <Image src={`/facebook-${type}.png`} width="24" height="24" />
            </div>
            */}
            <div className="mx-2">
                <a href="https://www.linkedin.com/in/karla-s%C3%A1nchez-o-connell-82148a1a/" target="_blank" alt="linkedin link"><Image src={`/linkedin-${type}.png`} width="24" height="24" /></a>
            </div>
            <div className="mx-2">
                <a href="https://www.instagram.com/blackbirdculturlab/" target="_blank" alt="Instagram link"><Image src={`/instagram-${type}.png`} width="24" height="24" /></a>
            </div>
        </div>
    );
}