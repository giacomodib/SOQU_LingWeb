async function exampleFetch() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
  
    console.log(json);

  let voci = document.getElementsByClassName("item_text");

  for (let i = 0; i<voci.length ;i++) {
    voci[i].innerText =  json.programming_languages_popular[i];

}
  
}

let cambioimmagine = document.getElementsByClassName("eltdf-normal-logo")[0].src = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/w3schools-logo-icon.png";

exampleFetch()

/* bonus https://it.wikipedia.org/wiki/


"<a target=_blank href=https://it.wikipedia.org/wiki/'" + voci[i]+ "'/>" + 




*/
