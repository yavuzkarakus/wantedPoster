window.onload = function () {
  const backgroundMusic = document.getElementById("bg-sound");
  const bustedBtn = document.getElementById("busted-btn");
  const gunSpin = document.getElementById("gun-spin");
  const bullet = document.getElementById("bullet");
  const poster = document.getElementById("poster");

  backgroundMusic.volume = 0.3;

  bustedBtn.addEventListener("mouseover", function () {
    gunSpin.play();
  });

  bustedBtn.addEventListener("click", function () {
    bullet.play();

    const bulletHole = document.createElement("img");
    bulletHole.src = "./assets/bullet-hole.png";
    bulletHole.alt = "bullet-hole";
    bulletHole.classList.add("bullet-hole");

    let left = Math.random() * (poster.clientWidth - bulletHole.width);
    let top = Math.random() * (poster.clientHeight - bulletHole.height);
    bulletHole.style.left = left + "px";
    bulletHole.style.top = top + "px";

    poster.appendChild(bulletHole);

    setTimeout(function () {
      poster.removeChild(bulletHole);
    }, 5000);
  });
};
