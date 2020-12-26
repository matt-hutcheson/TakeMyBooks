package com.codeclan.example.server.controllers;

import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(
            @RequestParam(name="userName", required=false) String userName,
            @RequestParam(name="community", required=false) String community,
            @RequestParam(name="shareBooksId", required=false) Long shareBookId){
        if(userName != null){
            return new ResponseEntity<>(userRepository.findUsersByUserName(userName), HttpStatus.OK);
        }
        if(community != null){
            return new ResponseEntity<>(userRepository.findUsersByCommunity(community), HttpStatus.OK);
        }
        if(shareBookId != null){
            return new ResponseEntity<>(userRepository.findUsersByShareBooksId(shareBookId), HttpStatus.OK);
        }
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping(value="/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        return new ResponseEntity(userRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping("/users")
    public ResponseEntity<User> postUser(@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @PutMapping(value="/users/{id}")
    public ResponseEntity<User> putUser(@RequestBody User user, @PathVariable Long id){
        User userToUpdate = userRepository.findById(id).get();
        userToUpdate.setUserName(user.getUserName());
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setCommunity(user.getCommunity());
        userRepository.save(userToUpdate);
        return new ResponseEntity<>(userToUpdate, HttpStatus.OK);
    }

    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity<Long> deleteUser(@PathVariable Long id){
        userRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
