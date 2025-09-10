
document.querySelectorAll('.div2').forEach(div => {
    const images = div.querySelectorAll('.carousel img');
    let current = 0;

    if(images.length > 0){
        images[current].classList.add('active');

        div.addEventListener('mouseenter', () => {
            div.interval = setInterval(() => {
                images[current].classList.remove('active');
                current = (current + 1) % images.length;
                images[current].classList.add('active');
            }, 1000); // cambia cada 1 segundo
        });

        div.addEventListener('mouseleave', () => {
            clearInterval(div.interval);
            images.forEach((img, i) => img.classList.remove('active'));
            images[0].classList.add('active'); // vuelve a la primera
            current = 0;
        });
    }
});

// --- Cotizador de llantas ---
const form = document.getElementById('cotizador');
const totalSpan = document.getElementById('total');
const imgLlantas = document.getElementById('img-llanta');
const whatsappBtn = document.getElementById('whatsapp-btn');

const whatsappNumber = "52562028769"; // Cambia por tu número
const whatsappMessage = "Hola, quiero cotizar llantas."; 

form.addEventListener('change', () => {
    const modeloSelect = document.getElementById('modelo');
    const selectedOption = modeloSelect.selectedOptions[0];

    if (selectedOption) {
        const imgSrc = selectedOption.dataset.img;
        imgLlantas.src = imgSrc;
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const modeloSelect = document.getElementById('modelo');
    const cantidadInput = document.getElementById('cantidad');
    const selectedOption = modeloSelect.selectedOptions[0];

    if (!selectedOption) return;

    const precio = parseFloat(selectedOption.dataset.precio);
    const cantidad = parseInt(cantidadInput.value);
    const total = precio * cantidad;

    totalSpan.textContent = total.toLocaleString();

    // Actualiza link de WhatsApp
    whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage + " Modelo: " + selectedOption.value + ", Cantidad: " + cantidad + ", Total: $" + total.toLocaleString())}`;
});


