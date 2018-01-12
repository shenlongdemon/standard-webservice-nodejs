
/*
 * GET users listing.
 */
var services = require("./../services/service");
var version = "Add version when return data" + "" ;

var doget = function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
	var service = req.params.service.toLowerCase();
	var action = req.params.action;
	var obj = req.params.obj;	
	var async = false;
	if(action.toLowerCase().endsWith('async')){
		async = true;
	}
	console.log("controller call doget " + service + "/" + action + "/" + obj + "  with async = " +  async);
	if(async == true){
		console.log("controller call doget async");
	    services["doaction"](service, action, obj).then(function (data) {
	        console.log("controller get from doget async");			
	        res.status(200).send(data);
	    }).catch(function (error) {
			var result = {
				Data: error,
				Message: error,
				Status: -1
			};
			res.status(200).send(result);
	    });
	}
	else{
		try {
			console.log("controller call doget");
			var ret = services["doaction"](service, action, obj);
			
			console.log("controller get from doget");
			res.status(200).send(ret);
		}
		catch(ex){
			var result = {
				Data: ex,
				Message: ex,
				Status: -1
			};
			res.status(200).send(result);
		}
	}
};
var dopost = function(req, res){
	console.log("controller call dopostv1 " + req);
	var service = req.params.service.toLowerCase();
	var action = req.params.action;

	var obj = req.body;	
	res.setHeader('Access-Control-Allow-Origin','*');	
	var async = false;
	if(action.toLowerCase().endsWith('async')){
		async = true;
	}
	console.log("controller call dopostv1 " + service + "/" + action + "/" + obj + "  with async = " +  async);
	if(async == true){
		console.log("controller call dopostv1 async");
		services["doaction"](service, action, obj).then(function (data) {		    
		    console.log("controller get from dopostv1 async");
			res.status(200).send(data);
	    }).catch(function (error) {
			var result = {
				Data: error,
				Message: error,
				Status: -1
			};
			res.status(200).send(result);
	    });
	}
	else{
		console.log("controller call dopostv1 sync");
		try {
			var ret = services["doaction"](service, action, obj);				
			console.log("controller get from dopost");
			res.status(200).send(ret);
		}
		catch(ex){
			var result = {
				Data: ex,
				Message: ex,
				Status: -1
			};
			res.status(200).send(result);
		}
	}
};
module.exports =
{	
    doget: doget,   
	dopost : dopost
}