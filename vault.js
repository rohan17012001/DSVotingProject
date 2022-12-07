const btn1 = document.getElementById("votebtn");
btn1.addEventListener("click", async () => {
    voterr.innerHTML = `<div class="wrapper" style="background-color: white;"> <svg class="checkmark"
    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
  </svg>
</div>
<center>
  <h2>And that's it!</h2>
</center>
<br>
<center>
  <h4>Your vote has been registered! Thanks for playing your part of being a responsible citizen!</h4>
</center>
    `;
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