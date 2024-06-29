import Image from "next/image";
import Link from "next/link";
import {HiArrowRight} from "react-icons/hi2"

function ProjectsBtn() {
	return ( 
		<div className="mx-auto xl:mx-0 relative">
			<Link href={"/work"} className="relative flex items-center justify-center w-[105px] h-[105px] xl:w-[185px] xl:h-[185px]
				bg-circleStar bg-cover bg-center bg-no-repeat group">
				<Image src="/rounded-text.png" width={141} height={148} alt=""
					className="animate-spin-slow mx-auto xl:mx-0 cursor-pointer w-[80px] h-[80px] xl:w-[141px] xl:h-[148px]"
				/>
				<HiArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl
				group-hover:translate-x-1 transition-all duration-300"/>
			</Link>
		</div>
	);
}

export default ProjectsBtn;