var lab1 = [5,5,0,5,5,10,10]
var lab2 = [5,5,5,5,5,5,10]
var lab3 = [5,10,10,15]
var lab4_5 = [10,5,5,5,5,8]
var lab6 = [5,5,10,5,5,10]
var quiz1 = 40

var sum1 = lab1[0] + lab1[1] + lab1[2] + lab1[3] + lab1[4] + lab1[5] + lab1[6];
var sum2 = lab2[0] + lab2[1] + lab2[2] + lab2[3] + lab2[4] + lab2[5] + lab2[6];
var sum3 = lab3[0] + lab3[1] + lab3[2] + lab3[3];
var sum4_5 = lab4_5[0] + lab4_5[1] + lab4_5[2] + lab4_5[3] + lab4_5[4] + lab4_5[5];
var sum6 = lab6[0] + lab6[1] + lab6[2] + lab6[3] + lab6[4] + lab6[5];

sums = [sum1,sum2,sum3,sum4_5,sum6]

var total_score = sums[0] + sums[1] + sums[2] + sums[3] + sums[4] + quiz1
const results = {
    lab1:  lab1,
    lab2:  lab2,
    lab3:  lab3,
    lab4_5:  lab4_5,
    lab6:  lab6,
    quiz1:  quiz1,
    sums: sums,
    total_score: total_score
}
console.log(results)
