const BookWebFetch = (isbn, APIKey) => {
  return (
    fetch(`https://api.barcodelookup.com/v2/products?barcode=${isbn}&formatted=y&key=${APIkey}`)
    .then(res => res.json())
  )
}
export default BookWebFetch
