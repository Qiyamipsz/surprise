let input = "";

function pressNum(num) {
  if (input.length < 6) {
    input += num;
    document.getElementById("passwordInput").value = input.replace(/./g, "•");
  }
}

function clearInput() {
  input = input.slice(0, -1);
  document.getElementById("passwordInput").value = input.replace(/./g, "•");
}

function checkPassword() {
  const correctPassword = "1009"; // ganti sesuai tanggal lahir
  if (input === correctPassword) {
    window.location.href = "../Fun Page/envelope1.html"; 
  } else {
    document.getElementById("message").innerText = "Passwordnya salah sayang!";
    input = "";
    document.getElementById("passwordInput").value = "";
  }
}

