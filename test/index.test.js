var request = require('supertest');
var express = require('express');
 
var server = require('../server');
 
describe('Index Page', function() {
  it("renders successfully", function(done) {
    request(server).get('/').expect(200, done);    
  })
})
