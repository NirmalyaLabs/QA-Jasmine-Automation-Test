$(document).ready(function()
 {
 
 
 //var email1=$("#email1").val();

 
 //var dataString="title="+title+"&duration="+duration+"&price="+price+"&insert=";
 
 $.ajax({
 type: "POST",
 url:"http://nirmalyalabs.com/jhd/mobileurl/mobileapi.php?flag=5&email1=sumit12@gmail.com&pass1=sumit@60",
 crossDomain: true,
 cache: false,
 //beforeSend: function(){ $("#btnsignin").val('Connecting...');},
 success: function(data){
alert(data);
  
 }
 });
 });
 