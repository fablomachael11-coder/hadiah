const text = `Jika hari ini terasa berat,
ingat bahwa kamu tidak sendirian.

Kamu lebih kuat dari yang kamu pikirkan.
Tetaplah berjalan walaupun pelan.

Aku percaya kamu bisa melewati semuanya.
Tetap semangat ya 🌻`;

let i = 0;

function typeWriter(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter,40);
}
}

typeWriter();