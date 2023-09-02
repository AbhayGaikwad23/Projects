let main="";

function Display(value) {
    main=main+value;
    return main
}

function Seven() {
    const updatedValue=Display(7)
    document.getElementById('dis').innerHTML=updatedValue;    
}

function Eight() {
    const updatedValue=Display(8)
    document.getElementById('dis').innerHTML=updatedValue;
}

function Nine() {
    const updatedValue=Display(9)
    document.getElementById('dis').innerHTML=updatedValue;}

function Add() {
    const updatedValue=Display("+")
    document.getElementById('dis').innerHTML=updatedValue;}

function Four() {
    const updatedValue=Display(4)
    document.getElementById('dis').innerHTML=updatedValue;}

function Five() {
    const updatedValue=Display(5)
    document.getElementById('dis').innerHTML=updatedValue;}

function Six() {
    const updatedValue=Display(6)
    document.getElementById('dis').innerHTML=updatedValue;}

function Sub() {
    const updatedValue=Display("-")
    document.getElementById('dis').innerHTML=updatedValue;}

function One() {
    const updatedValue=Display(1)
    document.getElementById('dis').innerHTML=updatedValue;}

function Two() {
    const updatedValue=Display(2)
    document.getElementById('dis').innerHTML=updatedValue;}

function Three() {
    const updatedValue=Display(3)
    document.getElementById('dis').innerHTML=updatedValue;}

function Mul() {
    const updatedValue=Display("*")
    document.getElementById('dis').innerHTML=updatedValue;}

function Dot() {
    const updatedValue=Display(".")
    document.getElementById('dis').innerHTML=updatedValue;}

function Zero() {
    const updatedValue=Display(0)
    document.getElementById('dis').innerHTML=updatedValue;
}

function Equal() {
    var r=main;
    var n=eval(r);
    document.getElementById('dis').innerHTML=r+"="+n;
}

function Div() {
    const updatedValue=Display("/");
    document.getElementById('dis').innerHTML=updatedValue;
}

function AC(params) {
    main=""
    document.getElementById('dis').innerHTML=main;
}

function Back(){
    main=main.slice(0,-1);
    document.getElementById('dis').innerHTML=main;
}