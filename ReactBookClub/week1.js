
//課前 Day 2｜ ES6 物件解構與強化 https://hackmd.io/N5wSVYrHR5u1kkMaRMCWHg?view



    //題目一
    //請優化以下描述六角學院資訊的 JS 寫法，可變更 hexschool 物件變數裡面的屬性名稱，讓程式碼可讀性更高
        // const students = 30000;
        // const schoolName = "六角學院";
        // const courseList = ["HTML","JS","React"]

        // const hexschool = {
        //     name: schoolName,
        //     students: students ,
        //     courseAllList: courseList,
        //     sayHello: function(){
        //         return `歡迎加入六角學院！`
        //     },
        //     addStudent: function(){
        //         hexschool.students+=1;
        //     }
        // }

        // const hexschool = {
        //     schoolName,
        //     students,
        //     courseList,
        //     sayHello(){
        //         return `歡迎加入六角學院！`;
        //     },
        //     addStudent(){
        //         hexschool.students+=1;
        //     }
        // }
        // console.log(hexschool)

    //題目二
    //請利用題目一的 hexschool 物件變數，使用物件解構語法來優化 callSchoolDetail 函式

        // function callSchoolDetail(school){
        //     console.log(`學生名稱為 ${school.name}`);
        //     console.log(`學生數共有 ${school.students}`);
        // }

        // function callSchoolDetail(school){
        //     console.log(`學生名稱為 ${schoolName}`);
        //     console.log(`學生數共有 ${students}`);
        // }
        // callSchoolDetail(hexschool)




    //題目三
    //請透過物件強化語法，在填空處宣告一個 total 物件，使用前面的變數，賦予物件屬性與方法。
    //讓後面的 console.log 可以成立。


        // const a = 1;
        // const b = 2;
        // const c = function(){
        //     console.log(`hello`)
        // }

        //<!-- 填空處開始 -->
        
        // const total = { 
        //     a,
        //     b,
        //     c
        // }

        //<!-- 填空處結束 -->
        // console.log(total.a)
        // // 1
        // console.log(total.b);
        // // 2
        // console.log(total.c())
        // hello


//課前 Day 3｜ ES6 陣列解構與強化 https://hackmd.io/qroTYRa_TVSSgvHUAALZMg?view

    //題目一
    //優化下方將陣列內的值賦予到變數上的寫法

        // const students = ['安妮', '露璐', '努努', '索娜', '艾希'];

        // const lulu = students[1];
        // const nunu = students[2];
        // const ashe = students[4];

        // const [,lulu,nunu,,ashe] = students;
        // console.log(lulu,nunu,ashe);


        
        // let numbers = [1, 7, 5];

        // let a = numbers[0];
        // let b = numbers[numbers.length - 1];
        // [a,b] = [b.a];

        // [numbers[0],numbers[numbers.length -1]] = [numbers[numbers.length-1],numbers[0]]

        // console.log(numbers);


//課前 Day 4 ｜ JavaScript 展開與其餘 https://hackmd.io/rC55tBk0Qtyjq-eApUeZMw

// //題目一
// //請運用展開運算子，優化下方程式碼

    // const numA = [1,2,3];
    // const numB = [4,5,6];
    // // const numbers = numB.concat(numA);
    // const numbers = [...numB,...numA];

    // console.log(numbers)

// //題目二
// //下方為其餘參數搭配解構賦值的函式，請先嘗試觀察並手動計算出下方答案，再直接使用程式碼觀看解答
    
    function sumFn(a, ...[x,y]) {
    console.log(`x is ${x} y is ${y}`);
    return a + x*y;
    }
    console.log(sumFn(0, 6, 3))     //7
    console.log(sumFn(0, 2, 3, 4))  //7
    console.log(sumFn('1','2','3'))  //16
    console.log(sumFn(0) )  ///NaN
           
//課前 Day 5｜常見 JS 陣列方法練習 https://hackmd.io/dCnz5QdZQp-oJuqR0IJFqg

    const moneyList = [
        {
        name: "John",
        money: 100
        },{
        name: "Tony",
        money: 300
        },{
        name: "Carter",
        money: 50
        }
    ];
    
    //  練習一：使用 .map 讓大家的 money 都乘以 5 倍
        let newMoneyList = [];

        // newMoneyList = moneyList.map( (x) => {
        //     return `{"name":"${x.name}","money":${x.money*5}}`
        // });

        // newMoneyList = moneyList.map(x => {return {name:x.name,money:x.money * 5}})
        
        newMoneyList = moneyList.map(x => ({name:x.name,money:x.money * 5}))
        
        // newMoneyList=moneyList.map((item)=>{
        //     item.money=item.money*5;
        //     return item;
        // })

        // const newMoney = moneyList.map(x => x.money*5);
        // newMoney;
        // const newName = moneyList.map(x => x.name);
        // newName
        // const newMoneyList = newName.map((elem, index) =>({name: elem, money: newMoney[index]}));

        console.log(newMoneyList)
        
        // 結果為 [{"name":"John","money":500},{"name":"Tony","money":1500},{"name":"Carter","money":250}]
        


    //  練習二：使用 .filter 篩選出 newMoneyList 中 money 大於 1000 的資料
        let filterMoneyList = [];

        // filterMoneyList = newMoneyList.filter(x => {
        //     if(x.money > 1000){
        //         return {
        //             name:x.name,
        //             money:x.money
        //         }
        //     }
        // })


        filterMoneyList = newMoneyList.filter(x => x.money > 1000)

        console.log(filterMoneyList)
        // 結果為 [{"name":"Tony","money":1500}]



    // cool things
    
    /**
     * 陣列透過搜尋條件（查詢）過濾物件
     */
        // var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

        // function filterItems(query) {
        // return fruits.filter(function(el) {
        //     return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        // })
        // }

        // console.log(filterItems('ap')); // ['apple', 'grapes']
        // console.log(filterItems('an')); // ['banana', 'mango', 'orange']




    
      









