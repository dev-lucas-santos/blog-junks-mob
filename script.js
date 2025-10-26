// Seleciona os elementos
const btnFiltrar = document.querySelector('.btn-filtrar');
const selectCategoria = document.querySelector('.categoria');
const inputPreco = document.querySelector('input[type="number"]');
const cartas = document.querySelectorAll('.carta');

btnFiltrar.addEventListener('click', () => {
    const categoriaSelecionada = selectCategoria.value;
    const precoMaximo = inputPreco.value;

    cartas.forEach(carta => {
        const categoria = carta.querySelector('.categoria').textContent;
        const preco = parseFloat(carta.querySelector('.preco').textContent.replace('R$', ''));
        
        const categoriaPassa = categoriaSelecionada === 'todas' || categoria === categoriaSelecionada;
        const precoPassa = !precoMaximo || preco <= precoMaximo;

        if (categoriaPassa && precoPassa) {
            carta.classList.remove('esconder');
        } else {
            carta.classList.add('esconder');
        }
    });
});