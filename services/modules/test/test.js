
/*
 * GET users listing.
 */
var q = require('q');

var test = function(obj){
	return {msg:"test success", obj: obj} ;
};
var testAsync = function(obj){    	
	var deferred = q.defer();	
	var res = {
		Data : "test Async",
		Message: "",
		Status: 1
	};
	deferred.resolve(res);	

    return deferred.promise;

};
module.exports =
{	
	test : test, // call by [host].com/api/test/test/1
	testAsync : testAsync
}