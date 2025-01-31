document.addEventListener('DOMContentLoaded', () => {
    const temperaturaInput = document.getElementById('temperatura');
    const unidadOrigenSelect = document.getElementById('unidadOrigen');
    const unidadDestinoSelect = document.getElementById('unidadDestino');
    const convertirButton = document.getElementById('convertir');
    const resultadoParrafo = document.getElementById('resultado');

    function validarCampos() {
        if (temperaturaInput.value && unidadOrigenSelect.value && unidadDestinoSelect.value) {
            convertirButton.disabled = false;
        } else {
            convertirButton.disabled = true;
        }
    }

    function validarNumero(input) {
        input.value = input.value.replace(/[^0-9.]/g, ''); // Solo permite números y puntos
    }

    function convertirTemperatura() {
        const temperatura = parseFloat(temperaturaInput.value);
        const unidadOrigen = unidadOrigenSelect.value;
        const unidadDestino = unidadDestinoSelect.value;

        let resultado;

        if (unidadOrigen === 'celsius') {
            if (unidadDestino === 'fahrenheit') {
                resultado = (temperatura * 9/5) + 32;
            } else if (unidadDestino === 'kelvin') {
                resultado = temperatura + 273.15;
            } else {
                resultado = temperatura;
            }
        } else if (unidadOrigen === 'fahrenheit') {
            if (unidadDestino === 'celsius') {
                resultado = (temperatura - 32) * 5/9;
            } else if (unidadDestino === 'kelvin') {
                resultado = (temperatura - 32) * 5/9 + 273.15;
            } else {
                resultado = temperatura;
            }
        } else if (unidadOrigen === 'kelvin') {
            if (unidadDestino === 'celsius') {
                resultado = temperatura - 273.15;
            } else if (unidadDestino === 'fahrenheit') {
                resultado = (temperatura - 273.15) * 9/5 + 32;
            } else {
                resultado = temperatura;
            }
        }

        resultadoParrafo.textContent = `${temperatura} ${unidadOrigen} es ${resultado.toFixed(2)} ${unidadDestino}`;
    }

    temperaturaInput.addEventListener('input', validarCampos);
    unidadOrigenSelect.addEventListener('change', validarCampos);
    unidadDestinoSelect.addEventListener('change', validarCampos);
    convertirButton.addEventListener('click', convertirTemperatura);
});