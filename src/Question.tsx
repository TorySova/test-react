import React from 'react'

type QuestionType = {
    question: string
}

export const Question = React.memo((props: QuestionType) => {
    return (
        <div className="question">
            {props.question}
        </div>
    )
})
