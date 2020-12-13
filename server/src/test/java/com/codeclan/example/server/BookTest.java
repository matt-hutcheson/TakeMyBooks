package com.codeclan.example.server;

import com.codeclan.example.server.models.Book;
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
        List<Book> found = bookRepository.findAll();
        assertEquals(2, found.size());
    }

    @Test
    public void canGetBooksByGenre(){
        List<Book> found = bookRepository.findBooksByGenre("Sci-Fi");
        assertEquals(1, found.size());
    }

    @Test
    public void canGetBooksByAuthor(){
        List<Book> found = bookRepository.findBooksByAuthor("Lee Child");
        assertEquals("Lee Child", found.get(0).getAuthor());
    }

    @Test
    public void canGetBooksByTitle(){
        List<Book> found = bookRepository.findBooksByTitle("Never Go Back");
        assertEquals("Never Go Back", found.get(0).getTitle());
    }

    @Test
    public void canGetBooksByOwnerId(){
        List<Book> found = bookRepository.findBooksByOwnerId(1L);
        assertEquals(2, found.size());
    }

    @Test
    public void canGetBookByAuthorAndGenre(){
        List<Book> found = bookRepository.findBooksByAuthorAndGenre("Lee Child", "Thriller");
        assertEquals(1, found.size());
    }

}