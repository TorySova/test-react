import React, { useEffect } from 'react'
import { answerType } from './store/state'

type AnswerType = {
    answer: answerType
    onClickHandler: (isCorrect: boolean) => void
}

export const Answer = (props: AnswerType) => {
    const { answer, onClickHandler } = props

    return (
        <div className="answer">
            {
                answer.map((it, index) =>
                            
                    <div key={index} className={"variant"}
                        onClick={()=>onClickHandler(it.isCorrect)}> 
                        {it.variant} </div>

                )
            }
        </div>
    )
}
