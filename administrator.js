const btn = document.getElementById("lvlcheck");
btn.addEventListener("click", async ()=>{
    if(document.getElementById("local").checked==true) loginform.innerHTML=`
    <label for="">Username</label><br>
                <input type="text" name="adminUserName" placeholder="Enter Admin's UserName" class="form-control"><br>

                <label for="">Password</label><br>
                <input type="password" name="adminPassword" class="form-control"
                  placeholder="Enter Admin's Password"><br>
                  <label for="">Area</label><br>
                  <input type="text" name="adminArea" placeholder="Enter the area name" class="form-control"><br>
  

                <button type="submit" class="btn btn-block span btn-primary " onclick="localadmin()"><span
                    class="glyphicon glyphicon-user"></span> Sign In</button>
`;
    else if (document.getElementById("central").checked==true) loginform.innerHTML= `<label for="">Username</label><br>
    <input type="text" name="adminUserName" placeholder="Enter Admin's UserName" class="form-control"><br>

    <label for="">Password</label><br>
    <input type="password" name="adminPassword" class="form-control"
      placeholder="Enter Admin's Password"><br>

    <button type="submit" class="btn btn-block span btn-primary" onclick="centraladmin()"><span
        class="glyphicon glyphicon-user"></span> Sign In</button>

`;
});
function localadmin() {
  window.open("localadmin.html", '_self').focus();
}
function centraladmin() {
  window.open("centraladmin.html", '_self').focus();
}
