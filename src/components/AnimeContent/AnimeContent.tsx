import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface Props {
	direction?: 'left' | 'right' | 'bottom';
	children: React.ReactNode;
	delay?: number;
	duration?: number;
	className?: string;
}

export const AnimeContent = ({ direction="left", children, delay=0, duration=1, className }: Props) => {
    const { ref, inView} = useInView({
        triggerOnce: true,
		rootMargin: '-200px 0px',
	});
    

    
    const variants = {
        hidden: { opacity: 0, x: direction === 'left' ? -100 : 100,},
        visible: { opacity: 1, x: 0 },
    };
    
	return (
		<motion.div 
            className={className}
			ref={ref}
            initial= "hidden"
            animate={inView?"visible":"hidden"}
			variants={variants}
            transition={{delay, duration}}
            >
			{children}
		</motion.div>
	);
};
