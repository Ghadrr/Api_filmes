const pesquisa = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content');

const fetchApi = (value) => {
  const result = fetch(`https://www.omdbapi.com/?s=${value}&apikey=e6c43dc6`)
  .then((res) => res.json())
  .then((data) => {
      return data;
    });
    
    return result;
}
btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const pegaApi = await fetchApi(pesquisa.value)
    content.innerHTML=''
    console.log(pegaApi);
    
  if(characterId.value === ''){
    return content.innerHTML = 'Pesquise por um filme.'
  }
 else{
    pegaApi.Search.forEach(element => {
        content.innerHTML +=
            `
            <tr>
                <td>
                ${element.Title}
                </td>
                <td>
                <img src="${element.Poster}" alt="${element.Title}Poster" id="img" >
                </td>
            </tr>
            `
    });
}
})

btnReset.addEventListener('click', () => location.reload())