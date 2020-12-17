package com.codeclan.example.server.controllers;

import com.codeclan.example.server.components.BookWebFetch;
import com.codeclan.example.server.models.Book;
import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.BookRepository;
import com.codeclan.example.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BookController {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/books")
    public ResponseEntity<List<Book>> getAllBooks(
            @RequestParam(name = "genre", required = false) String genre,
            @RequestParam(name = "author", required = false) String author,
            @RequestParam(name = "ownerId", required = false) Long ownerId,
            @RequestParam(name = "search", required = false) Boolean search,
            @RequestParam(name = "title", required = false) String title){
        if (search != null && author != null && title != null && genre != null){
            return new ResponseEntity<>(bookRepository.findBooksByTitleIgnoreCaseContainingOrAuthorIgnoreCaseContainingOrGenreIgnoreCaseContaining(title, author, genre), HttpStatus.OK);
        }
        if (genre != null && author != null){
            return new ResponseEntity<>(bookRepository.findBooksByAuthorAndGenre(author, genre), HttpStatus.OK);
        }
        if (genre != null){
            return new ResponseEntity<>(bookRepository.findBooksByGenre(genre), HttpStatus.OK);
        }
        if (author != null){
            return new ResponseEntity<>(bookRepository.findBooksByAuthor(author), HttpStatus.OK);
        }
        if (ownerId != null){
            return new ResponseEntity<>(bookRepository.findBooksByOwnerId(ownerId), HttpStatus.OK);
        }
        return new ResponseEntity<>(bookRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id){
        return new ResponseEntity(bookRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping("/user/{id}/my-books/add-book")
    public ResponseEntity<Book> postBook(@RequestBody Book book, @PathVariable Long id){
        Optional<User> currentUser = userRepository.findById(id);
        currentUser.ifPresent(user -> user.addBookToSharedBooks(bookRepository.save(book)));
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PostMapping("/my-books/add-book/{isbn}")
    public ResponseEntity<Book> createBookFromISBN(@RequestBody User user, @PathVariable String isbn){
        BookWebFetch webFetch = new BookWebFetch();
        Book book = webFetch.fetchWithBarcode(isbn, user);
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @PutMapping(value="/my-books/{id}")
    public ResponseEntity<Book> putBook(@RequestBody Book book, @PathVariable Long id){
        Book bookToUpdate = bookRepository.findById(id).get();
        bookToUpdate.setAuthor(book.getAuthor());
        bookToUpdate.setTitle(book.getTitle());
        bookToUpdate.setBarcode(book.getBarcode());
        bookToUpdate.setGenre(book.getGenre());
        bookToUpdate.setOwner(book.getOwner());
        bookRepository.save(bookToUpdate);
        return new ResponseEntity<>(bookToUpdate, HttpStatus.OK);
    }

    @DeleteMapping(value = "/my-books/{id}")
    public ResponseEntity<Long> deleteBook(@PathVariable Long id){
        bookRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}