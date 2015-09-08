'use strict';

var compositesApp = angular.module('compositesApp', ['ngResource']);

compositesApp.config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});