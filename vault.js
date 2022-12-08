var p1 = sessionStorage.getItem('candidatelist');
var p2 = JSON.parse(p1);
var p = p2[0]["choice"];
var divid = document.getElementById("candidateshere");
for (var i = 0; i < p2.length; i++) {
  divid.innerHTML = divid.innerHTML + `<label for="">
                    <input type="radio" name="selectedCandidate" value="${p2[i].choice}"> <strong>${p2[i].choice}</strong>
                  </label><br>`;
}
const btn1 = document.getElementById("votebtn");
btn1.addEventListener("click", async () => {
  var mail = document.getElementById("voterEmailID").value;
  var pass = document.getElementById("voterPassword").value;
  // alert(mail);
  // alert(pass);
  var choice = document.querySelector('input[name="selectedCandidate"]:checked').value;
  const rawResponse = await fetch('http://127.0.0.1:8000/vote/', {
    method: 'POST',
    headers: {
      'Allow': 'POST, OPTIONS',
      'Vary': 'Accept',
      'Content-Type': 'application/json',
      'Connection': 'keep-alive'
    },
    body: JSON.stringify({ "email": mail, "password": pass, "choice": choice, "poll_id": 1 })
  });
  const conn = await rawResponse.json();
  console.log(conn);
  sessionStorage.setItem("votervote", JSON.stringify(conn));
  // console.log(conn);
  window.location.href = 'success.html';
  var votr = document.getElementById("voterr")
//   votr.innerHTML = `<div class="wrapper" style="background-color: white;"> <svg class="checkmark"
//     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
//     <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
//     <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
//   </svg>
// </div>
// <center>
//   <h2>And that's it!</h2>
// </center>
// <br>
// <center>
//   <h4>Your vote has been registered! Thanks for playing your part of being a responsible citizen!</h4>
// </center>
//     `;
});
/*const btn2 = document.getElementById("declinebtn");
btn2.addEventListener("click", async () => {
    window.open("index.html", '_self').focus();
    <div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
    </div>
})*/
/*function declinevote() {
    window.open("index.html", '_self').focus();
    <div class="alert alert-danger" role="alert">
        This is a danger alert—check it out!
    </div>
}*/