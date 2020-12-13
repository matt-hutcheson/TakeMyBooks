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

    @GetMapping(value = "/requests/owner/{id}")
    public ResponseEntity<List<Request>> getRequestsByOwnerUserId(@PathVariable Long id, @RequestParam(name = "status", required = false) String status){
        if (status != null){
            return new ResponseEntity<>(requestRepository.findRequestsByOwnerIdAndStatus(id, status), HttpStatus.OK);
        }
        return new ResponseEntity<>(requestRepository.findRequestsByOwnerId(id), HttpStatus.OK);
    }

    @GetMapping(value = "/requests/requester/{id}")
    public ResponseEntity<List<Request>> getRequestsByRequesterId(@PathVariable Long id, @RequestParam(name = "status", required = false) String status){
        if (status != null){
            return new ResponseEntity<>(requestRepository.findRequestsByRequesterIdAndStatus(id, status), HttpStatus.OK);
        }
        return new ResponseEntity<>(requestRepository.findRequestsByRequesterId(id), HttpStatus.OK);
    }

    @GetMapping(value = "/requests/owner/{id}/{id}")
    public ResponseEntity<Request> getRequestByOwnerIdAndRequestId(@PathVariable Long ownerId, @PathVariable Long requestId){
        return new ResponseEntity(requestRepository.findRequestsByOwnerIdAndId(ownerId, requestId), HttpStatus.OK);
    }

    @GetMapping(value = "/requests/requester/{id}/{id}")
    public ResponseEntity<Request> getRequestByRequesterIdAndRequestId(@PathVariable Long requesterId, @PathVariable Long requestId){
        return new ResponseEntity(requestRepository.findRequestsByRequesterIdAndId(requesterId, requestId), HttpStatus.OK);
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

