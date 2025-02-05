import React from 'react'

const Button = ({onClickAction, title}) => {

    return (
        <div>
            <button onClick={onClickAction}>{title}</button>
        </div>
    )
}

export default Button