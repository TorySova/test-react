import React from 'react'
import { Answer } from './Answer'
import { Question } from './Question'
import { Result } from './Result'
import { answerType } from './store/state'

type PropsType = {
    question: string
    answer: answerType
    onClickHandler: (isCorrect: boolean) => void
    currentQuestion: number
    number: number
}

export const Test = React.memo((props: PropsType) => {
    const {question, answer, onClickHandler, currentQuestion, number} = props
    return (
        <div>
            {
                currentQuestion === 8
                ? <Result number={number}/>
                :<div className="test">
                <Question question={question} />
                <Answer answer={answer} onClickHandler={onClickHandler} />
            </div>
            }
        </div>
    )
})