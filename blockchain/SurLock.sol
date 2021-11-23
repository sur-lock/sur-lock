// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract SurLock {
    
    struct Question {
        string qType;
        string title;
        string[] options;
        string[] imgs;
    }
    
    struct Survey {
        string title;
        string creator;
        string startDate;
        string endDate;
        Question[] questions;
        string[][] responses;
        string[] respondents;
    }
    
    mapping (string => Survey) surveys;
    mapping (string => mapping (string => bool)) doSurveyYn;

    // input example : "2021년 하반기 SSAFY 교육생 설문조사", "412343", "survey1", "2021-09-23T00:00:00", "2021-10-23T23:59:59", [["select", "다음 중 더 좋아하는 것은?", ["강아지", "고양이"], []], ["write", "가장 선호하는 프로그래밍 언어는?", [], []]]
    function addSurvey(string calldata _title, string calldata _creator, string calldata _key, string calldata _startDate, string calldata _endDate, Question[] memory _questions) external {
        Survey storage newSurvey = surveys[_key];
        newSurvey.title = _title;
        newSurvey.creator = _creator;
        newSurvey.startDate = _startDate;
        newSurvey.endDate = _endDate;
        for (uint i = 0; i < _questions.length; i++) {
            newSurvey.questions.push(_questions[i]);    
        }
    }
    
    function getSurvey(string calldata _key) external view returns (Survey memory) {
        return surveys[_key];
    }
    
    // input example : "412344", "survey1", ["1", "java"]
    function addResponse(string calldata _respondent, string calldata _key, string[] memory _response) external {
        require(
            !doSurveyYn[_key][_respondent],
            "You can participate in the survey only once"
        );
        
        surveys[_key].respondents.push(_respondent);
        surveys[_key].responses.push(_response);
        
        doSurveyYn[_key][_respondent] = true;
    }
    
    function getResponses(string calldata _key) external view returns (string[][] memory) {
        return surveys[_key].responses;
    }
    
}