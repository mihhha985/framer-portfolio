import { useStore } from "../state/lanState";

function Tumbler() {
	const setIsEn = useStore((state) => state.setIsEn);
	const isEn = useStore((state) => state.isEn);

	return ( 
		<div
			onClick={() => setIsEn()} 
			className="flex items-center gap-x-2 ml-5">
			<span className="text-xl">RU</span>
			<div className={`relative w-[60px] h-[30px] bg-white rounded-2xl flex items-center px-[2px] cursor-pointer
				${isEn ? 'justify-end' : 'justify-start'}
			`}>
				<div className="w-[28px] h-[28px] bg-accent rounded-full"></div>
			</div>
			<span className="text-xl">EN</span>
		</div>
	);
}

export default Tumbler;