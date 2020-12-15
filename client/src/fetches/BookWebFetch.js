import APIkey from '../keys/APIkey';

const url = "https://api.barcodelookup.com/v2/products?barcode=";


const BookWebFetch = (isbn) => {
  return (
    fetch(`https://api.barcodelookup.com/v2/products?barcode=${isbn}&formatted=y&key=${APIkey}`)
    .then(res => res.json())
  )
}
