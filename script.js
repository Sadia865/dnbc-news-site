 window.onload = function() {
   fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar').innerHTML = data;
    })
      .catch(error => console.log('Error loading navbar:', error));


      fetch('footer.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.log('Error loading footer:', error));
  }



  // Define a function to handle the form submission
// search.js

// search.js





 