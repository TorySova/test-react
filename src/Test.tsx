import React from 'react'
import { Answer } from './Answer'
import { Question } from './Question'
import { answerType } from './store/state'

type PropsType = {
    question: string
    answer: answerType
    onClickHandler: (isCorrect: boolean) => void

}

export const Test = React.memo((props: PropsType) => {
    const {question, answer, onClickHandler} = props
    return (
        <div className="test">
            <Question question={question} />
            <Answer answer={answer} onClickHandler={onClickHandler} />
        </div>
    )
})
