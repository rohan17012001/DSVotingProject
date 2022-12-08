const btn=document.getElementById("votesent");
btn.addEventListener("click", async()=>{
    localtocentral.innerHTML=`<div class="wrapper" style="background-color: white;"> <svg class="checkmark"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
  </svg>
</div>
<center>
  <h2>Sent!</h2>
</center>
<br>
<center>
  <h4>The result of your area has been sent to the Central admin! Thanks for your service!</h4>
</center>
`;
});
function adminredirect(){
    window.open("administrator.html", '_self').focus();
}