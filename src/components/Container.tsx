import React, {FC} from 'react'

type containerProps = {
    children: JSX.Element | JSX.Element[]
}

const Container: FC<containerProps> = (props: containerProps) => {
    return (
        <div className="container">
            { props.children }
        </div>
    )   
}

export default Container