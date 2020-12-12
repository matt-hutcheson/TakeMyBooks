package com.codeclan.example.server.controllers.components;

import com.codeclan.example.server.models.Book;
import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookRepository bookRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args){
        User user1 = new User("Bob", "Wiseman", "bobthereader@waterstones.com", "Edinburgh");

        Book book1 = new Book("Children Of Time", "Adrian Tchaikovsky", "Sci-Fi", "123456789", user1);
        bookRepository.save(book1);

        Book book2 = new Book("Never Go Back", "Lee Child", "Thriller", "987654321", user1);
        bookRepository.save(book2);
    }
}
