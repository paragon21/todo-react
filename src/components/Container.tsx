import React from 'react'

// React doesn't support use JSX.Element in props with React.FunctionalComponent
// It's why we don't use FC type

type containerProps = {
    children: JSX.Element | JSX.Element[]
}

const Container = (props: containerProps):JSX.Element => {
    return (
        <div className="container">
            { props.children }
        </div>
    )   
}

export default Container