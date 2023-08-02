import React, { useState } from 'react'
import SignIn from '@/app/signin/page';
import AuthModel from '../auth_model';

const Login = (props) => {

    const [open, setOpen] = useState(false)
    const handleModel = () => setOpen(!open)

    return (
        <>
            { React.cloneElement( props.children, { onClick: handleModel } ) }
            <AuthModel
                open={open}
                handleModel={handleModel}
                details={{
                    title: <>Welcome <span>Back!</span></>,
                    text: 'Sign in to enjoy the best of your personal travel guide.  '
                }}
            >
                <SignIn />
            </AuthModel>
        </>
    )
}

export default Login