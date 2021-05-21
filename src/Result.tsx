import React from 'react'
import { NavLink } from 'react-router-dom'

type PropsType = {
    number: number
}

export const Result = React.memo((props: PropsType) => {
    return (
        <div className="test">
            <div className="preview">
                {`Правильных ответов ${props.number} из 7`}
                <NavLink to={'/'} className='goHome'>На главную!</NavLink>
            </div>
        </div>
    )
})
