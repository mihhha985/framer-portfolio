import React from 'react';
import { IoCloseCircleSharp, IoCheckmarkCircleSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion"
import { useStore } from '@/state/lanState';

const Modal = ({ modal, close }) => {
	const isEn = useStore(state => state.isEn);

	return (
		<AnimatePresence>
			{modal.isOpen && (
				<motion.div
				initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
				transition={{ duration: 0.3 }}
				onClick={close} 
				className="fixed inset-0 bg-[#2e2257]/80 flex items-center justify-center z-50">
				<motion.div
					initial={{ scale: 0.8 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0.8 }}
					transition={{ duration: 0.8, type: 'spring', stiffness: 260, damping: 20}}
					onClick={(e) => e.stopPropagation()} 
					className="w-[300px] sm:w-[380px] h-[280] sm:h-[300px] bg-[#4b3789] text-white rounded-2xl border-2 border-white shadow-lg p-5">
					{modal.type === 'success' &&
						<div className='flex flex-col items-center justify-between h-full w-full text-center'>
							<h4 className='text-2xl'>
								{isEn ? 'Your application has been successfully submitted!' : 'Ваша заявка успешно отправлена!'}
							</h4>
							<IoCheckmarkCircleSharp className='text-5xl text-secondary-200'/>
							<p className='text-lg text-secondary-200'>
								{isEn 
									? 'I will be sure to get back to you, so expect an email to your email address.'
									: 'Я обязательно свяжусь с Bами, ожидайте письма на ваш'
 								} <b>Email: {modal.text}</b></p>
						</div>
					}

					{modal.type === 'error' &&
						<div className='flex flex-col items-center justify-between h-full w-full text-center'>
							<h4>{modal.text}</h4>
							<IoCloseCircleSharp className='text-5xl text-secondary-200'/>
							<p className='text-lg text-secondary-200'>
								{isEn
									?
									'Check your mailbox. If you do not receive an email within an hour, please resend your application.'
									:
									'Проверьте Ваш почтовый ящик если в течении часа Вы не получите письмо, отправьте заявку повторно.'
								}
							</p>
						</div>
					}
				</motion.div>
				<button 
					onClick={close}
					className='absolute top-2 right-2 text-5xl text-white hover:text-slate-200 transition-all duration-300 ease-in-out'
				>
					<IoCloseCircleSharp />
				</button>
			</motion.div>	
			)}
		</AnimatePresence>
	);
};

export default Modal;