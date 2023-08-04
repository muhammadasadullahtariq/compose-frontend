import React, { useState } from 'react'
import SignUpPage from '@/app/signup/page';
import AuthModel from '../auth_model';

const SignUp = (props) => {

    return (
        <>
            { React.cloneElement( props.children, { onClick: props.handleModel } ) }
            <AuthModel
                open={props.open}
                handleModel={props.handleModel}
                details={{
                    title: "Welcome!",
                    text: 'Sign up to enjoy the best of your personal travel guide.'
                }}
            >
                <SignUpPage closeModel={props.handleModel} popup={() => {
                    props.handleModel()
                    props.popup()
                }} />
            </AuthModel>
        </>
    )
}

export default SignUp