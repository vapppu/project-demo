
fetch(`./non-login-header.html`)
    .then(function (response) {
      return response.text();
    })
    .then(function (html) {
      document.getElementById("non-login-header").innerHTML = html;
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

      fetch('./modal.html')
      .then((response) => response.text())
      .then((html) => {
        document.getElementById("modal").innerHTML = html;
      })
      .then(() => {
        const openModalBtn = document.getElementById("openModalBtn");
        const closeModalBtn = document.querySelector(".btn");
        const modal = document.querySelector(".login");
        const overlay = document.getElementById("overlay");

        openModalBtn.addEventListener("click", function (event) {
          event.preventDefault();
          modal.style.display = "block";
          overlay.style.display = "block";
        });

        closeModalBtn.addEventListener("click", function (event) {
          event.preventDefault();
          modal.style.display = "none";
          overlay.style.display = "none";
        });
      })
      .catch((err) => {
        console.log("Failed to fetch modal window")
      })
        
        
        