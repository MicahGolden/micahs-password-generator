let password = document.getElementById("password-text")
const passwordButton = document.getElementById("password-box")

const genPassword = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*';
  generated = ""
  for (let i = 0; i < 12; i++) {
    generated += chars[Math.floor(Math.random()* chars.length)];
  }
  return generated
}

const displayPassword = () => {
  genPassword()
  password.innerText = `${generated}`;
}

passwordButton.addEventListener("click", displayPassword);