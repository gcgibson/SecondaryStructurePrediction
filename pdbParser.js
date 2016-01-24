var fs  = require('fs');
var f1 = fs.readFileSync("/Users/grahamgibson/Downloads/pdb2mx7.ent");
var sys = require('sys');
var fileString = f1.toString();
var patt = /\s+/;
var form = fileString.split(patt);
var input = [];
var output = [];