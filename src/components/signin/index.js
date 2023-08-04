import React, { useState } from 'react'
import SignIn from '@/app/signin/page';
import AuthModel from '../auth_model';

const Login = (props) => {

    return (
        <>
            { React.cloneElement( props.children, { onClick: props.handleModel } ) }
            <AuthModel
                open={props.open}
                handleModel={props.handleModel}
                details={{
                    title: <>Welcome <span>Back!</span></>,
                    text: 'Sign in to enjoy the best of your personal travel guide.  '
                }}
            >
                <SignIn closeModel={props.handleModel} popup={() => {
                    props.handleModel()
                    props.popup()
                }} />
            </AuthModel>
        </>
    )
}

export default Login