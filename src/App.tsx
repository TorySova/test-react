import React, { useCallback, useState } from 'react';
import './App.css';
import { Result } from './Result';
import { initState } from './store/state';
import { Test } from './Test';

const App = React.memo(() => {
  const arrQuestion = initState.map(it => it.question)
  const arrAnswer = initState.map(it => it.answer)
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const [question, setQuestion] = useState(arrQuestion[0])
  const [answer, setAnswer] = useState(arrAnswer[0])




  let [number, setNumber] = useState(0)
  const onClickHandler = (isCorrect: boolean) => {
    if (isCorrect) {
      setNumber(number + 1)
    }
    setCurrentQuestion(currentQuestion + 1)
    setQuestion(arrQuestion[currentQuestion])
    setAnswer(arrAnswer[currentQuestion])
    
  }


  return (
    <div >
      {currentQuestion === 8
        ? <Result number={number} />
        : <Test question={question} answer={answer} onClickHandler={onClickHandler} />}

    </div>
  );
})

export default App;
