package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Request;
import com.codeclan.example.server.repositories.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RequestController {

    @Autowired
    RequestRepository requestRepository;

    // INDEX
    @GetMapping("/requests")
    public responseEntity<List<request>> getAllRequests () {
        return new ResponseEntity<>(requestRepository.findAll(), HttpStatus.OK);
    }

    // SHOW
    @GetMapping(value="/requests/{id}")
    public ResponseEntity<Request> getRequestById(@PathVariable Long id) {
        return new ResponseEntity(requestRepository.findById(id), HttpStatus.OK);
    }

    // CREATE
    @PostMapping("/requests")
    public ResponseEntity<Request> postRequest(@RequestBody Request request) {
        requestRepository.save(request);
        return new ResponseEntity<>(request, HttpStatus.CREATED);
    }

    // UPDATE
    @PutMapping(value="/requests/{id}")
    public ResponseEntity<Request> putRequest(@RequestBody Request request, @PathVariable Long id) {
        Request requestToUpdate = requestRepository.findById(id).get();
        requestToUpdate.setStatus(request.getStatus());
        requestToUpdate.setOwner(request.getOwner());
        requestToUpdate.setRequestor(request.getRequestor());
        requestRepository.save(requestToUpdate);
        return new ResponseEntity<>(requestToUpdate, HttpStatus.OK);
    }

    // DELETE
    @DeleteMapping(value = "/requests/{id}")
    public ResponseEntity<Long> deleteRequest(@PathVariable Long id) {
        requestRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}



