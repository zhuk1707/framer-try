import {motion} from "motion/react";

export default function Modal() {
  return (

    <motion.div
      className={'modal neumorphism'}
      initial={{scale: 0}}
      animate={{scale: 1}}
      exit={
      { scale: 0,
        opacity: 0 }}
      transition={{duration: .5}}
    >
      <h1>Hello!</h1>
      <h2>I'm Modal Component</h2>
      <h3>Nice to meet you!</h3>
    </motion.div>

  )
}
