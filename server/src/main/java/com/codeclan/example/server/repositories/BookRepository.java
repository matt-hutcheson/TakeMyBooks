package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    public List<Book> findBooksByGenre(String genre);
    public List<Book> findBooksByAuthor(String author);
    public List<Book> findBooksByOwnerUserId(Long ownerId);
    public List<Book> findBooksByAuthorAndGenre(String author, String genre);
}