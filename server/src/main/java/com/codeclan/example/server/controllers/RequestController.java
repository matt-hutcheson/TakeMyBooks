package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.Request;
import com.codeclan.example.server.repositories.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}
