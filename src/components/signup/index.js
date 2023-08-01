import React, { useState } from 'react'
import SignUpPage from '@/app/signup/page';
import AuthModel from '../auth_model';

const SignUp = (props) => {

    const [open, setOpen] = useState(false)
    const handleModel = () => setOpen(!open)

    return (
        <>
            { React.cloneElement( props.children, { onClick: handleModel } ) }
            <AuthModel
                open={open}
                handleModel={handleModel}
                details={{
                    title: "Welcome!",
                    text: 'Sign up to enjoy the best of your personal travel guide.'
                }}
            >
                <SignUpPage />
            </AuthModel>
        </>
    )
}

export default SignUp