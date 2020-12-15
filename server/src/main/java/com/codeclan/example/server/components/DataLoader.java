package com.codeclan.example.server.components;

import com.codeclan.example.server.models.Book;
import com.codeclan.example.server.models.Request;
import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.BookRepository;
import com.codeclan.example.server.repositories.RequestRepository;
import com.codeclan.example.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RequestRepository requestRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args){
        User user1 = new User("Bob", "Wiseman", "bobthereader@waterstones.com", "Edinburgh");

        userRepository.save(user1);

        User user2 = new User("Robert", "Bruce", "bobthebruce@waterstones.com", "Glasgow");
        userRepository.save(user2);


        Book book1 = new Book("Children Of Time", "Adrian Tchaikovsky", "Sci-Fi", "123456789", user1);
        bookRepository.save(book1);

        Book book2 = new Book("Never Go Back", "Lee Child", "Thriller", "987654321", user1);
        bookRepository.save(book2);

        user1.addBookToSharedBooks(book1);
        user1.addBookToSharedBooks(book2);
        userRepository.save(user1);

        Request request = new Request("Pending", user1, user2, book1);
        requestRepository.save(request);

        Request request2 = new Request("Rejected", user1, user2, book2);
        requestRepository.save(request2);
    }
}
