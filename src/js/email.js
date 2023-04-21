function sendMail() {
  var params = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  emailjs
    .send('service_43b37zi', 'template_j28w7zu', params)
    .then(res => {
      document.getElementById('name').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      console.log(res);
      alert('your message sent');
    })
    .catch(err => console.log(err));
}
