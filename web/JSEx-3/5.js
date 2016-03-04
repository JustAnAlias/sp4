/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
	$("#submit").attr('disabled','disabled');
	
	$("form").keyup(function(){
	
	//To disable submit button
	$("#submit").attr('disabled','disabled');

	//Validating Fields
	var name=$("#name").val();
	var email=$("#email").val();
	var pass=$("#pass").val();
	var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

	if(!(name==""||email==""||pass==""))
	{
	if(filter.test(email))
	{
	
	//To enable submit button 
	$("#submit").removeAttr('disabled');
	$("#submit").css({"cursor":"pointer","box-shadow":"1px 0px 6px #333"});
	}
	}
});

	//On click of submit button 
	$("#submit").click(function(){
	$("#submit").css({"cursor":"default","box-shadow":"none"});
	alert("Form Submitted Successfully..!!");
	});

});