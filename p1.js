
function verifyName(){
    var cname= document.getElementById("cname").value;
    let pattern=/^[A-Za-zñáéíóúÑÁÉÍÓÚ]{3,}[ ][A-Za-zñáéíóúÑÁÉÍÓÚ]{3,}$/;
    if(cname==""){
        return true;
       }
    else if(pattern.test(cname)){
          document.getElementById('formatnamecorrect').innerHTML="The format is correct";
          return true;
       }
       else{
        return false;
       }
  }

function verifyLogin(){
  var clogin= document.getElementById("clogin").value;
  let pattern= /^[0-9a-z]{4,8}$/;
  if(clogin==""){
    return true;
   }
    else if(!pattern.test(clogin) || (clogin.length < 4 || clogin.length > 8)){
        document.getElementById('formatlogincorrect').innerHTML="";
        document.getElementById('formatlogin').innerHTML="Only ASCII lowercase letters and numbers and between 4 and 8 characters.";
        return false;
    }
    else{
        document.getElementById('formatlogin').innerHTML="";
        document.getElementById('formatlogincorrect').innerHTML="The format is correct";
        return true;
    }
}

function verifyPasswd(){
    var cpasswd= document.getElementById("cpasswd").value;
    let pattern= /(?=.*[+,-,*,/])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
    if(cpasswd==""){
        return true;
       }

    else if(!pattern.test(cpasswd) || (cpasswd.length < 6|| cpasswd.length > 12)){
        document.getElementById('formatpasswdcorrect').innerHTML="";
        document.getElementById('formatpasswd').innerHTML="It has to contain at least one uppercase letter, one lowercase letter (with no accents), one number, and one symbol from set “+-*/” and between 4 and 8 characters.";
        return false;
    }
    else{
        document.getElementById('formatpasswd').innerHTML="";
        document.getElementById('formatpasswdcorrect').innerHTML="The format is correct";
        return true;
    }
  }

function verifyDNI(){
    var cDNI= document.getElementById("cdni").value;
    let pattern= /^[0-7]{1}[0-9]{7}[A-Za-z]{1}$/;
    if(cDNI==""){
        return true;
       }
    else if(!pattern.test(cDNI) || cDNI.length!=9){
          document.getElementById('formatdni').innerHTML="8 digits starting with a number between 0 and 7 and additional non-accented ASCII letter (e.g., 12345678A).";
          document.getElementById('formatdnicorrect').innerHTML="";
          return false;
        }
      else{
        document.getElementById('formatdni').innerHTML="";
        document.getElementById('formatdnicorrect').innerHTML="The format is correct";
        return true;
      }
}

function DateHour(){

var today = new Date();
var now = today.toLocaleString();

document.getElementById('cdate').value=now;
}

function Infobrowser(){

let browserLanguage= navigator.language;
let browserPlatform= navigator.platform;
let browserUser= navigator.userAgent;
let browseronLine= navigator.onLine;
let browsercookieEnabled= navigator.cookieEnabled;

document.getElementById('cbrowser').value= "Language: " +browserLanguage.toString()+" Platform: "+browserPlatform.toString()+ " User: "+browserUser.toString()+" On Line: "+browseronLine.toString()+" Cookie Enabled: "+browsercookieEnabled.toString();

}

function checkOnlyOneGenre(){
    document.querySelectorAll('#choosegenre input[type=checkbox]').forEach(function(checkElement) {
        //no check
        $noCheck = document.querySelector("#noCheck");
        $noCheck.checked = false;
        //yes check
        $yesCheck = document.querySelector("#yesCheck");
        $yesCheck.checked = false;
    });
}


function checkAll() {
    document.querySelectorAll('#choosegenre input[type=checkbox]').forEach(function(checkElement) {
        checkElement.checked = true;
        $noCheck = document.querySelector("#noCheck");
        $noCheck.checked = false;
    });
}

function uncheckAll() {
    document.querySelectorAll('#choosegenre input[type=checkbox]').forEach(function(checkElement) {    
        checkElement.checked = false;
        $noCheck = document.querySelector("#noCheck");
        $noCheck.checked = true;
    });
}

function methodGET(){
    document.getElementById('multipartPost').disabled=true;
    if(document.getElementById('GET').checked){
        document.getElementById('myfirstform').method= "GET";

    }
   
}
function methodPOST(){
    document.getElementById('multipartPost').disabled=false;
    if(document.getElementById('POST').checked){
        document.getElementById('myfirstform').method= "POST";
    }
}

function enctypeMultipart(){
    if(document.getElementById('multipartPost').checked){
        document.getElementById('myfirstform').enctype= "multipart/form-data";
    }
}
function enctypeURL(){
    if(document.getElementById('urlencoded').checked){
        document.getElementById('myfirstform').enctype= "application/x-www-form-urlencoded";
    }
}

function send_form(){
    var cname= document.getElementById("cname").value;
    var clogin= document.getElementById("clogin").value;
    var cpasswd= document.getElementById("cpasswd").value;
    var cDNI= document.getElementById("cdni").value;

    if(verifyName() || cname==""){
        if(verifyLogin() || clogin==""){
            if(verifyPasswd() || cpasswd==""){
                if(verifyDNI() || cDNI==""){
                    return true;
                }else{
                    return false;
                }
            }else{return false;}
        }else{return false;}
    }else{ return false;
    }


}

function resetear(){
    
    document.getElementById('formatnamecorrect').innerHTML="";
    document.getElementById('formatlogin').innerHTML="";
    document.getElementById('formatlogincorrect').innerHTML="";
    document.getElementById('formatpasswdcorrect').innerHTML="";
    document.getElementById('formatpasswd').innerHTML="";
    document.getElementById('formatdnicorrect').innerHTML="";
    document.getElementById('formatdni').innerHTML="";
    document.getElementById('myfirstform').reset();
    alert("The form has been reset");

}