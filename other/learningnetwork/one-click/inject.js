
if (/monsoon/.test(window.location.href)) {
	Monsoon.setScore(prompt('Final Score','100'), 1, Monsoon.Score.qbq());
	if (confirm('Injected! - Want to close the window?')) {
    window.close();
}
	
} else if (/scorm12/.test(window.location.href)) {
	Controller.send_complete('pass',prompt('Final Score','100'));
	if (confirm('Injected! - Want to close the window?')) {
    window.close();
}
} else if (/grayduck/.test(window.location.href)) {
	var grayducktype = prompt('Quiz or Exam?','quiz');
		if (grayducktype === 'quiz') {
			GrayDuck.setScore({courseId: GrayDuck.courseID,score:prompt('Final Score','100'),status: 1,questions: {}});
			if (confirm('Injected! - Want to close the window?')) {
    window.close();
}
		} else if (grayducktype === 'exam'){
			quiz.colorAnswers();
			var elementss=document.getElementsByClassName('quiz-answer-correct');
			for(var i=0;i<elementss.length;i++){
				elementss[i].childNodes[0].checked=true
				}
		} else {
		alert('error');	
		}
} else {
alert('Type not found');	
} 
