import React from 'react'
import '../Styles/Components/Button.css'

export default function ButtonComponent(props) {
    return (
        <div className="Buttons" onClick={props.onSubmit}>
            {props.title}
        </div>
    )
}
