
function addUsername(){
    username = document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.loaction = "NotsApp_room.html";
}