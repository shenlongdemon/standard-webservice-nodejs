
/*
 * GET users listing.
 */

var q = require('q');
var test = require("./modules/test/test");
module.exports =
{
	doaction: function(service, action, obj){
		var deferred = q.defer();
		try {
			console.log("service call doaction " + service + "/" + action + "/" + obj);
			var ret = eval(service +'["' + action + '"](obj)');		
			deferred.resolve(ret);	
		}
		catch(ex){
			deferred.reject(ex);
		}
    	return deferred.promise;
	}
}