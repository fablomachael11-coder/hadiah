const text = `Dulu ada yang ngomong,
semua bakal baik baik aja.

Dan ya aku percaya ke kamu cla.
Kamu juga bakal baik baik juga cla.

Sehat sehat ya clarista.
jangan lupa doa juga 🌻`;

let i = 0;

function typeWriter(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typeWriter,40);
}
}

typeWriter();
