import React from "react";
import styled from "styled-components";
import 'antd/dist/antd.css';
import { Card, Form, Input } from 'antd'


interface Inputs {

    label : string;
    name : string;
    placeholder : string;
    type : string;



}

const TitleInputWIthLabel = () =>{

        return( 
            <Form
      layout="vertical"
      autoComplete="off"
      size="large"
    >
      <FormWrapper style={{ overflow: 'hidden' }}>
        <Form.Item
          name="SurveyTitle"
        >
            <Label>설문 제목</Label>
            <Input placeholder="설문 제목을 입력해주세요" />
        </Form.Item>
      </FormWrapper>
      <FormWrapper style={{ overflow: 'hidden' }}>
        <Form.Item
          name="SurveyDiscription"
        >
            <Label>설문 설명</Label>
            <Input placeholder="설문에 대한 설명을 입력해주세요" />
        </Form.Item>
      </FormWrapper>
    </Form>
        );
   

}

export default function CreateSurvey() {

	return (
        <CardContainer>
            <Title>설문조사 생성</Title>
            <SurveyForm  >
                <TitleInputWIthLabel />
            </SurveyForm>


        </CardContainer>

	);
}

const Label = styled.h1`

    font-size : 3rem;
    float : left;
    margin-bottom : 10px;
    coler : #fff;
    span{
        display : block;
    }

`;
const FormWrapper = styled.div`

    font-size : 2rem;
   
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