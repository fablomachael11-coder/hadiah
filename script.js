const message = `Apa pun yang sedang kamu hadapi sekarang,
aku harap kamu tetap kuat.

Kamu lebih hebat dari yang kamu pikirkan.
Jangan menyerah ya.

Aku selalu percaya kamu bisa melewati semuanya 🌻`;

let i = 0;

function typing(){
if(i < message.length){
document.getElementById("text").innerHTML += message.charAt(i);
i++;
setTimeout(typing,40);
}
}

typing();
