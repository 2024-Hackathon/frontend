import styled from 'styled-components'
import LogoImg from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  position: fixed;
  z-index: 3;
`
const Wrap = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  align-items: center;
  height: 4rem;
  padding-left: 8.75rem;
  padding-right: 8.75rem;
  margin-bottom: 3rem;
  border: 1px solid black;
`

const Logo = styled.img`
  width: 8rem;
  cursor: pointer;
`

const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Header() {
  const navigate = useNavigate()

  return (
    <Container>
      <Wrap>
        <Logo src={LogoImg} onClick={() => navigate('/')} />
        <RightWrapper></RightWrapper>
      </Wrap>
    </Container>
  )
}
