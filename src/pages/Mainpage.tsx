import React, { useState } from 'react'
import styled from 'styled-components'
import { FaRegFilePdf } from 'react-icons/fa'
import { TbFolderSearch } from 'react-icons/tb'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7%;
`
const Title = styled.div`
  display: flex;
  font-size: 40px;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 40px;
`

const Container = styled.div`
  background-color: #4db6ac;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  height: 300px;
  border-radius: 10px;
  flex-direction: column;
`

const UploadArea = styled.div`
  display: flex;
  border: 2px dashed #fff;
  padding: 30px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff1a;
  position: relative;
`

const FileInput = styled.input`
  display: flex;
  opacity: 0;
  position: absolute;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`

const InstructionText = styled.p`
  color: #fff;
  margin-top: 20px;
`

const SearchWrap = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const StyledIcon = styled(TbFolderSearch)`
  margin-right: 10px;
`

const FileInfo = styled.div`
  color: #fff;
  margin-top: 10px;
  font-size: 16px;
`

const Submit = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: #fff;
  color: #4db6ac;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #e0f7fa;
  }
`

function MainPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    setSelectedFile(file)
    console.log(file)
  }

  const handleIconClick = () => {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    if (fileInput) {
      fileInput.click()
    }
  }

  return (
    <Wrap>
      <Title>Project</Title>
      <Container>
        <UploadArea>
          <FileInput type="file" onChange={handleFileChange} />
          <FaRegFilePdf size="50px" color="white" />
          <InstructionText>드롭 파일을 여기로 끌어 놓으세요</InstructionText>
          {selectedFile && <FileInfo>{selectedFile.name}</FileInfo>}
          <SearchWrap onClick={handleIconClick}>
            <StyledIcon size="20px" />
            파일선택
          </SearchWrap>
        </UploadArea>
        <Submit>퀴즈생성</Submit>
      </Container>
    </Wrap>
  )
}

export default MainPage
