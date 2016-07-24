angular.module('starter.services', ['ngResource'])
.factory('Session', function($resource){
  // This should go in a config module
  return $resource('http://localhost:5000/sessions/:sessionId');
});