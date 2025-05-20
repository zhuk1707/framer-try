import {useState} from 'react'
import './App.css'
import Modal from "./components/Modal/Modal.tsx";
import {Button} from "./components/Button/Button.tsx";
import {AnimatePresence, motion} from 'motion/react';
import List from "./components/List/List.tsx";

function App() {
  const [isModal, setIsModal] = useState(false)

  return (
    <AnimatePresence>
      <motion.div
        className={'block neumorphismAlt'}
        transition={{duration: .3}}
      >
        <Button
          title={`${!isModal ? 'Open' : 'Close'} Modal`}
          onClick={() => setIsModal(prevState => !prevState)
          }
        />

        <AnimatePresence>
          {isModal && <Modal/>}
        </AnimatePresence>
      </motion.div>


      <List/>
    </AnimatePresence>
  )
}

export default App
