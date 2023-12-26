let qrdata = document.getElementById("qr-data");
let qrCode = new QRCode(document.getElementById("qrcode"), {
    width: 250,
    height: 250
});
let canvas = document.getElementById("qr-canvas");
let ctx = canvas.getContext("2d");

function generateQR() {
    let data = qrdata.value;
    qrCode.makeCode(data);

    setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let qrSize = 250;
        let margin = 10; // Tamaño del marco blanco
        canvas.width = qrSize + 2 * margin;
        canvas.height = qrSize + 2 * margin;
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(document.querySelector('#qrcode img'), margin, margin, qrSize, qrSize);

        let img = document.getElementById("qr-image");
        img.src = canvas.toDataURL("image/png");
    }, 300);
}