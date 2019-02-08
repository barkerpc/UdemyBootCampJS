// Calcuate grades two arguments student score , total score
// 15/20 --> You got a C (75%)
//100-90 A , B 89-80, C 79-70, D 69-60, F59-0

let gradeCalculator = function(studentScore, totalScore) {
    let percent = (studentScore/totalScore) * 100
    let grade = undefined

    if (percent >= 90) {
        //its not an F
        grade = 'A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >= 70) {
        grade = 'C'
    } else if (grade >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return `${studentScore}/${totalScore} --> You got a ${grade}(${percent}%)`


}


let result = gradeCalculator(70,100)
console.log(result) 

