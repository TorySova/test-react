import React, { useCallback, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Preview } from './Preview';
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
      <Switch>
        <Route path={"/"} exact render={() => <Preview
          setCurrentQuestion={setCurrentQuestion}
          setAnswer={setAnswer}
          arrAnswer={arrAnswer}
          setQuestion={setQuestion}
          arrQuestion={arrQuestion}
          setNumber={setNumber}/>} />
        <Route path={"/result"} exact render={() => <Result number={number}/>} />
        <Route path={"/test"} render={() => <Test question={question}
          answer={answer}
          onClickHandler={onClickHandler}
          currentQuestion={currentQuestion}
          number={number} />} />
      </Switch>

    </div>
  );
})

export default App;
