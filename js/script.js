const anchors = document.querySelectorAll(".primaryNavigation__navigationItem");

anchors.forEach(anchor => anchor.addEventListener("click", () => {
    fetch(`../page${anchor.innerText.slice(-1)}.html`)
        .then(response => response.text())
        .then(data => document.querySelector("main").innerHTML = data);

}))