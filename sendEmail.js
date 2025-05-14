//https://formspree.io/f/mrgjypvn

const form = document.getElementById("form")

async function handleSendEmail(event) {
  event.preventDefault()

  const fd = new FormData(this)

  const response = await fetch('https://formspree.io/f/mrgjypvn', {
    method: 'POST',
    body: fd,
    headers: {
      Accept:'application/json'
  }
})

if (response.ok) {
  this.reset()
  alert("Mensaje enviado")
} else {
  alert("Error al enviar mensaje")

}

form.addEventListener('submit',handleSendEmail)
