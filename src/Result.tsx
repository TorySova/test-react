import React from 'react'

type PropsType = {
    number: number
}

export const Result = React.memo((props: PropsType) => {
    return (
        <div className="result">
            {`правильных ответов ${props.number} из 7`}
        </div>
    )
})
