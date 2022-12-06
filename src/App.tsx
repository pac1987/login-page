import { useState } from 'react';
import './App.css';
import loginUser from './authService';
import LoginModal, { LoginFunction } from './ModalPopup/LoginModal';


function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [loginError, setLoginError] = useState<string | undefined>()

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }


  const onBackdropClick = () => {
    setIsModalVisible(false)
  }

  const onLoginRequest: LoginFunction = async (args) => {
    try {
      const result = await loginUser(args)
      console.log(result)
    } catch (error: any) {
      setLoginError(error)
      console.log(error)
      console.log(JSON.stringify(error))
    }
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Login</button>
      <LoginModal loginError={loginError} onClose={onBackdropClick} onLoginRequested={onLoginRequest} isModalVisible={isModalVisible} />
    </div>
  );
}


export default App;