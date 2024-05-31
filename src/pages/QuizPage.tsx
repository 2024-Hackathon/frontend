import { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const QuizContainer = styled.div`
  background-color: #8080f0;
  border-radius: 10px;
  padding: 2rem;
  width: 80%;
  max-width: 600px;
  margin-bottom: 1rem;
  margin-top: 5rem;
`

const Question = styled.h1`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
  margin-top: -0.5rem;
`

const Option = styled.button`
  width: 100%;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &.selected {
    background-color: #ccc;
  }
`

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
  margin: 20px;

  &:hover {
    background-color: #45a049;
  }
`

function QuizPage() {
  const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(null)) // Adjust the size according to the number of questions

  const quizzes = [
    {
      question: '1. 다음 중 애플리케이션 아키텍처의 세 가지 층 중 하나가 아닌 것은 무엇입니까?',
      options: ['A) 프리젠테이션 층', 'B) 비즈니스 로직 층', 'C) 데이터 엑세스 층', 'D) 실행 층'],
    },
    {
      question: '2. 모델 1 방식에서 주로 발생하는 문제점은 무엇입니까?',
      options: [
        'A) 뷰와 비즈니스 로직의 분리',
        'B) 뷰와 비즈니스 로직의 혼합',
        'C) 모델과 뷰의 혼합',
        'D) 컨트롤러와 비즈니스 로직의 혼합',
      ],
    },
    {
      question: "3. 스프링 프레임워크의 특징 중 'DI'가 의미하는 것은 무엇입니까?",
      options: [
        'A) 데이터 인터페이스',
        'B) 디렉토리 인덱스',
        'C) 의존성 주입',
        'D) 동적 인터페이스',
      ],
    },
    {
      question: '4. Maven의 POM.xml 파일에서 관리되지 않는 것은 무엇입니까?',
      options: [
        'A) 프로젝트의 라이브러리 의존성',
        'B) 빌드 스크립트',
        'C) 프로젝트의 빌드 과정',
        'D) 운영체제별 실행 스크립트',
      ],
    },
    {
      question: "5. Gradle에서 사용되는 'wrapper'는 어떤 역할을 수행합니까?",
      options: [
        'A) 플러그인 의존성을 관리',
        'B) 빌드 과정을 정의',
        'C) 프로젝트의 의존성을 업데이트',
        'D) Gradle 태스크를 실행하는 환경을 제공',
      ],
    },
  ]

  const handleOptionClick = (questionIndex: number, optionIndex: number) => {
    const newSelectedOptions = [...selectedOptions]
    newSelectedOptions[questionIndex] = optionIndex
    setSelectedOptions(newSelectedOptions)
  }

  const handleSubmit = () => {
    // Add your submission logic here
    console.log('Selected Options:', selectedOptions)
    alert('Quiz submitted! Check the console for selected options.')
  }

  return (
    <div>
      <Header />
      <Container>
        {quizzes.map((quiz, index) => (
          <QuizContainer key={index}>
            <Question>{quiz.question}</Question>
            {quiz.options.map((option, i) => (
              <Option
                key={i}
                className={selectedOptions[index] === i ? 'selected' : ''}
                onClick={() => handleOptionClick(index, i)}>
                {option}
              </Option>
            ))}
          </QuizContainer>
        ))}
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </Container>
    </div>
  )
}

export default QuizPage
