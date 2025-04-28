document.getElementById('contactform').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const url = form.action;
    
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        document.getElementById('message').innerHTML = 
          '<div class="alert alert-success">Thank you! Your submission has been received.</div>';
        form.reset();
      } else {
        document.getElementById('message').innerHTML = 
          '<div class="alert alert-danger">There was an error. Please try again.</div>';
      }
    })
    .catch(error => {
      document.getElementById('message').innerHTML = 
        '<div class="alert alert-danger">There was an error. Please try again.</div>';
    });
  });