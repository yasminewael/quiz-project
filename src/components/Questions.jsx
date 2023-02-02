import React from "react";
import { useState } from "react";
import data from "../data/TestData";
import Progress from "./Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";


export default function Questions() {
  //states
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  //Data of word List & count of word List
  const wordList = data.wordList;
  const questionCount = wordList.length;


  //element of Answer options 
  let answers = document.getElementsByName("options");


  //Options List of Answers
  let optionsList = ["adverb", "verb", "noun", "adjective"];




  //--------------------------------------------------
  //Options of Answers form
  const options = optionsList.map((pos, key) => (
    <>
      <ul>
        <li>
          <div className="line"></div>
          <input
            type="radio"
            className="form-control"
            id={`pos_${key}`}
            name="options"
            dataset-answer={pos}
            value={pos}
            onChange={(e) => e.target.value}
          />

          <label htmlFor={`pos_${key}`}>{pos}</label>
        </li>
      </ul>
    </>
  ));




  //---------------------------------------------------
// check if the the answer of the student is correct or not & showing incorrect message if the answer id wrong
  function checkAnswers() {
    const rightAnswer = wordList[currentQuestion].pos;
    let choosenAnswer;

    //divs to show the incorrect message
    let displayWrong = document.getElementById("displaywrong");
    let wrongIcon = document.getElementById("displayIcon");

    //looping on the answers
    for (let i = 0; i < answers.length; i++) {
      //if the student checked his answer the value will be the choosen answer
      if (answers[i].checked) {
        choosenAnswer = answers[i].value;
      }
      answers[i].checked = false;
    }

    // if the the choosen answer is correct
    if (rightAnswer === choosenAnswer) {
      //the score will increase by 1
      setScore(score + 1);
      displayWrong.textContent = "";
      wrongIcon.style.display ='none';

    } else {
      //if the answer is incorrect the incorrect message will show
      displayWrong.innerText = `Incorrect Answer`;
      wrongIcon.style.display ='block';
    }
  }



  //-----------------------------------------------------
//next Question button
  function submitButton() {
    checkAnswers();

    const nextQuestion = currentQuestion + 1;

    if (currentQuestion < wordList.length) {
      setCurrentQuestion(nextQuestion);
    }
  }

  return (
    <div>

      {currentQuestion < questionCount ? (
        <div>
          <h1>
            <span>Word:</span>
            {wordList[currentQuestion].word}
          </h1>
          <div className="wrongAnswers">
          <div id="displayIcon"><FontAwesomeIcon icon={faXmark} /></div>

          <div id="displaywrong"> </div>


          </div>

          <div className="answers">{options}</div>
         

          <button id="button" className="submit-button" onClick={submitButton}>
            Next Question
          </button>
        </div>
      ) : (
        <>
          <h3>The Result</h3>
          <div className="displayScore">
          {`Your score is : ${score} out of ${questionCount}`}
          </div>
          <label>Your Progress:</label>
          <Progress score={score} questionCount={questionCount}/>

        </>
      )}

    </div>
  );
}
