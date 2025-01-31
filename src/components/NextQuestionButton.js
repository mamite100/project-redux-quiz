import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from '../reducers/quiz'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import styled from 'styled-components'

const ContainerStyledButton = styled.div`
    width: 90vw;
    position:absolute;
    bottom: 10%;
    padding: 5px;
    right: 5%;
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    @media (min-width: 768px) {
        width: 100%;
        position: relative;
        margin: 0 auto;
        height: 50px;
        padding: 0;
        right: 0;
        bottom: 0;
    }
`

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 23px;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media (min-width: 768px) {
        margin-right: 10px;
    }
    
`
const IconRight = styled(FaArrowRight)`
    margin-left: 3px;
`
const StyledSummaryLink = styled(Link)`
    text-decoration: none;
`

const NextQuestionButton = ({ answers, currentQuestionIndex }) => {

    const quizOver = useSelector((state) => state.quiz.quizOver)
    const questions = useSelector((state) => state.quiz.questions)

    const onNextQuestion = () => {
        dispatch(quiz.actions.goToNextQuestion())
    }
    const dispatch = useDispatch()

    if (!quizOver && currentQuestionIndex + 1 === questions.length) {
        return (
            <ContainerStyledButton>
                <StyledSummaryLink to="/summary">
                    <StyledButton disabled={!answers[currentQuestionIndex]}>Submit<IconRight /></StyledButton>
                </StyledSummaryLink>
            </ContainerStyledButton>
        )
    }
    return (
        <ContainerStyledButton>
            <StyledButton type="button" disabled={!answers[currentQuestionIndex]} onClick={onNextQuestion}>Next question <IconRight /></StyledButton>
        </ContainerStyledButton>
    )

}

export default NextQuestionButton