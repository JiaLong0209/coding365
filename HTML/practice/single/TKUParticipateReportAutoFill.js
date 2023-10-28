table = document.querySelectorAll('#ctl00_mainContent_ParticipateReport1_DetailsViewIU_Panel_Q_v4 tbody tr') 

for(let i in table){
    if(i%2){
        let rand = ~~(Math.random()*3)
        table[i].querySelectorAll('td input')[rand].checked = true
    }
}


