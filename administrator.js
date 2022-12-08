const btn = document.getElementById("lvlcheck");
btn.addEventListener("click", async () => {
  if (document.getElementById("local").checked == true) loginform.innerHTML = `
    <label for="">Email ID</label><br>
                <input type="email" name="adminEmail" placeholder="Enter Admin's Email ID" id="localAdminEmailID" class="form-control"><br>
                <label for="">Password</label><br>
                <input type="password" name="adminPassword" class="form-control" id="adminPassword" 
                  placeholder="Enter Admin's Password"><br>
  

                <button type="submit" class="btn btn-block span btn-primary " onclick="localadmin(document.getElementById('localAdminEmailID').value, document.getElementById('adminPassword').value)"><span
                    class="glyphicon glyphicon-user"></span> Sign In</button>
`;
  else if (document.getElementById("central").checked == true) loginform.innerHTML = `<label for="">Email ID</label><br>
    <input type="email" name="adminEmail" placeholder="Enter Admin's Email ID" class="form-control" id="centralAdminEmailID"><br>

    <label for="">Password</label><br>
    <input type="password" name="adminPassword" class="form-control"
      placeholder="Enter Admin's Password" id="adminPassword"><br>

    <button type="submit" class="btn btn-block span btn-primary" onclick="centraladmin(document.getElementById('centralAdminEmailID').value, document.getElementById('adminPassword').value)"><span
        class="glyphicon glyphicon-user"></span> Sign In</button>

`;
});
async function localadmin(mail, pass) {
  const rawResponse = await fetch('http://127.0.0.1:8000/pollSiteInfo/', {
    method: 'POST',
    headers: {
      'Allow': 'POST, OPTIONS',
      'Vary': 'Accept',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "email": mail, "password": pass })
  });
  const conn = await rawResponse.json();
  console.log(conn);
  sessionStorage.setItem("siteAdminData", JSON.stringify(conn));
  window.location.href = 'localadmin.html';
}
async function centraladmin(mail, pass) {
  const rawResponse = await fetch('http://127.0.0.1:8000/pollDetail/', {
    method: 'POST',
    headers: {
      'Allow': 'POST, OPTIONS',
      'Vary': 'Accept',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "email": mail, "password": pass, "poll_id": 1 })
  });
  const conn = await rawResponse.json();
  console.log(conn);
  alert(conn["description"]);
  sessionStorage.setItem("siteAdminData", JSON.stringify(conn));
  window.location.href = 'centraladmin.html';
}
