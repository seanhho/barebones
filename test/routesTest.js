var should = require('should');
var request = require('supertest');
var app = require('../server/app');

//var testDB = require('../config/test_database');
//var mongoose = require('mongoose');


describe('routes integration testing', function(){
	describe('Get /', function(){
		it('should return a 200', function(callback){
		request(app)
			.get('/')
			.expect(200)
			.end(callback)
		})
	});
});