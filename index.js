 // Função para calcular o total e o tempo de espera
 const calcularTotal = () => {
    const pizzaCheckbox = document.getElementById('pizza');
    const hamburguerCheckbox = document.getElementById('hamburguer');
    const saladaCheckbox = document.getElementById('salada');

    const pizzaQuantidade = document.getElementById('quantidadePizza').value;
    const hamburguerQuantidade = document.getElementById('quantidadeHamburguer').value;
    const saladaQuantidade = document.getElementById('quantidadeSalada').value;

    let total = 0;
    let tempoEspera = 0;

    if (pizzaCheckbox.checked) {
        total += 12.00 * pizzaQuantidade;
        tempoEspera += 20 * pizzaQuantidade; // 20 minutos por pizza
    }
    if (hamburguerCheckbox.checked) {
        total += 15.00 * hamburguerQuantidade;
        tempoEspera += 10 * hamburguerQuantidade; // 10 minutos por hamburguer
    }
    if (saladaCheckbox.checked) {
        total += 8.00 * saladaQuantidade;
        tempoEspera += 5 * saladaQuantidade; // 5 minutos por salada
    }

    // Cada item adicionado aumenta a espera em 5 minutos
    const totalItems = (pizzaCheckbox.checked ? parseInt(pizzaQuantidade) : 0) +
                       (hamburguerCheckbox.checked ? parseInt(hamburguerQuantidade) : 0) +
                       (saladaCheckbox.checked ? parseInt(saladaQuantidade) : 0);
    tempoEspera += totalItems * 5;

    document.getElementById('totalValue').innerText = total.toFixed(2);
    document.getElementById('tempoEspera').innerText = tempoEspera;
};

// Função para mostrar a mensagem ao enviar
const enviarPedido = (event) => {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem');
    mensagem.innerText = `Olá, ${nome}! Aguarde, seu pedido já vai sair!`;
};

// Adiciona evento de mudança aos checkboxes e inputs de quantidade
document.querySelectorAll('input[type="checkbox"], input[type="number"]').forEach(input => {
    input.addEventListener('change', calcularTotal);
});

// Adiciona evento de envio ao formulário
document.getElementById('pedidoForm').addEventListener('submit', enviarPedido);

// Calcular o total inicialmente
calcularTotal();