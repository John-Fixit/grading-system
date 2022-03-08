// function total(){
//     var num1= Number(score1.value)
//     var num2= Number(score2.value)
//     var num3= Number(score3.value)
//     var num4= Number(score4.value)
//     result.value=  num1 + num2 + num3 + num4
// }
// function divide(){
//     var song = new Audio
//     if (result.value>100){
//         divideShow.value="you are a lyer!,your score is not upto that"
//     }
//     else{
//         divideShow.value=result.value/20
//     }
// }
var song = new Audio('')
function grade(){
    var num1= Number(score1.value)
    var num2= Number(score2.value)
    var num3= Number(score3.value)
    var num4= Number(score4.value)
    result.value=  num1 + num2 + num3 + num4

    if (result.value>100){
        divideShow.value="score is out of range"
    }
    else if (result.value<0){
        divideShow.value='undefined'
    }
    else{
        divideShow.value=result.value/20
    }
    if (divideShow.value>4.5 || divideShow.value==5){
        gpa.value="Exellent A"
    }
    else if(divideShow.value>4 || divideShow.value==4.5){
        gpa.value="Very Good B"
    }
    else if(divideShow.value>3.25 || divideShow.value==4){
        gpa.value="Good C"
    }
    else if(divideShow.value>2.5 || divideShow.value==3.5){
        gpa.value="Accepted D"
    }
    else{
        gpa.value="Fail"
    }
}
