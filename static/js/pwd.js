
var u1 = "3bca06a34cbf27a10dbf5f93bb91fcda";
var e1 = "dc06742111e1b0e74d29af3ad120a4dd";
var p1 = "68dfbf4843be7940da3b2ddc507541f0";
$("body").delegate("#submitBTN", "click", function () {

    window.location.href="love.html";
    retturn;
    console.log($("#username").val()+$("#password").val()+$("#email").val())
    if($("#username").val() == "" || $("#username").val() == null) {
        alert("username is not null or ''");
        return false;
    }
    if($("#email").val() == "" || $("#email").val() == null) {
        alert("email is not null or ''");
        return false;
    }
    if($("#password").val() == "" || $("#password").val() == null) {
        alert("password is not null or ''");
        return false;
    }
    Verification($("#username").val(), $("#password").val(), $("#email").val());

})

function Verification(name, pwd, email) {
    if(md5(name) === u1 && md5(pwd) === p1 && md5(email) === e1) {
        // $("#form1").attr("action", "zzz.html");
        // $("#form1").submit();
        console.log("ss")
        window.location.href="love.html";
    }else {
        $("#error").html("username or email or password false!");
    }
}
