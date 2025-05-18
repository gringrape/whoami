import { useState } from 'react';

import styled, { createGlobalStyle } from 'styled-components';

import supabase from './db';

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #000;
    color: #ccc;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
`;

// Background image
const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1200px;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url('/assets/frida.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(52px) grayscale(70%);
  opacity: 0.15;
`;

// Container for all content
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

// Title component
const Title = styled.h1`
  color: #ccc;
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  line-height: 1.4;
  margin-bottom: 2rem;
  font-weight: 400;
  white-space: pre-line;
`;

const Body = styled.p`
  font-size: clamp(0.8rem, 2.5vw, 1.3rem);
  color: #aaa;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  margin-bottom: -2.5em;

  span {
    display: block;
  }
`;

// Text area component
const TextInput = styled.textarea`
  max-width: 800px;
  width: clamp(90%, 70vw, 70%);
  min-height: 150px;
  padding: 1.2rem;
  margin: 1.5rem 0;
  background-color: rgba(30, 30, 30, 0.7);
  border: 1px solid #333;
  border-radius: 4px;
  color: #ccc;
  font-family: sans-serif;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #555;
  }
`;

// Submit button
const SubmitButton = styled.button`
  background-color: rgba(60, 60, 60, 0.8);
  color: #ccc;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 2rem;
  font-size: clamp(0.9rem, 3vw, 1.1rem);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 1rem;
  
  &:hover {
    background-color: rgba(80, 80, 80, 0.8);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const IndexPage = () => {
  const [text, setText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    
    if (text.length === 0) {
      return;
    }
    
    supabase.from('Feedback').insert({
      body: text,
    }).then(res => {
      console.log(res);
    });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <GlobalStyle />
        <BackgroundImage />
        <Container>
          <Title>{"작성해주셔서 감사합니다!\n더 나은 사람이 되겠습니다.😊"}</Title>
        </Container>
      </>
    );
  }
        


  return (
    <>
      <GlobalStyle />
      <BackgroundImage />
      <Container>
        <Title>{"안녕하세요. 김덕수입니다!\n저는 어떤 사람이었나요?"}</Title>
        <Body>
          <span>함께해서 즐거웠습니다.😊</span>
          <span>서운하거나 부족한 측면도 있었을거라 생각해요.</span>
          <span>자유롭게 전달해주시면 감사드리겠습니다.</span>
        </Body>
        <p></p> 
        <p></p>
        <form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="익명, 기명 관계없이 자유롭게 당신의 생각을 적어주세요."
            rows={4}
          />
          <SubmitButton type="button" onClick={handleSubmit}>전달하기</SubmitButton>
        </form>
      </Container>
    </>
  );
};

export default IndexPage;
