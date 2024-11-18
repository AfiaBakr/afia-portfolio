
import react from "react";
import { CodeBracketIcon, EyeIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import Project from "./Projects";




const ProjectCards= ({title, description, imgUrl, gitUrl, previewUrl}:any) => {
    return(
        <div>
            <div className="h-52 md:h-72 rounded-t-xl hover:opacity-50 relative group" style={{background: `url(${imgUrl})`, backgroundSize:"cover"}}>
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#1212123] bg-opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500">
            <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link">
            <CodeBracketIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 lef-1/2 mx-7 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
            </Link>

            <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link">
            <EyeIcon className="h-10 w-10 text-[#adb7be] absolute top-1/2 lef-1/2 mx-7 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
            </Link>
            </div>
            </div>
            <div className="text-white rounded-b-xl mt-2 bg-[#181818] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-[#adb7be]">{description}</p>
            </div>
        </div>
    )
};

export default ProjectCards;