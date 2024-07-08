"use client"
import { useReducer } from "react";
import Circles from "@/components/Circles";
import {BsArrowRight} from "react-icons/bs";
import {motion} from "framer-motion";
import { fadeIn } from "@/variants";
import { useForm } from "react-hook-form"
import { useStore } from "@/state/lanState";
import Modal from "@/components/Modal";

const initialState = {
	isOpen: false,
	type: '',
	text: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'success':
			return {isOpen:true, type: 'success', text: action.text };
		case 'error':
			return {isOpen:true, type: 'error', text: action.text };	
		case 'close':
			return {isOpen:false, type: '', text: '' };
    default:
      return state;
  }
};

function Page() {
	const isEn = useStore(state => state.isEn);
	const [modal, dispatch] = useReducer(reducer, initialState);
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const send = async (data) => {
		console.log(data);

		const res = await fetch('/mailer', { 

			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		if (res.ok) {
			dispatch({ type: 'success', text: data.email });
		}else{
			isEn
			? dispatch({ type: 'error', text: 'An error occurred while sending the letter.' })
			: dispatch({ type: 'error', text: 'Произошла ошибка при отправке письма.' });
		}

		reset();
	}

	console.log(errors);

	return ( 
		<>
		<div className="h-full bg-primary/30">
			<Circles />
			<div className="container mx-auto py-32 text-center xl:text-left flex items-start sm:items-center justify-center h-full">
				<div className="flex flex-col">
					<motion.h2
						variants={fadeIn('up', 0.2)} 
						initial="hidden"
						animate="show"
						exit="hidden"
						className="h2 text-center mb-6 sm:mb-12">
						{isEn 
							? 
							<b>Let's <span className="text-accent"> connect.</span></b>
							:
							<b>Задать<span className="text-accent"> вопрос.</span></b> 
						}
					</motion.h2>
					<motion.form
						variants={fadeIn('up', 0.4)} 
						initial="hidden"
						animate="show"
						exit="hidden" 
						className="flex-1 flex flex-col gap-3 w-full mx-auto"
						onSubmit={handleSubmit(send)}
					>
							<div className="flex gap-x-6 w-full">
								<div className="input-box">
									<input 
										{...register('name', { required: true, maxLength: 20, minLength: 3})}
										type="text" 
										placeholder={isEn ? 'Name' : 'Имя'} 
										className="input"
									/>
									{errors.name && errors.name.type === 'required' && <span className="input-error">This field is required</span>}
									{errors.name && errors.name.type === 'maxLength' && <span className="input-error">Max length is 20 symbol</span>}
									{errors.name && errors.name.type === 'minLength' && <span className="input-error">Min length is 3 symbol</span>}
								</div>
								<div className="input-box">
									<input
										{...register('email', { required: true, pattern: /^\S+@\S+$/i })} 
										type="text" 
										placeholder="Email" 
										className="input"
									/>
									{errors.email && errors.email.type === 'required' && <span className="input-error">This field is required</span>}
									{errors.email && errors.email.type === 'pattern' && <span className="input-error">Invalid email</span>}
								</div>
							</div>

							<div className="input-box">
								<input
									{...register('subject', { required: true, maxLength: 50, minLength: 3 })}	 
									type="text" 
									placeholder={isEn ? 'Subject' : 'Тема'}
									className="input"
								/>
								{errors.subject && errors.subject.type === 'required' && <span className="input-error">This field is required</span>}
								{errors.subject && errors.subject.type === 'maxLength' && <span className="input-error">Max length is 50 symbol</span>}
								{errors.subject && errors.subject.type === 'minLength' && <span className="input-error">Min length is 3 symbol</span>}
							</div>

							<div className="input-box">
								<textarea 
									{...register('text', { required: true, maxLength: 500, minLength: 10 })}
									placeholder={isEn ? 'Message' : 'Сообщение'} 
									className="textarea">	
								</textarea>
								{errors.text && errors.text.type === 'required' && <span className="input-error">This field is required</span>}
								{errors.text && errors.text.type === 'maxLength' && <span className="input-error">Max length is 500 symbol</span>}
								{errors.text && errors.text.type === 'minLength' && <span className="input-error">Min length is 10 symbol</span>}
							</div>

							<button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center
							overflow-hidden hover:border-accent group">
								<span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
									{isEn ? 'Let`s talk' : 'Отправить'}
								</span>
								<BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 group-hover:flex 
								transition-all duration-300 absolute text-[22px] text-accent"/>
							</button>
					</motion.form>
				</div>
			</div>
		</div>
		<Modal modal={modal} close={() => dispatch({type:'close'})} />
		</>
	);
}

export default Page;