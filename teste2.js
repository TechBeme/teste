
let mensagem = "";
for (let i = 0; i < localStorage.length; i++) {
  let chave = localStorage.key(i);
  if (chave.startsWith('@')) {
    let valor = localStorage.getItem(chave);
    mensagem += `Chave: ${chave} - Valor: ${valor}\n`;
  }
}
alert(mensagem);
export {};
