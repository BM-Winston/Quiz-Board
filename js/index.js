var form = document.getElementById("quiz-board");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function checkAnswers(){
   var answer = document.querySelector('input[name="question-a"]:checked').value;
   var answer2 = document.querySelector('input[name="question-b"]:checked').value;
   var answer3 = document.querySelector('input[name="question-c"]:checked').value;
   var answer4= document.querySelector('input[name="question-d"]:checked').value;
   var answer5 = document.querySelector('input[name="question-e"]:checked').value;


   var grade = 0
   var answerArray = [
      "correct5",
      "correct4",
      "correct3",
      "correct2",
      "correct",
   ]

   for (var i = 0; i < answerArray.length; i++) {
   if (answerArray[i] === answer) {
      grade += 10;
   }if(answerArray[i] === answer2){
      grade += 10;
   }if(answerArray[i] === answer3) {
      grade += 10;
   }if(answerArray[i] === answer4) {
      grade += 10;
   }if(answerArray[i] === answer5) {
      grade += 10;
   }
   else{
      console.log("NO")
   }
   console.log(grade)

   }

}
