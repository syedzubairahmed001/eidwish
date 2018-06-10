$(document).ready(function(){
    let userName;
    let userNameH1;
    $(".sec-enter-name-btn").click( function(){
        if(document.getElementById("sec-enter-name-input").value === ''){
            alert("name cannot be empty");
        }
        else{
            $(".enter-name-section").fadeOut("slow");
        userName = document.getElementById("sec-enter-name-input").value;
        userNameH1 = document.getElementById('user-name-h1');
        userNameH1.innerHTML = userName;
        }
    });
    console.log(userName);
    // let dataText = "HELLO, *" + userName + "* HAVE SEND A SPECIAL GIFT FOR YOU, *open this, enter your name, and see magic!* and don't forget *" + userName + "* is the first one doing this-->";
    // $(".whatsapp").attr("data-text") = dataText;

    /* --whatsapp share-*/
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
     $(document).on("click", '.whatsapp', function() {
            if( isMobile.any() ) {
                var text = "HELLO, *" + userName + "* HAVE SEND A SPECIAL GIFT FOR YOU, *open this, enter your name, and see magic!* and don't forget *" + userName + "* is the first one doing this-->";
                var url = $(this).attr("data-link");
                var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
                var whatsapp_url = "whatsapp://send?text=" + message;
                window.location.href = whatsapp_url;
            } else {
                alert("Please share this article in mobile device");
            }
        });
});

// function test(){
//     var userName = document.getElementById("sec-enter-name-input").value;
//     console.log(userName);
// }