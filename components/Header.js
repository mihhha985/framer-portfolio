import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Socials";

function Header() {
	return ( 
		<header className="absolute w-full z-10 flex items-center px-16 xl:px-0 xl:h-[90px]">
			<div className="container mx-auto">
				<div className="w-full flex flex-col lg:flex-row items-center justify-between gap-y-6">
					<Link href="/">
						<Image 
							src="/logo.svg" 
							width={220} 
							height={48} 
							alt="Logo" 
							priority={true} 
							className="cursor-pointer" 
						/>
					</Link>
					<Socials />
				</div>
			</div>
		</header>
	 );
}

export default Header;