const bmiStatesData = {
    "overThin": {
    "state": "過輕",
    "color": "藍色"
    },
    "normal": {
    "state": "正常",
    "color": "紅色"
    },
    "overWeight": {
    "state": "過重",
    "color": "澄色"
    },
    "mildFat": {
    "state": "輕度肥胖",
    "color": "黃色"
    },
    "moderateFat": {
    "state": "中度肥胖",
    "color": "黑色"
    },
    "severeFat": {
    "state": "重度肥胖",
    "color": "綠色"
    }
}
let {"overThin": ot,"normal":nm, "overWeight":ow,"mildFat":mi,"moderateFat":mf,"severeFat":sf} = bmiStatesData
// 第一階段：請寫 printBmi 函式，並印出對應狀態

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」


let printBmi = (h, w) => {
    let BMI = w / (h/100)**2;
    let result = "";
    result = typeof h != 'number' || typeof w != 'number' || h<0 || w<0?"您的數值輸入錯誤，請重新輸入":
    BMI<18.5 ?  "您的體重過輕":
    BMI<24   ?  "您的體重正常":
    BMI<27   ?  "您的體重過重":
    BMI<30   ?  "您的體重輕度肥胖":
    BMI<35   ?  "您的體重中度肥胖":
                "您的體重重度肥胖"; 
    console.log(result);
}
// 第二階段：請程式碼裡加入此變數，並嘗試運用此變數裡的資訊。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90)>> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110)>> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130)>> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高","體重")>> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

printBmi = (h,w)=>{
    let BMI = w / (h/100)**2;
    let result = "您的體重w，健康指數為c";
    if(typeof h != 'number' || typeof w != 'number' || h<0 || w<0){
        console.log("您的數值輸入錯誤，請重新輸入") ;
        return;
    }
    result = result.replace(/w/g,
    BMI<18.5 ? ot.state:
    BMI<24   ? nm.state:
    BMI<27   ? ow.state:
    BMI<30   ? mi.state:
    BMI<35   ? mf.state:
               sf.state
    )
    result = result.replace(/c/g,
    BMI<18.5 ? ot.color:
    BMI<24   ? nm.color:
    BMI<27   ? ow.color:
    BMI<30   ? mi.color:
    BMI<35   ? mf.color:
               sf.color
    ) 
    console.log(result);
}
// printBmi(178,20);
// printBmi(178,70);
// printBmi(178,85);
// printBmi(178,90);
// printBmi(178,110);
// printBmi(178,130);
// printBmi(34,-23);

// 第三階段：儲存每筆計算資料，多一個變數為 bmiHistoryData，並賦予空陣列來儲存計算物件資料，若數值輸入錯誤，則不儲存。

// printBmi(178, 20) >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70) >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85)>> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// showHistoryData() >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

let count = 0;
let lastBMI = {
    data:0,
    state:"",
    color:""
};
function showHistoryData(){
    console.log(`您總共計算 ${count} 次 BMI 紀錄，最後一次 BMI 指數為 ${lastBMI.data}，體重${lastBMI.state}！健康指數為${lastBMI.color}！`);
}
printBmi = (h,w)=>{
    let BMI = {
        data:(w /(h/100)**2).toFixed(2),
        state:"",
        color:""
    };
    let result = "您的體重w，健康指數為c";
    if(typeof h != 'number' || typeof w != 'number' || h<0 || w<0){
        console.log("您的數值輸入錯誤，請重新輸入") ;
        return;
    }
    count+=1;
    ({"state":BMI.state,"color":BMI.color} = BMI.data<18.5 ? ot:
    BMI.data<24   ? nm:
    BMI.data<27   ? ow:
    BMI.data<30   ? mi:
    BMI.data<35   ? mf:
                    sf)
    result = result.replace(/w/g,BMI.state);
    result = result.replace(/c/g,BMI.color);
    lastBMI = BMI;
    console.log(result);
}
printBmi(178,20);
printBmi(178,70);
printBmi(178,85);
printBmi(178,90);
printBmi(178,110);
printBmi(178,130);
printBmi(34,-23);
showHistoryData();