import React from 'react'

type PropsType = {
    number: number
}

export const Result = (props: PropsType) => {
    return (
        <div className="result">
            {`правильных ответов ${props.number} из 4`}
        </div>
    )
}
