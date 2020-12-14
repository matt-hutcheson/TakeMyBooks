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

    @GetMapping(value = "/requests/owner/{ownerId}")
    public ResponseEntity<List<Request>> getRequestsByOwnerUserId(
            @PathVariable Long ownerId,
            @RequestParam(name = "status", required = false) String status,
            @RequestParam(name = "request-id", required = false) Long requestId){
        if (requestId != null){
            return new ResponseEntity<>(requestRepository.findRequestsByOwnerIdAndId(ownerId, requestId), HttpStatus.OK);
        }
        if (status != null){
            return new ResponseEntity<>(requestRepository.findRequestsByOwnerIdAndStatus(ownerId, status), HttpStatus.OK);
        }
        return new ResponseEntity<>(requestRepository.findRequestsByOwnerId(ownerId), HttpStatus.OK);
    }

    @GetMapping(value = "/requests/requester/{requesterId}")
    public ResponseEntity<List<Request>> getRequestsByRequesterId(
            @PathVariable Long requesterId,
            @RequestParam(name = "status", required = false) String status,
            @RequestParam(name = "request-id", required = false) Long requestId){
        if (requestId != null){
            return new ResponseEntity<>(requestRepository.findRequestsByRequesterIdAndId(requesterId, requestId), HttpStatus.OK);
        }
        if (status != null){
            return new ResponseEntity<>(requestRepository.findRequestsByRequesterIdAndStatus(requesterId, status), HttpStatus.OK);
        }
        return new ResponseEntity<>(requestRepository.findRequestsByRequesterId(requesterId), HttpStatus.OK);
    }

    // INDEX
    @GetMapping("/requests")
    public ResponseEntity<List<Request>> getAllRequests () {
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
        requestToUpdate.setRequester(request.getRequester());
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

