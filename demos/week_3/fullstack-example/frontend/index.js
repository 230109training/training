let submitButton = document.querySelector("#submit_button");

submitButton.addEventListener("click", loginFunction);

async function loginFunction() {
  let form = document.querySelector("#login_form");
  let usernameInput = document.querySelector("#username_input");
  let passwordInput = document.querySelector("#password_input");

  let username = usernameInput.value;
  let password = passwordInput.value;

  try {
    // promise version of fetch
    // fetch("http://localhost:3000/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json"},
    //     body: JSON.stringify({username, password})
    // })
    // .then(response => response.json())
    // .then(data => alert(data.message))
    // .catch(error => console.error(error));

    const url = "http://localhost:3000/login";
    const params = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };
    let response = await fetch(url, params);
    let data = await response.json();  
    alert(data.message);
  } catch (err) {
    alert(err);
  }
}
