async function getBtcPrice(){
    let response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    let data = await response.json();
    let price = data.bpi.USD.rate.split(".")[0];
    document.getElementById('btcUSD').innerText = price;
};

getBtcPrice();