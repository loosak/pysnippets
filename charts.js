/*jshint esversion: 6 */

var chart1; // globally available


$(document).ready(() => {

    // How to use jQuery????? let flaskvar1_jQuery = $('#chars-data').data('var1');
    console.log('Hello World!');

    let data = document.getElementById('dataId').attributes[1].value, //first element, data is string
        dataParsed = JSON.parse(data); //json array

    console.log(dataParsed);

    chart1 = Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },
        series: dataParsed
    });

});

    document.addEventListener('DOMContentLoaded', function() {

        console.log('DOMContentLoaded');

    });