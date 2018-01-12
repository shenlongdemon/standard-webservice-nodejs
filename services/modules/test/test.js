
/*
 * GET users listing.
 */
var q = require('q');

var test = function(obj){
	var res = {
		Data : "test",
		Message: "",
		Status: 1
	};
	return res;
};
var testAsync = function(obj1, obj2){    	
	var deferred = q.defer();	
	var res = {
		Data : "test Async " + obj1 +" & "+ obj2,
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