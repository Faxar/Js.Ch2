function Question(question, correctAnswer) {
    this.question = question;
    this.answer = correctAnswer;
}

var firstQuestion = new Question('What is your name?', 'Vassili');
var secondQuestion = new Question('How old are you?', '34');

var questionsArr = [firstQuestion, secondQuestion];

(function(){
        for (var i = 0; i<questionsArr.length; i++){
            prompt(questionsArr[i].question);
        };
    }
)();



