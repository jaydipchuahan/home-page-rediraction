function clickME(data){
    let Section=document.getElementsByClassName("section");
      for( let i=0;i<Section.length;i++){
          Section[i].style.display="none";
      }
      document.getElementsByClassName(data)[0].style.display="flex";
  }