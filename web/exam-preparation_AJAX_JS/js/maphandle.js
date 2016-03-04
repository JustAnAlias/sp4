/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var id;
$(document).ready(function () {
    $('#svg2').on('click', function (event) {
        $("#" + id).css("fill", "#c0c0c0");
        id = event.target.id;
        console.log("Id is: " + id);
        $("#" + id).css("fill", "#FF0000");

        var url = "http://localhost:8080/Studypoints-4/Country?id=" + id;
        
        var data;
        $.ajax({
            url: url,
            method: "GET",
            success: function (data) {
                console.log(data);
                $('#country').text("Country: " + data[0].name);
                $('#population').text("Population: " + data[0].population);
                $('#area').text("Area: " + data[0].area);
                $('#borders').text("Borders: " + data[0].borders);
            }
        });
    });
});


