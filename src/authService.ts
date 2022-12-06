import { LoginArgs } from './ModalPopup/LoginModal'


const loginUser = ({ password, login }: LoginArgs): Promise<boolean> => new Promise((resolve, reject) => setTimeout(() => {
    if (login === "Ortex" && password === "test") {
        resolve(true)
    } else {
        reject('Login Details are incorrect')
    }
}, 1500));


export default loginUser;