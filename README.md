# Project Brief

## Take My Books (BookYeet)

Create a book sharing app for users to give, take or swap books between each other.

### Limitations

App to be designed, developed and prototyped over a 7 day sprint.
Developed by a team of 5 developers.
App will assume user authentication has already been completed.

### MVP

- Users should be able to both share their books and take books that are being shared. 
- App is to be community focused for local people to share unwanted books within a geographical location (i.e. a specific city)

#### Books
Book will have:
- `Title`
- `Author`
- `Genre`
- `CurrentOwner` User object
- `ID` / `Barcode`
- `SwapHistory` User objects -- *Extension*

#### User
Users will have:
- `Collection of shared books`
- `Collection of owned books`
- `Community`
- `Requests` - list of requests

#### Book Taker
- Should be able to view all available books.
- Filter by genre/artist.
- Search by title.
- Request a book that is being shared.

#### Book Giver
- Should be able to add books to be shared.
- Should be able to delete books if they change their mind.
- Remove books when they are shared.
- Approve a request for a book.

### Extensions
- Books could be added by scanning their barcode.
- Could be able to swap a book for a book the other user is offering.
- Users can create a 'WishList' of books they would like to swap for.
- Show users likely to swap by compatiblity of shared books and wishlist.

