var oBtn = document.getElementById("register");
    var oUser = document.getElementById("username");
    var oPwd = document.getElementById("password");
    oBtn.onclick = function(){
        $.ajax({
            url:"http://localhost:8080/proxy/localhost/php.1/register.php",
            type:"GET",
            data:`username=${oUser.value}&password=${oPwd.value}`,
            datatype:"html",
            success:function(res){
                console.log(res)
            }
        })
    }
    $.ajax({
        url:"http://localhost:8080/proxy/localhost/php.1/register.php",
        type:"GET",
        data:`username=${oUser.value}&password=${oPwd.value}`,
        datatype:"html",
        success:function(res){
            console.log(res)
        }
    })