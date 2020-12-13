package com.codeclan.example.server;

import com.codeclan.example.server.models.Book;
import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.BookRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookTest {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    UserRepository userRepository;

    @Test
    public void contextLoads(){

    }

    @Test
    public void canGetAllBooks(){
        User user = new User("Bob", "Writer", "bobbigbrain@hotmail.com", "Edinburgh");
        userRepository.save(user);
        Book book = new Book("Children Of Time", "Adrian Tchaikovsky", "Sci-Fi", "123456789", user);
        bookRepository.save(book);
        List<Book> found = bookRepository.findAll();
        assertEquals(2, found.size());
    }

}