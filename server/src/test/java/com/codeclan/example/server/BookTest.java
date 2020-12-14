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

    @Test
    public void contextLoads(){

    }

    @Test
    public void canGetAllBooks(){
        List<Book> found = bookRepository.findAll();
        assertEquals(2, found.size());
    }

}