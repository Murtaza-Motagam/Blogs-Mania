import React from 'react'

const Alert = (props) => {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && <div className='font-fam-roboto fixed'>
                <div className="column is-full">
                    <div className={`notification ${props.alert.mode} has-text-white`}>
                        <button className="delete"></button>
                        <strong>{capitalize(props.alert.type)}!</strong>&nbsp;&nbsp;&nbsp;{props.alert.msg}
                    </div>
                </div>
        </div>
    )
}

export default Alert
