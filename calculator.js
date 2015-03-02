$(function() {
  
  //When a number is clicked, display it in the console
  function display() {
    $("#console").append($(this).text());
  }
  $(".nums").click(display);
  $(".operator").click(display);
  
  //When clear is clicked, clear console
  $(".clear").click(function() {
    $("#console").text("");
  })
  
  //When the back arrow is clicked, delete a character
  $(".delete").click(function() {
    var log = $("#console").text().toString();
    log = log.substring(0, log.length - 1);
    $("#console").text(log);
  })
  
  //When equal is clicked, calculate and display sum
  $(".equal").click(function() {
    var equation = $("#console").text().toString();
    //Not sure if eval is harmful but using it anyway
    var sum = eval(equation);
    $("#console").text(sum);
  })
  
})