import React from "react";
import Image, {type StaticImageData} from "next/image";
import { H3 } from "./ui/H3";

type WebPreviewProps = {
    title: string
    description: string
    img: StaticImageData
    url: string
}


function WebPreview({title, description, img, url} : WebPreviewProps){
    return(
        <div className="max-w-xl">
            <H3 className="text-center">{title}</H3>
            <a href={url} target="_blank">
                <Image className="rounded-md drop-shadow-lg mt-2 max-h-96" src={img} alt={title} width={600} height={600} />
            </a>
            <p className="text-left, mt-4 text-sm text-gray-400">{description}</p>
        </div>
    );
}
export default WebPreview;