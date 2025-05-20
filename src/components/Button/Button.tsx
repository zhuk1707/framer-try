import {motion} from "motion/react";

export function Button({title, onClick}: {
  title: string,
  onClick?: () => void
}) {
  return (
      <motion.button
        className={'neumorphism'}
        whileHover={{scale: 1.01}}
        whileTap={{scale: 0.99}}
        onClick={onClick}
      >{title}</motion.button>
  );
}