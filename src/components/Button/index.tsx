import React from 'react'

import './style.css';

interface ButtonProps {
    text: string
}

const Button = ({ text }: ButtonProps) => {
    return (
        <button>{text}</button>
    )
}

export default Button;