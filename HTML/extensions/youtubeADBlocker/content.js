window.onload = () => {
   let closeInterval = setInterval(() => {
      if(document.querySelector('.opened') && document.querySelector('ytd-enforcement-message-view-model.ytd-popup-container')){
         let elements = [document.querySelector('.opened'),document.querySelector('ytd-enforcement-message-view-model.ytd-popup-container')]
         for(let i of elements){
            i.style.display = 'none';
         }
         console.log("Close");
         clearInterval(closeInterval);
      }
   }, 1000);
}