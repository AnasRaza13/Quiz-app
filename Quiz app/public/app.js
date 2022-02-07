var displayQuestion = document.getElementById('displayQuestion');
var answerParent = document.getElementById('answerParent');
var currentQuestionNumber = document.getElementById('currentQuestionNumber');
var totalQuestionNumber = document.getElementById('totalQuestionNumber');
var questionDisplay = document.getElementById('questionDisplay');
var resultDisplay = document.getElementById('resultDisplay');
var percentage = document.getElementById('percentage');
var nextButton = document.getElementById('button1')
var indexValue = 0;
var marks = 0;
var readList = [];



function renderQuestion() {
    setTimeout(() => {
    var readData =  JSON.parse(window.localStorage.getItem("listofQuestions"));
     readList.push(readData);
    displayQuestion.innerHTML = readList[indexValue].question;
    readList.options.forEach((element,index) => {
        var optvalue = readList[indexValue].options[index];
        var corrvalue = readList[indexValue].correctAns
        
        answerParent.innerHTML += `<div class="col-md-6 my-3">
        <button 
        onclick="checkQuestion( '${optvalue}','${corrvalue}')"
          class="btn 
          p-3 
          btn-outline-success 
          w-100 
          txtPrimary 
          rounded-pill 
          shadow 
          fw-bold 
          d-block">
          ${optvalue}
          </button>
    </div>`;
        
    });
    

        
    
    
    totalQuestionNumber.innerHTML = readList.length;
    currentQuestionNumber.innerHTML = indexValue + 1;
   
   
     
    }, 1200);
    
}

renderQuestion();

// function nextQuestion(){
//     answerParent.innerHTML = "";
//     if (indexValue + 1 == questions.length){
//         resultDisplay.style.display= 'block';
//         questionDisplay.style.display= 'none';

//         var totalpercentage = (marks/questions.length)*100;
//         percentage.innerHTML = totalpercentage.toFixed(2);
//     }else{
//         indexValue++;
//         renderQuestion();
//     }
// }

// function checkQuestion(optionsValue, correctValue){
//     if(optionsValue == correctValue){
//         marks++;
//         console.log(marks);
//     }
//     nextQuestion();
// }