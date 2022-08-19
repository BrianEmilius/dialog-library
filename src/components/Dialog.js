import { motion, AnimatePresence } from "framer-motion"
import { useEffect } from "react"

export default function Dialog({show, setShow, heading, body, buttonText = "Ok"}) {

	function esc(e) {
		e.key === "Escape" && setShow(false)
	}

	useEffect(function() {
		document.addEventListener("keyup", esc)
		return () => document.removeEventListener("keyup", esc)
	})

	return (<AnimatePresence> {show && (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.1}}
			className="absolute inset-0 bg-slate-300/50 backdrop-blur-sm"
			onClick={e => e.target === e.currentTarget && setShow(false)}
		>
			<motion.section
				role="alertdialog"
				aria-modal="true"
				initial={{scale: 0.5}}
				animate={{scale: 1}}
				exit={{scale: 0.5}}
				transition={{duration: 0.1, type: "spring", stiffness: 200}}
				className="mx-auto w-[90%] mt-20 bg-white rounded-md py-2 px-5 shadow-lg shadow-slate-500/50"
			>
				{heading && (<header className="border-b-2 border-slate-200 text-slate-300">
					<small>{heading}</small>
				</header>)}
				<div className="py-5">
					{body}
				</div>
				<footer className="flex flex-row-reverse">
					<button
						onClick={() => setShow(false)}
						className="py-2 px-5 text-white bg-blue-500 rounded-md"
						tabIndex={1}
					>
						{buttonText}
					</button>
				</footer>
			</motion.section>
		</motion.div>
	)}</AnimatePresence>)
}