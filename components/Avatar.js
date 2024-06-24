import Image from "next/image";

function Avatar() {
	return ( 
		<div className="hidden xl:flex xl:max-w-none mix-blend-lighten">
			<Image 
				src="/avatar.png"
				alt="Avatar"
				width={737}
				height={678}
				quality={100}
			/>
		</div> 
	);
}

export default Avatar;