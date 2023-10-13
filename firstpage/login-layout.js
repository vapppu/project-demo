
fetch(`./login-header.html`)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById("login-header").innerHTML = html;
    })
    .then((function () {
      const toggleButton = document.getElementById("toggle-button");
            const naviList = document.getElementById("navi-list");
        
            toggleButton.addEventListener("click", () => {
              console.log("Clicked")
              naviList.classList.toggle("active");
            });
    }))
    .catch(function (err) {
      console.log("Failed to fetch navbar: ", err);
    });

    fetch('./footer.html')
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("footer").innerHTML = html;
      })
      .catch((err) => {
        console.log("Failed to fetch footer")
      })

      
        
        