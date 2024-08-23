import React, {useEffect, useState} from "react"
import axios from "axios"
import {createGlobalStyle} from "styled-components"
import Button from "./components/Button"
import QuestionsControl from "./components/QuestionsControl"
import LearningCard from "./components/learningCard"
import { colors } from "./ThemeVariables"
import GreenWaveWithShapes from "./components/greenWaveWithShapes"
import YellowWaveWithShapes from "./components/YellowWaveWithShapes"
import Results from "./components/results"


const AppStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${colors.darkGray};
        
    }

    hr {
        width: 80%;
        margin-top: 80px;
    }


    .main {
        position: relative;
        background: ${colors.accentBackground};
        min-height: 100vh;
        width: 95%;
        margin-inline: auto;
        box-shadow: 0px 0px 40px 15px rgba(0, 0, 0, 0.7);
    }

    .content {
        overflow: hidden;
    }
        
    .question-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center; 
        margin-top: 20px;

        & p {
            font-family: "Gudea", sans-serif;
            font-weight: 400;
            font-size: 1.2rem;
            width: 90%;
            margin-top: 50px;
            margin-bottom: 30px;
        }
    }

    .question {
        font-family: "Julius Sans One", sans-serif;
        font-size: 1.5rem;
        font-weight: 800;
        text-align: center;
        width: 100%;
        margin-top: 0;
        line-height: 45px;
        letter-spacing: 1px;
    }

    .answers-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-content: center;
        gap: 20px;
        width: 50%;
    }

    .wrong-answer-advice-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .text-highlight {
        color: ${colors.secondary};
    }

    .cards-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding-top: 50px;
        padding-bottom: 150px;
    }

    .wikipedia-page-details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 40px;
        font-family: "Gudea", sans-serif;
        padding-inline: 40px;
        padding-bottom: 80px;
        margin-top: 100px;

        & img {
            width: 100%;
            border-radius: 15px;
        }

        & h1 {
            font-size: 2rem;
            letter-spacing: 2px;
            font-weight: 400;
        }

        & p {
            font-size: 1.1rem;
            line-height: 30px;
        }

        & .back-btn {
            position: absolute;
            top: 160px;
            left: 40px;
        }

        & div button {
            margin-top: 40px;
        }
    }

    @media (min-width: 600px) {
        .main {
            width: 80%;
        }

        .question-container {
            & p {
                width: 480px;
            }
        }

        .question {
            width: 540px;
            font-size: 1.8rem;
        }
    
    }

    @media (min-width: 900px) {
        .question-container {
            margin-top: 0px;
        }
        
        .question {
            width: 80%;
            font-size: 2.2rem;
        }


        .answers-container {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
            
        .wikipedia-page-details {
            flex-direction: row;
            padding-inline: 80px;
            margin-top: 10px;
            

            & img {
                width: 45%;
            }

            & .back-btn {
                left: 80px;
            }

        }
    }



`

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [questions, setQuestions] = useState([{
        correct_answer: "correct",
        incorrect_answers: ["incorrect1", "incorrect2", "incorrect3"], 
        question: "What is the question?"   
    }])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answerWasWrong, setAnswerWasWrong] = useState(false)


    const breakpoint900 = windowWidth > 900
    const breakpoint600 = windowWidth > 600

    
    const {correct_answer, incorrect_answers, question} = questions[currentQuestionIndex]
    
    const answers = []
    
    answers.push(correct_answer)
    incorrect_answers.forEach(item => {
        answers.push(item)
    })

    function shuffle(array) {
        for(let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)) //random index from 0 to i
            // swap elements array[i] and array[j]
            let t = array[i];
            array[i] = array[j]; 
            array[j] = t
        }
    }
    shuffle(answers)

    function decodeHtml(html) {
        let txt = document.createElement("textarea")
        txt.innerHTML = html
        return txt.value
    }

    function handleUserAnswer(e) {
        const clickedButton = e.currentTarget 
        const allAnswersList = Array.from(clickedButton.parentElement.childNodes)
        
        if (clickedButton.innerText === correct_answer) {
            clickedButton.classList.add("correct")
            setTimeout(() => {
                setCurrentQuestionIndex(() => currentQuestionIndex + 1)
                clickedButton.classList.remove("correct")
            }, 2000)
        } else {
            clickedButton.classList.add("wrong")
            allAnswersList.forEach(answer => {
                if(answer.innerText === correct_answer)  {
                    answer.classList.add("correct")
                }
                answer.disabled = true
                setAnswerWasWrong(true)
            })    
        }
    }
    
    function handleGoToNextQuestion() {
        setAnswerWasWrong(false)
        setCurrentQuestionIndex(() => currentQuestionIndex + 1)
        const allAnswersList = Array.from(document.querySelector(".answers-container").childNodes)
        allAnswersList.forEach(answer => {
            answer.classList.remove("correct")
            answer.classList.remove("wrong")
            answer.disabled = false
            // answer.classList.contains("correct")
        })
        
        
    }

    useEffect(() => {
        async function getQuestions() {
            try {
                const response = await axios.get('https://opentdb.com/api.php?amount=10')
                const multiAnswerQuestions = response.data.results.filter(item => item.type === "multiple") 
                setQuestions(multiAnswerQuestions)
            } catch(err) {
                    console.error(err)
            }
        }
        getQuestions()        
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
        return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
    }, [])
        
    

    return (
    <section className="main">
        <AppStyle/>
        
        <div className="content">
            <GreenWaveWithShapes breakpoint600={breakpoint600} breakpoint900={breakpoint900}/>
            <div className="question-container">
                <h1 className="question">{decodeHtml(question)}</h1>
                <div className="answers-container">
                    {answers.map(item => {
                        return <Button onClick={handleUserAnswer} breakpoint900={breakpoint900} secondary>{decodeHtml(item)}</Button>
                    })}
                </div>
                {answerWasWrong 
                &&
                    <div className="wrong-answer-advice-container">
                        <p><span className="text-highlight">wrong answer</span>. You can learn more about this topic below. or click <span className="text-highlight">next</span> to move on to the next question.</p>
                        <Button onClick={handleGoToNextQuestion} breakpoint900={breakpoint900} primary>next</Button>
                    </div>
                }
            </div>
            <hr />
            <div className="cards-container">
                <LearningCard breakpoint900={breakpoint900}/>
            </div>
            <Results breakpoint600={breakpoint600}/>
            <QuestionsControl breakpoint900={breakpoint900}/>


            {/* <YellowWaveWithShapes breakpoint900={breakpoint900} breakpoint600={breakpoint600} />
            <div className="wikipedia-page-details">
                <Button primary className="back-btn">Back</Button>
                <img src="image.png" alt="wikipedia-article"/>
                <div>
                    <h1>Abstract</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates odit aspernatur id quasi fuga dolor voluptatibus commodi qui dignissimos eveniet, in itaque eos eius minima possimus deleniti fugiat repellendus. Repellat sit modi ipsam, quaerat amet consectetur adipisci corporis architecto!</p>
                    <Button primary>View Full Article</Button>
                </div>
            </div> */}

        </div>
    </section>
    )
}

export default App



// it might be better to store the questions in the local storage to reduce the api calls. but first see if it's actually an improvement.