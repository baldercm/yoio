#!/bin/sh

echo 'Installing NodeJs global modules: Cordova, Ionic'
npm install -g cordova ionic

cd ~/git/yoio

echo 'Running npm install'
npm install

echo 'Running bower install'
bower install

echo 'Running webdriver-manager update'
./node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update

echo 'yoio is ready!'
