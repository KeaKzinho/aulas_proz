window.onload = function(){
      urlParams = new URLSearchParams(window.location.search);
      const nome = urlParams.get('nome');
      const senha = urlParams.get('senha');
      document.getElementById('result').innerHTML = `Nome ${nome} Senha ${senha}`
}
