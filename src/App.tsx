import {useState} from 'react'
import './App.css'
import Modal from "./components/Modal/Modal.tsx";
import {Button} from "./components/Button/Button.tsx";
import {AnimatePresence} from 'motion/react';

function App() {
  const [isModal, setIsModal] = useState(true)

  return (
    <>
      <div className={'block neumorphismAlt'}>
        <Button
          title={`${!isModal ? 'Open' : 'Close'} Modal`}
          onClick={() => setIsModal(prevState => !prevState)
          }
        />

        <AnimatePresence>
          {isModal && <Modal/>}
        </AnimatePresence>
      </div>


    </>
  )
}

export default App
