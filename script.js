const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;

  if (name.length < 3) {
    document.querySelector("#name").style.borderColor = "red";
    alert("Name must be at least 3 characters");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  const phonePattern = /^[0-9]{10,}$/;
  if (!phonePattern.test(phone)) {
    alert("Phone number must contain at least 10 digits");
    return;
  }

  if (subject.length < 5) {
    alert("Subject must be at least 5 characters");
    return;
  }

  if (message.length < 10) {
    alert("Message must be at least 10 characters");
    return;
  }

  alert("Message sent successfully!");

  fetch("http://localhost:3000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, phone, subject, message }),
  })
    .then((response) => response.text())
    .then((data) => alert(data))
    .catch((err) => console.error(err));
});
