import {motion} from 'framer-motion';

const transitionVariants = {
	initial: {
		x: '100%',
		width: '100%',
	},
	animate: {
		x: '0%',
		width: '0%',
	},
	exit: {
		x:['0%', '100%'],
		width: ['0%', '100%'],
	}
}

function Transition() {
	return ( 
		<>
			<motion.div 
				variants={transitionVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}
				className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#2e2257] z-30">		
			</motion.div>
			<motion.div 
				variants={transitionVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}
				className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#3b2d71] z-20">		
			</motion.div>
			<motion.div 
				variants={transitionVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}
				className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#4b3789] z-10">		
			</motion.div>
		</>
	);
}

export default Transition;