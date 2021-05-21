import React from 'react'
import { NavLink } from 'react-router-dom'
import { answerType } from './store/state'

type PropsType = {
    setCurrentQuestion: (number: number) => void
    setAnswer: (answer: answerType) => void
    arrAnswer: answerType[]
    setQuestion: (question: string) => void
    arrQuestion: string[]
    setNumber: (number: number) => void
}

export const Preview = (props: PropsType) => {

    const onClickHandler = () => {
        props.setCurrentQuestion(1)
        props.setAnswer(props.arrAnswer[0])
        props.setQuestion(props.arrQuestion[0])
        props.setNumber(0)
    }
    return (
        <div className='test' onClick={onClickHandler}>
            <div className='preview'>
                <div className='text'>
                    Проверь свои знания React
                </div>
                <NavLink to={'/test'}>Начать!</NavLink>
            </div>

        </div>
    )
}
