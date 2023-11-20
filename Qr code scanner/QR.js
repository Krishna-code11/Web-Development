const container = document.querySelector(".container"),
qrInput = container.querySelector(".input input"),
generateBtn = container.querySelector(".button button"),
qrImg = container.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click",() => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue)return;
    preValue = qrValue;
    generateBtn.innerHTML = " Generating QR code....";
    qrImg.src =` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load",() => {
        container.classList.add("active");
        generateBtn.innerHTML = "GENERATE-OR";
    });
});

qrInput.addEventListener("keyup",() => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});