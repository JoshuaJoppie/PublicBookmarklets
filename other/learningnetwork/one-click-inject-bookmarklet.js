javascript:void%20function(){if(/monsoon/.test(window.location.href))Monsoon.setScore(prompt(%22Final%20Score%22,%22100%22),1,Monsoon.Score.qbq()),confirm(%22Injected!%20-%20Want%20to%20close%20the%20window%3F%22)%26%26window.close();else%20if(/scorm12/.test(window.location.href))Controller.send_complete(%22pass%22,prompt(%22Final%20Score%22,%22100%22)),confirm(%22Injected!%20-%20Want%20to%20close%20the%20window%3F%22)%26%26window.close();else%20if(/grayduck/.test(window.location.href)){var%20o=prompt(%22Quiz%20or%20Exam%3F%22,%22quiz%22);if(%22quiz%22===o)GrayDuck.setScore({courseId:GrayDuck.courseID,score:prompt(%22Final%20Score%22,%22100%22),status:1,questions:{}}),confirm(%22Injected!%20-%20Want%20to%20close%20the%20window%3F%22)%26%26window.close();else%20if(%22exam%22===o){quiz.colorAnswers();for(var%20e=document.getElementsByClassName(%22quiz-answer-correct%22),n=0;n%3Ce.length;n++)e[n].childNodes[0].checked=!0}else%20alert(%22error%22)}else%20alert(%22Type%20not%20found%22)}();
