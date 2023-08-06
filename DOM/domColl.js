let op;

// op = document.all;

op = document.documentElement; //all under html tag

op = document.head;
op = document.body;
op = document.head.children;//everything under head
op = document.doctype;//<!DOCTYPE html>
op = document.domain;
op = document.URL;
op = document.characterSet;
op = document.contentType;
op = document.forms;
op = document.forms[0];
op = document.forms[0].id;
op = document.forms[0].method;//get/post
op = document.forms[0].action;//site where it does the action

// document.forms[0].id = 'new-id';

op = document.links;
op = document.links[0];
op = document.links[0].href;
op = document.links[0].href = 'https://facebook.com';
op = document.links[0].id = 'google-link';
op = document.links[0].className = 'google-class';
op = document.links[0].classList;

op = document.images;
op = document.images[0];
op = document.images[0].src;

//can't use forEach for html collection without converting it to array

const forms = Array.from(document.forms);
forms.forEach((form)=>console.log(form));

console.log(op);