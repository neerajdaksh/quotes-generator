//variable
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [
{
quote:'""The purpose of our lives is to be happy.""',
person:'"Dalai Lama"'
},
{
quote:'"Life is what happens when youre busy making other plans."',
person:'"John Lennon"'
},
{
quote:'"Get busy living or get busy dying."',
person:'"Stephen King"'
},
{
quote:'"You only live once, but if you do it right, once is enough."',
person:'" Mae West"'
},
{
quote:'"Many of life’s failures are people who did not realize how close they were to success when they gave up."',
person:'"Thomas A. Edison"'
},
{
quote:'"If you want to live a happy life, tie it to a goal, not to people or things"',
person:'"Albert Einstein"'
},
{
quote:'""Never let the fear of striking out keep you from playing the game"',
person:'"Babe Ruth"'
},
{
quote:'"Money and success don’t change people; they merely amplify what is already there"',
person:'"Will Smith"'
},
 
{
quote:'"Not how long, but how well you have lived is the main thing"',
person:'"Seneca"'
},
{
quote:'"If life were predictable it would cease to be life, and be without flavor"',
person:'"Eleanor "'
}
];


btn.addEventListener('click',function(){
    let randomSelectQuote = Math.floor(Math.random()*quotes.length);
 
    quote.innerHTML = quotes[randomSelectQuote].quote;
    person.innerHTML = quotes[randomSelectQuote].person; 
});





