describe("Nirmalya Food Online!!!  User login API", function() {
	
    var login;
    var uid;
    var pwd1;
    
    //This will be called before running each spec.
    beforeEach(function() {
    	login=new AppController();
    });
 
    describe("when login is used to peform basic login operations", function(){
   	 it("Login should be Succeesful when user id and password are valid", function() {
   		 uid='sumit12@gmail.com';
   		 pwd1='sumit@60';
		 expect(login.valid(uid,pwd1)).toEqual('success$.[{"userid":"12","username":"sumt","type":"3","uniqueids":"594ca8a1a5e26"}]');
	 });
   	it("Login should not be Successful when user id is not valid and password is valid", function() {
   	 uid='shj@gmail.com';
		 pwd1='sumit@60';
		expect(login.invalid(uid,pwd1)).toEqual('error');

   	});
	it("Login should not be Successful when user id is valid and password is not valid", function() {
	   	 uid='sumit12@gmail.com';
		 pwd1='sumit@60';
		 expect(login.invalid(uid,pwd1)).toEqual('error');
		
	});	
	it("Login should not be Successful when user id and password are not valid", function() {
	   	 uid='adm@gmail.com';
		 pwd1='passwd';
		expect(login.invalid(uid,pwd1)).toEqual('error');
		});
	});
});


	
