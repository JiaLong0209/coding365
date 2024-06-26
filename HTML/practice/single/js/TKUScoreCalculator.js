 //https://sso.tku.edu.tw/aissinfo/emis/TMWC072.aspx
var $ = (s) => document.querySelector(s);
var $a = (s) => document.querySelectorAll(s);
var tbody = $('p > table > tbody');
var trs = Array.from(tbody.children).slice(1);

var subjects = [];
var credits = [];
var scores = []; 
var weightedScores = [];
var totalCredits = 0;
var totalScores = 0;
var totalWeightedScore = 0;

var averageScore = 0;
var averageWeightedScore = 0;

var minCredit = 1;
var deleteQueue = [];
var canDeleteElement = true;
var blackList = ["社團學習與實作－入門課程※"];

function deleteElements(){
    for (let i of deleteQueue){
        i.remove();
    }
}

function isInBlackList(str){
    return blackList.includes(str);
}

function getData(){
    for(let i in trs){
        let tds = trs[i].children;
        for(let j in tds){
            if(typeof tds[j] == "object"){
                let num = ~~(tds[j].innerText);
                if(j == 0){
                    subjects.push(tds[j].innerText.trim());
                    if(isInBlackList(tds[j].innerText.trim())){
                        deleteQueue.push(trs[i]);
                    }
                }else if(j == 1){
                    if(canDeleteElement && num < minCredit){
                        deleteQueue.push(trs[i]);
                    }
                    credits.push(num );
                }else if(j == 2){
                    scores.push(num);
                    weightedScores.push(scores[i] * credits[i]);
                }
            }
        }
    }
}

function printInto(){
    console.log("Information:");
    let size = subjects.length;
    let creditOffset = 0;
    let scoreOffset = 0;

    for(let i = 0; i < size; i++){
        if(isInBlackList(subjects[i])){
            console.log(`In Blacklist: ${subjects[i]}`);
            creditOffset -= credits[i];
            scoreOffset -= scores[i] * credits[i];
         }
    }

    totalWeightedScore = weightedScores.reduce((acc, cur) => acc + cur, 0);
    totalScores = scores.reduce((acc, cur) => acc + cur , 0);
    totalCredits = credits.reduce((acc, cur) => acc + cur, 0);
    averageWeightedScore = (totalWeightedScore + scoreOffset) / (totalCredits + creditOffset);
    averageScore = totalScores / size;

    console.log(`
        Subjects: [${subjects}]
        Credits: [${credits}]
        Scores: [${scores}]
        Weighted Scores: [${weightedScores}]

        Total Subjects: ${size}
        Total Credit: ${totalCredits}
        Total Score: ${totalScores}
        Total Weighted Score: ${totalWeightedScore}

        Average Score: ${averageScore}
        Average Weighted Score: ${averageWeightedScore}

        Score Offset: ${scoreOffset}
        Credit Offset: ${creditOffset}
        `)

}
getData();
deleteElements();
printInto();


