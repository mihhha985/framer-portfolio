import Link from "next/link";
import {
	RiWhatsappLine,
	RiTelegramLine,
	RiInstagramLine, 
	RiFacebookLine,
} from "react-icons/ri";

function Socials() {
	return ( 
		<div className="flex items-center gap-x-2 sm:gap-x-5 text-2xl">
			<Link href={'https://t.me/+79282928971'} target="_blank" className="hover:text-accent transition-all duration-300">
				<RiTelegramLine />
			</Link>
			<Link href={'https://wa.me/79887395651'} target="_blank" className="hover:text-accent transition-all duration-300">
				<RiWhatsappLine />
			</Link>
			<Link href={''} className="hover:text-accent transition-all duration-300">
				<RiInstagramLine />
			</Link>
			<Link href={''} className="hover:text-accent transition-all duration-300">
				<RiFacebookLine />
			</Link>
		</div>
	);
}

export default Socials;