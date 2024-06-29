import Image from "next/image";
import Link from "next/link";
import Socials from "@/components/Socials";

function Header() {
	return ( 
		<header className="absolute w-full z-10">
			<div className="container mx-1 sm:mx-auto">
				<div className="w-full flex items-center justify-between pt-2">
					<Link href="/" className="text-2xl sm:text-3xl">
						<strong>m<span className="hidden sm:inline">ikhail</span><span className="inline sm:hidden">.</span></strong> 
						<span className="text-accent ml-0 sm:ml-2">biketoff</span>
					</Link>
					<Socials />
				</div>
			</div>
		</header>
	 );
}

export default Header;