function addUser(){
    player1Name=document.getElementById("player1_name_input").value;
    player2Name=document.getElementById("player2_name_input").value;
  
    localStorage.setItem("player1Name",player1Name );
    localStorage.setItem("player2Name",player2Name );
    window.location.replace("game_page.html");
  
  
  }