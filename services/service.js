
/*
 * GET users listing.
 */


var test = require("./modules/test/test");
module.exports =
{
	doaction: function(service, action, obj){
		console.log("service call doaction " + service + "/" + action + "/" + obj);
		var ret = eval(service +'["' + action + '"](obj)');		
		return ret;
	}
}