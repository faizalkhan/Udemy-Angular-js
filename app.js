//$('h1').attr('reply');

console.log($("h1").attr("reply"));

var person =  {
    firstname : 'Vijay',
    lastname  : 'Ajith',
      getFullName : function (){
     var fullName = this.firstname + ' ' + this.lastname;
          return fullName;
        
    }
    
}


var jane = {
      firstname : 'JaneVijay'
    
}
jane.__proto__ = person;
console.log(jane.getFullName());

var logName = function(lang1, lang2)
{
    console.log('Logged :' + this.getFullName());
    console.log('----------------------------');
    console.log('Arguments : ' + lang1  + ' ' + lang2 );
    
}

var logPersonName = logName.bind(person);

logPersonName('en','es');

logName.call(person, 'ef', 'bf');
logName.apply(person, ['lp', 'fp']);
 //logName();

(function(lang1, lang2)
{
    console.log('Logged :' + this.getFullName());
    console.log('----------------------------');
    console.log('Arguments : ' + lang1  + ' ' + lang2 );
    
}).apply(person, ['rt', 'st']);


(function(lang1, lang2)
{
    console.log('Logged :' + this.getFullName());
    console.log('----------------------------');
    console.log('Arguments : ' + lang1  + ' ' + lang2 );
    
}).call(person, 'pt', 'st');


//function Barrowing

var person2  = {
    
    firstname : 'Simbu',
    lastname  : 'Dhanush'
}
console.log(person.getFullName.apply(person2));

//function currying

function multiply(a, b) {
    
     return a * b;
}
var multiplytwo = multiply.bind(this, 2);
console.log(multiplytwo(4));
//console.log(person.setFullName());
//console.log(person.getFullName());
/*

console.log(person2.getFullName());*/
function SayhiLater()
{
   var Greetings = 'hi';
   
   setTimeout(function()
   {
        console.log('hi');
       
   }, 3000)
   
}

SayhiLater();

function caz()
{
    console.log('caz function');
}

function fix(callback)
{
    console.log('f');
    callback();
}


fix(caz);


function greez(whatToSay)
{
    return function(rname)
    {
        console.log(whatToSay + ' ' + rname);
    }
    
}
var z = greez('hi');
console.log(z);
z('tony');


function greet(name)
{
    console.log('hello ' + name);
};

 var greetings = function(fname)
 {
     return 'hello ' + fname;
 }('ramesh');

 console.log(greetings);

//var firstname = 'hero';

/*
(function(lname)
{
    console.log('welcome ' + lname);
}('zero'));
*/
var firstname = 'palani';
(function(lname)
{
    //console.log('welcome ' + lname);
    return 'welcome ' + lname ;
  
}(firstname));

//console.log(());

function a()
{
   this.baba =  { name : 'hi'};
    console.log(this);
}

var b = function()
{
     console.log(this);
}


a();
console.log(this.baba);
b();

var c = {
    
    name : 'The C object',
    log  : function()
    {
         this.name = 'Updated the c object';
         console.log(this);
         
        var setName = function(newname)
        {
            this.name = newname;
        }
        
        setName('Updated again! the c object');
        console.log(this);
        
    }
    
}

c.log();








var q = $('ul.people').addClass('newclass').removeClass("people");
console.log(q);



var s = $('#lang').val();
    console.log(s);

$('select').on('change', function() {
  var d = $('select').val();

});

 $('<span>greeting </span>').appendTo('.greeting');

/*$('.add').click(function(){
    
 $("<div class='newbox'>I'm new box by appendTo</div>").appendTo('.box');
});*/
/*
var person = [
      
    {
        firstname :'john',
        lastname : 'khan',
        addresses : [
        '111 murugan kovil',
        '141 Kabali street'
         ]
    },   
    {
        firstname :'Kabali',
        lastname : 'khan',
        addresses : [
        '111 ramar kovil',
        '141 bajana street'
         ],
        greet()
        {
          return 'hi';
        }
    }

]
 console.log(person);
 console.log(person[1].addresses[1]);
*/

/*
if (!Object.create) {
    
 Object.create = function(o) {
     debugger;
console.log(arguments.length);
     
     if(arguments.length > 1)
     {
         
          throw new Error('Object.create implementation' +  ' only accept the first parameters');
     }
     
  function F() {}
  F.prototype = o;
  return new F();
 };
}

var person =  {
    
    firstname : 'Default',
    lastname : 'Default',
    greet : function(){
       return 'Hi ' + this.firstname;
     } 
}
var john = Object.create(person);
john.firstname = "raja";
john.lastname = "kumar";
console.log(john);
*/


/*Array.prototype.amicool = 'yes';

var arr = ['john', 'baba', 'kumar'];*/

/*
for( var index in arr)
{
  console.log(index + ' : ' + arr[index]);   
}
*/

/*for(var i =0; i <arr.length;  i++)
{
     console.log(  i + ' : ' + arr[i] );   
}*/

/*
var person ={
    firstname : 'john',
}
*/
/*function person(fname, lname)
{ 
    console.log(this);
    this.firstname = fname;
    this.lastname = lname;
    //return 'hi';
   
}

person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

var john = new person("john", "Basha");
var jane =  new person("Basha", "Bhai");

console.log(john);
console.log(jane);

person.prototype.getFormalFullName = function()
{
    
     return this.lastname + ' ' + this.firstname ;
}
console.log(john.getFormalFullName());*/
/*

var bike= {
    color :"red",
    cc : 150
    
}

var car = new Object();
car.color = "blue";
car.cc = 800;

console.log(car);
console.log(bike);
*/





/*var person = {
      firstname : 'Default',
      lastname: 'Default',
      getFullName: function() {
              return this.firstname + ' '+ this.lastname;
    }   
}
var john = {
    firstname : 'john',
    lastname:'Doe'
}

//john.__proto__ = person;


/*for(var prop in john)
{
    if(john.hasOwnProperty(prop))
    {
    console.log(prop + ' :' + john[prop]);
    }
}
var jane = {
   address : '17, Palaniswamy street',
   getFormalFullName: function() {
              return this.firstname + ' '+ this.lastname;
    }   
   
}

var jim = {
   getFirstName: function() {
        return firstname;
    }

}

_.extend(john, jane, jim);

console.log(john);*/


/*
let userName = 'echo';
const  avatar = 'echo.png';
userName = 'super'
const user = {
  userName,
  avatar
};

console.log(user);
*/

/*
function tell(callback)
{
  var a =1000;
  var b= 50;
    //console.log(h);
    callback();
}
tell(function(){ console.log('hi')});
tell(function(){ console.log('hi')});
*/

//tell();
/*function buildFunctions()
{
    
    var arr =[];
    
    for(var i =0 ; i< 3; i++)
    {
       le
        arr.push(
        
            function()
            {
               console.log(i); 
            }
        )
    }
    
    return arr;
    
}
var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();*/