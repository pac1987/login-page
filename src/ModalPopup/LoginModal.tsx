import React, { useState } from 'react'
import RWDModal from './RWDModal';
import { ReactComponent as LoginIcon } from '../assets/user.svg';
import { ReactComponent as PasswordIcon } from '../assets/padlock.svg';
import InputWithIcon from './InputWithIcon';
import { Button, ButtonContainer, Error } from './ModalPopup.styles';




export interface LoginArgs {
    password: string;
    login: String;
}

export type LoginFunction = (args: LoginArgs) => Promise<void>;


interface LoginModalProps {
    onClose: () => void;
    isModalVisible: boolean;
    loginError?: string;
    onLoginRequested: LoginFunction;
}


const LoginModal: React.FC<LoginModalProps> = ({
    loginError,
    isModalVisible,
    onClose,
    onLoginRequested
}) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onLoginRequested({ login, password })
        }
    }

    return (
        <RWDModal
            onBackdropClick={onClose}
            isModalVisible={isModalVisible}
            header="Ortex Login"
            message="Please log in"
            content={
                <>
                    <InputWithIcon
                        onKeyDown={onKeyDown}
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        type="text"
                        placeholder='Username'
                        icon={<LoginIcon width="24px" height="24px" fill="white" />}
                    />
                    <InputWithIcon
                        onKeyDown={onKeyDown}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password'
                        icon={<PasswordIcon width="24px" height="24px" fill="white" />
                        }
                    />
                    {loginError && <Error>{loginError}</Error>}
                    <ButtonContainer>
                        <Button onClick={() => onLoginRequested({ password, login })}>Login</Button>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose}>Forgot Password</Button>
                    </ButtonContainer>
                </>
            }

        />);
}

export default LoginModal