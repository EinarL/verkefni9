// TODO importa því sem nota þarf

import { fetchNews } from "./lib/news.js";

/** Fjöldi frétta til að birta á forsíðu */
const CATEGORY_ITEMS_ON_FRONTPAGE = 5;

/** Vísun í <main> sem geymir allt efnið og við búum til element inn í */
const main = document.querySelector('main');

/**
 * Athugar útfrá url (`window.location`) hvað skal birta:
 * - `/` birtir yfirlit
 * - `/?category=X` birtir yfirlit fyrir flokk `X`
 */
function route() {
  // Athugum hvort það sé verið að biðja um category í URL, t.d.
  // /?category=menning

  // Ef svo er, birtum fréttir fyrir þann flokk
  console.log(window.location.pathname);
  // Annars birtum við „forsíðu“
  if(window.location.pathname === "/"){ // ef á forsíðu
    console.log("location === /");
    fetchNews("");
  }else{
    if(window.location.pathname === "/?category=menning"){
      console.log("location menning");
      fetchNews("menning");
    }else{
      console.log("þú ert einhverstaðar þar sem þú átt ekki að vera!!!!");
    }
  }

}

/**
 * Sér um að taka við `popstate` atburð sem gerist þegar ýtt er á back takka í
 * vafra. Sjáum þá um að birta réttan skjá.
 */
window.onpopstate = () => {
  // TODO útfæra
};

// Í fyrsta skipti sem vefur er opnaður birtum við það sem beðið er um út frá URL
route();
