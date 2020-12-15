import APIKey from '../keys/APIkey';

const BookWebFetch = (isbn) => {
  return (
    fetch(`https://cors-anywhere.herokuapp.com/https://api.barcodelookup.com/v2/products?barcode=${isbn}&formatted=y&key=${APIKey()}`)
    .then(res => res.json())
  )
}
export default BookWebFetch
