
const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
// new QRCode(contenedorQR, 'https://www.google.com');

const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();//la pagina no se actualiza
    QR.makeCode(formulario.link.value);
});