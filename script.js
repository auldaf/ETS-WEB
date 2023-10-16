const euro_usd = document.getElementById('euro-usd');
const euro_gbp = document.getElementById('euro-gbp');
const gbp_usd = document.getElementById('gbp-usd');
const usd_jpy = document.getElementById('usd-jpy');
const aud_usd = document.getElementById('aud-usd');
const usd_chf = document.getElementById('usd-chf');
const nzd_usd = document.getElementById('nzd-usd');
const usd_cad = document.getElementById('usd-cad');

async function konvert(mataUang){
    // const url = `http://api.currencylayer.com/live?access_key=5fd45476dbe5b2fefe897bcf03a66fd7&currencies=${mataUang}&format=1`;
    const url = `http://apilayer.net/api/live? access_key = 5fd45476dbe5b2fefe897bcf03a66fd7& currencies = EUR,GBP,CAD,PLN& source = USD& format = 1`;
    const uang_data = await fetch(`${url}`).then(response => response.json());
    console.log("run");
    console.log(uang_data);
}

konvert('USDEUR');
