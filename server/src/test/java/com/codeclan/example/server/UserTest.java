package com.codeclan.example.server;

import com.codeclan.example.server.models.Book;
import com.codeclan.example.server.models.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTest {

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

//    @Test
//    public void canAddBookToOwnedBooks(){
//        User user = new User("Bob", "Writer", "bobbigbrain@hotmail.com", "Edinburgh");
//        Book book = new Book("Children Of Time", "Adrian Tchaikovsky", "Sci-Fi", "123456789", user);
//        user.addBookToOwnedBooks(book);
//        assertEquals(1, user.getOwnedBooks().size());
//    }

}
