
function determineResult(input1, input2, input3, input4, input5, input6) {
  
  const valTotal = input1 + input2 + input3 + input4 + input5 + input6;

  if (valTotal <= 8) {
    character = "Ron";
  }
  else if (valTotal<= 16) {
    character = "Mario"
  } else {
    character ="Ilana"
  }
  return character;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const yasss = parseInt($("input:radio[name=yasss]:checked").val());
    const BBB = parseInt($("input:radio[name=BBB]:checked").val());
    const wigs = parseInt($("input:radio[name=wigs]:checked").val());
    const color = parseInt($("#color").val());
    const animal = parseInt($("#animal").val());
    const leader = parseInt($("#leader").val());
    let characterResult = determineResult(yasss, BBB, wigs, color, animal, leader);

    if (characterResult === "Ron") { 
      $("#quizResults").hide();
      $("#quizResults").show();
      $("#characterResult").text("Ron");
      $(".image").hide();
      $("#ronswanson").show(); 
    } else if (characterResult === "Ilana") {
      $("#quizResults").hide();
      $("#characterResult").text("Ilana");
      $("#quizResults").show();
      $(".image").hide();
      $("#Ilana").show();
    } else { 
      $("#quizResults").hide();
      $("#characterResult").text("Mario");
      $("#quizResults").show();
      $(".image").hide();
      $("#Mario").show();
    }
     console.log(characterResult);
  }); 
});
