import React from "react";
import styled from "styled-components";
import 'antd/dist/antd.css';
import { Card } from 'antd'


interface Inputs {

    label : string;
    name : string;
    placeholder : string;
    type : string;



}

const InputWIthLabel = ({label,name,placeholder,type} : Inputs) =>{

        return( 
        <Wrapper>

            <Label>{label}</Label>
            <Input name={name} placeholder={placeholder}  type={type} />
    
    
        </Wrapper>
        );
   

}

export default function CreateSurvey() {

	return (
        <CardContainer>
            <Title>설문조사 생성</Title>
            <SurveyForm  >
                <InputWIthLabel label="설문제목" name="SurveyTitle" placeholder="설문제목을 입력해 주세요"  type="text" />
                <InputWIthLabel label="설문설명" name="SurveyDiscription" placeholder="설문의 간단한 설명을 입력해 주세요"  type="text" />
            </SurveyForm>


        </CardContainer>

	);
}

const Wrapper = styled.div`
    & + & {
        margin-top: 1rem;
    }
`;

const Label = styled.div`
    float :left;
    font-size: 5rem;
    margin-bottom: 2rem;
`;

const Input = styled.input`
    width: 100%;
    outline: none;
    font-size: 3rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`;

const CardContainer = styled.div`
	width: 100vw !important;
	height: 100vh !important;
    text-align: center;
    background: ${({ theme: { colors } }) => colors.phantomBlue};
    font-size: ${({ theme: { fonts } }) => fonts.size.title};
    ${({ theme: { display } }) => display.flexCol()}

`;

const SurveyForm = styled(Card)`

    position:absolut;
    width : 65%;
    padding : 20px;
    margin : 20px;
    
`



;

const Title = styled.h1`
	font-size: 10rem;
	text-align: center;
	color: #fff;
	line-height: 130px;
	span {
		display: block;
	}
`;