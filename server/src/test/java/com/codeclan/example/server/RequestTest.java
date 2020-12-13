package com.codeclan.example.server;

import com.codeclan.example.server.models.Request;
import com.codeclan.example.server.repositories.RequestRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class RequestTest {

    @Autowired
    RequestRepository requestRepository;

    @Test
    public void contextLoads(){

    }

    @Test
    public void canGetAllRequests(){
        List<Request> found = requestRepository.findAll();
        assertEquals(2, found.size());
    }
}
