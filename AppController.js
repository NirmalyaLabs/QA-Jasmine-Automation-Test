// Below function Executes on click of login button.
AppController=function(){};
data1='success$.[{"userid":"12","username":"sumt","type":"3","uniqueids":"594ca8a1a5e26"}]';
dat='';
function ajaxCallBack(retString){
    dat = retString;
return dat;
}

AppController.prototype.valid=function(Userid,passw){
Userid1=Userid;
passw1=passw;
$(document).ready(function()
		 {
	var dataString="&email1="+Userid1+"&pass1="+passw1;
		 $.ajax({
		 type: "POST",
		 url:"http://nirmalyalabs.com/jhd/mobileurl/mobileapi.php?flag=5"+dataString,
		  crossDomain: true,
		 cache: false,
		 //beforeSend: function(){ $("#btnsignin").val('Connecting...');},
		 success: function(data){
		
	data1=ajaxCallBack(data);
		 }
		 });
		 });
return data1;
}
AppController.prototype.invalid=function(Userid,passw){
	Userid1=Userid;
	passw1=passw;
	data2='error';
	$(document).ready(function()
			 {
				var dataString="&email1="+Userid1+"&pass1="+passw1;
	
			 $.ajax({
			 type: "POST",
			 url:"http://nirmalyalabs.com/jhd/mobileurl/mobileapi.php?flag=5"+dataString,
			  crossDomain: true,
			 cache: false,
			 //beforeSend: function(){ $("#btnsignin").val('Connecting...');},
			 success: function(data){
				 data2=ajaxCallBack(data);
			 }
			 });
			 });
	
	return data2;
		
}




