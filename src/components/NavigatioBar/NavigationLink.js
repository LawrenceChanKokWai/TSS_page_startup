import { motion } from "framer-motion";

const NavigationLink = (props) => {
	const fromAnimate = { opacity: 0, y: -60 };
	const toAnimate = { opacity: 1, y: 0 };

	return (
		<ul>
			<motion.li
				initial={fromAnimate}
				animate={toAnimate}
				transition={{ delay: 0.05 }}
				onClick={() => props.isMobile && props.mobileMenuClose()}
			>
				<a href="/">Home</a>
			</motion.li>

			<motion.li
				initial={fromAnimate}
				animate={toAnimate}
				transition={{ delay: 0.1 }}
				onClick={() => props.isMobile && props.mobileMenuClose()}
			>
				<a href="/#lms">LMS</a>
			</motion.li>

			<motion.li
				initial={fromAnimate}
				animate={toAnimate}
				transition={{ delay: 0.2 }}
				onClick={() => props.isMobile && props.mobileMenuClose()}
			>
				<a href="/#quiz">Quiz</a>
			</motion.li>

			<motion.li
				initial={fromAnimate}
				animate={toAnimate}
				transition={{ delay: 0.2 }}
				onClick={() => props.isMobile && props.mobileMenuClose()}
			>
				<a href="/#exam">Proctored Exam</a>
			</motion.li>

			<motion.li
				initial={fromAnimate}
				animate={toAnimate}
				transition={{ delay: 0.3 }}
				onClick={() => props.isMobile && props.mobileMenuClose()}
			>
				<a href="/#programming">Programming</a>
			</motion.li>

			<motion.li
				initial={fromAnimate}
				animate={toAnimate}
				transition={{ delay: 0.4 }}
				onClick={() => props.isMobile && props.mobileMenuClose()}
			>
				<a href="/#interview">Interview</a>
			</motion.li>

			<motion.li
				initial={fromAnimate}
				animate={toAnimate}
				transition={{ delay: 0.5 }}
				onClick={() => props.isMobile && props.mobileMenuClose()}
			>
				<a href="/#employment">Job Portal</a>
			</motion.li>

			<motion.li
				initial={fromAnimate}
				animate={toAnimate}
				transition={{ delay: 0.5 }}
				onClick={() => props.isMobile && props.mobileMenuClose()}
			>
				<a href="/#smart">Smart Learn</a>
			</motion.li>
		</ul>
	);
};
export default NavigationLink;
