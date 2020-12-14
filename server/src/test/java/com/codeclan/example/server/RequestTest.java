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

    @Test
    public void canGetRequestsByOwnerId(){
        List<Request> found = requestRepository.findRequestsByOwnerId(1L);
        assertEquals(2, found.size());
    }

    @Test
    public void canGetRequestsByRequesterId(){
        List<Request> found = requestRepository.findRequestsByRequesterId(2L);
        assertEquals(2, found.size());
    }

    @Test
    public void canGetRequestsByOwnerIdAndStatus(){
        List<Request> found = requestRepository.findRequestsByOwnerIdAndStatus(1L, "Pending");
        assertEquals(1, found.size());
    }

    @Test
    public void canGetRequestsByRequesterIdAndStatus(){
        List<Request> found = requestRepository.findRequestsByRequesterIdAndStatus(2L, "Pending");
        assertEquals(1, found.size());
    }

    @Test
    public void canGetRequestsByOwnerIDAndRequestId(){
        List<Request> found = requestRepository.findRequestsByOwnerIdAndId(1L, 1L);
        assertEquals("Pending", found.get(0).getStatus());
    }

    @Test
    public void canGetRequestsByRequesterIdAndId(){
        List<Request> found = requestRepository.findRequestsByRequesterIdAndId(2L, 2L);
        assertEquals("Rejected", found.get(0).getStatus());
    }

    @Test
    public void canGetRequestsByBookId(){
        List<Request> found = requestRepository.findRequestsByBookId(2L);
        assertEquals("Rejected", found.get(0).getStatus());
    }
}
