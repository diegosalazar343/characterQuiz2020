
function DetermineResult {
const yasss = $("input:radio[name=yasss]:checked").val();
const BBB = $("input:radio[name=BBB]:checked").val();
const wigs = $("input:radio[name=wigs]:checked").val();
const color = $("#color").val();
const animal = $("#animal").val();
const leader = $("#leader").val();
const valTotal = yasss + BBB + wigs + color + animal + leader;
let character;
if (valTotal <= 8) {
  character = "Ron";
}

else if (valTotal<= 16) {
  character = "Mario"
}

else {
  character ="Ilana"
}

}
