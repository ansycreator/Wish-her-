const count = document.getElementById("count");
const countdown = document.getElementById("countdown");
const birthday = document.getElementById("birthday");
const typing = document.getElementById("typing");
const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

let number = 3;

const timer = setInterval(() => {
    number--;

    if (number > 0) {
        count.innerHTML = number;
    } else {
        clearInterval(timer);

        countdown.classList.add("hidden");
        birthday.classList.remove("hidden");

        typeMessage();
    }
}, 1000);

const message =
`Happy Birthday, Sohana! 🎂❤️
May Allah bless you with happiness, peace, good health, success, and countless beautiful moments.

May your smile always shine brightly, and may every good dream in your heart come true.

Have a wonderful birthday and a fantastic year ahead! 🌸✨`;

let index = 0;

function typeMessage() {

    if (index < message.length) {
        typing.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeMessage, 45);
    }

}

surpriseBtn.addEventListener("click", () => {

    surprise.classList.remove("hidden");

    surpriseBtn.innerHTML = "🎉 Enjoy Your Day 🎉";

});
// 🎵 Birthday Music
const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {
    if (music.paused) {
        music.play()
            .then(() => {
                musicBtn.textContent = "⏸️";
            })
            .catch((error) => {
                console.log("Music error:", error);
            });
    } else {
        music.pause();
        musicBtn.textContent = "🎵";
    }
});
// 🎊 Soft Celebration Confetti

const confettiContainer = document.querySelector(".celebration");

for(let i = 0; i < 18; i++){

    const confetti = document.createElement("span");

    confetti.textContent = "•";

    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = Math.random() * 100 + "%";

    confetti.style.fontSize = (Math.random() * 8 + 5) + "px";

    confetti.style.animationDuration =
        (Math.random() * 4 + 5) + "s";

    confetti.style.animationDelay =
        Math.random() * 5 + "s";

    confettiContainer.appendChild(confetti);
}
