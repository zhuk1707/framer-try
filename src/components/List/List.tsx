import {AnimatePresence, motion} from "motion/react";
import {useState} from "react";
import {Button} from "../Button/Button.tsx";

const List = () => {
  const itemsData = ["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4", "Элемент 5"];
  const [items, setItems] = useState(itemsData);

  const removeItem = () => {
    if (items.length) setItems(items.filter((_, i) => i !== items.length - 1));
  };
  return (
    <div className={'block'}>
      <Button
        title={"Remove Item"}
        onClick={() => removeItem()}
      />

      <motion.ul
        style={{background: 'red'}}
        className={'innerBlock neumorphismAlt'}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: .5, duration: 0.5, staggerChildren: 0.2}}
      >
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.li
              className={'listElement neumorphism'}
              key={index}
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              exit={{opacity: 0, x: 20}}
              transition={{duration: 0.3}}
            >
              {item}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default List