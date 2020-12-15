package com.codeclan.example.server;

import com.codeclan.example.server.models.Book;
import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.BookRepository;
import com.codeclan.example.server.repositories.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTest {

    @Autowired
    UserRepository userRepository;

    @Autowired
    BookRepository bookRepository;

    @Test
    public void contextLoads(){

    }

    @Test
    public void canAddBookToShareBooks(){
        User user = new User("Bob", "Writer", "bobbigbrain@hotmail.com", "Edinburgh");
        Book book = new Book("Children Of Time", "Adrian Tchaikovsky", "Sci-Fi", "123456789", user);

        user.addBookToSharedBooks(book);
        assertEquals(1, user.getShareBooks().size());
    }

    @Test
    public void canAddBookToOwnedBooks(){
        User user = new User("Bob", "Writer", "bobbigbrain@hotmail.com", "Edinburgh");
        Book book = new Book("Children Of Time", "Adrian Tchaikovsky", "Sci-Fi", "123456789", user);
        user.addBookToOwnedBooks(book);
        assertEquals(1, user.getOwnedBooks().size());
    }

    @Test
    public void canGetAllUsers(){
        List<User> found = userRepository.findAll();
        assertEquals(2, found.size());
    }

    @Test
    public void canGetUserByCommunity(){
        List<User> found = userRepository.findUsersByCommunity("Glasgow");
        assertEquals(1, found.size());
    }

    @Test
    public void canGetUserByFirstNameAndLastName(){
        List<User> found = userRepository.findUsersByFirstNameAndLastName("Robert", "Bruce");
        assertEquals(1, found.size());
    }

    @Test
    public void canGetUserByBookId(){
        List<User> found = userRepository.findUsersByShareBooksId(1L);
        assertEquals("Bob", found.get(0).getFirstName());
    }

}
