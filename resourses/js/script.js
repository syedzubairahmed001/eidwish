$(document).ready(function(){
    var userName;
    var userNameH1;
    $(".sec-enter-name-btn").click( function(){
        $(".enter-name-section").fadeOut("slow");
        userName = document.getElementById("sec-enter-name-input").value;
        userNameH1 = document.getElementById('user-name-h1');
        userNameH1.innerHTML = userName;
    });
    console.log(userName);

});

// function test(){
//     var userName = document.getElementById("sec-enter-name-input").value;
//     console.log(userName);
// }