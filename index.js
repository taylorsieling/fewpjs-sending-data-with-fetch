// Add your code here

function submitData(name, email) {

    const formData = {
        name: name,
        email: email
    }

    const configObj= {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

    return fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
          console.log(object);
          const h3 = document.createElement('h3')
          h3.innerHTML = object.id
          document.body.appendChild(h3)
      })
      .catch(function(error) {
          console.log(error.message);
          const p = document.createElement('p')
          p.innerHTML = error.message
          document.body.appendChild(p)
      });

}