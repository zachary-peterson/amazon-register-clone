import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { setCPassword, setEmail, setName, setPassword } from '../../../store';
import { AiOutlineWarning } from 'react-icons/ai';

// Blank form for communicating with backend 
const form = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
};

// Main body component for Landing Page
export const Body = () => {
    const [formValues, setFormValues] = useState(form);
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();
    const { push } = useHistory();

    // Handles inut text changes
    const handleChanges = (e) => {
        e.preventDefault();
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    // Handles input and pushes user to dashboard
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formValues.password.length > 1 && formValues.password === formValues.confirmPassword ) {
            dispatch(setName(formValues.name));
            dispatch(setEmail(formValues.email));
            dispatch(setPassword(formValues.password));
            dispatch(setCPassword(formValues.confirmPassword));
            push('/SignIn')
        }else if(formValues.password !== formValues.confirmPassword || formValues.name.length < 1 || formValues.email.length < 1) {
            setDisabled(true);
        }
        
    }

    return (
        <>
            {
                disabled ? 

                <div className="body__errors">
                    <AiOutlineWarning className="body__warning" color="red" size="170px"/>
                    <h2>There was a problem</h2>
                    <ul>
                        {(formValues.name.length < 3) ? 
                            (<li>Enter your name</li>)
                        : null}
                        {(formValues.email.length < 3) ?
                            (<li>Enter a valid email address</li>)
                        : null}
                        {(formValues.password !== formValues.confirmPassword) ?
                            (<li>Passwords must match</li>)
                        : null}
                        {(formValues.password.length) < 1 ?
                            (<li>Enter your password</li>)
                        : null}
                    </ul>
                </div>

                : null
            }

            <form className="body__main">
                <h2 className="body__title">Create account</h2>

                <div className="body__div">
                    <label htmlFor="name" className="body__label">Your Name</label>
                    <input 
                        className="body__input"
                        onChange={handleChanges}
                        type="text"
                        value={formValues.name}
                        name="name"
                    />
                </div>

                <div htmlFor="email" className="body__div">
                    <label className="body__label">Email</label>
                    <input 
                        className="body__input"
                        onChange={handleChanges}
                        type="email"
                        name="email"
                        value={formValues.email}
                    />
                </div>

                <div className="body__div">
                    <label htmlFor="password" className="body__label">Password</label>
                    <input 
                        className="body__input"
                        onChange={handleChanges}
                        type="password"
                        placeholder=" At least 6 characters"
                        name="password"
                        value={formValues.password}
                    />
                    <p className="body__acc"><span className="body__accent">i</span> &nbsp; Passwords must be at least 6 characters.</p>
                </div>
                
                <div className="body__div">
                    <label htmlFor="confirmPassword" className="body__label">Re-enter password</label>
                    <input 
                        className="body__input"
                        onChange={handleChanges}
                        type="password"
                        name="confirmPassword"
                        value={formValues.confirmPassword}
                    />
                </div>

                <button onClick={handleSubmit} className="body__button">Create your Amazon account</button>

                <div className="body__div body__tac">
                    <p>By creating an account, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice</span>.</p>
                    <hr className="hr__one" />
                    
                    <p>Already have an account? <span onClick={() => push("/SignIn")}>Sign-In</span></p>
                    
                </div>
            </form>
        </>
        
    )
};