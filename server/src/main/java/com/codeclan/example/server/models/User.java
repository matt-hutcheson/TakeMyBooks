package com.codeclan.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstName")
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "community")
    private String community;

    @JsonIgnoreProperties({"owner"})
    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
    private List<Book> shareBooks;

//    @JsonIgnoreProperties({"owner"})
//    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
//    private List<Book> ownedBooks;

//    @JsonIgnoreProperties({"owner", "requester"})
//    @OneToMany(mappedBy = "owner", fetch = FetchType.LAZY)
//    private List<Request> requests;

    public User(String firstName, String lastName, String email, String community) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.community = community;
        this.shareBooks = new ArrayList<>();
//        this.ownedBooks = new ArrayList<>();
//        this.requests = new ArrayList<>();
    }

    public User() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCommunity() {
        return community;
    }

    public void setCommunity(String community) {
        this.community = community;
    }

    public List<Book> getShareBooks() {
        return shareBooks;
    }

    public void setShareBooks(List<Book> shareBooks) {
        this.shareBooks = shareBooks;
    }

//    public List<Book> getOwnedBooks() {
//        return ownedBooks;
//    }
//
//    public void setOwnedBooks(List<Book> ownedBooks) {
//        this.ownedBooks = ownedBooks;
//    }

    public void addBookToSharedBooks(Book bookToAdd){
        this.shareBooks.add(bookToAdd);
    }

//    public void addBookToOwnedBooks(Book bookToAdd){
//        this.ownedBooks.add(bookToAdd);
//    }

//    public List<Request> getRequests() {
//        return requests;
//    }
//
//    public void setRequests(List<Request> requests) {
//        this.requests = requests;
//    }
//
//    public void addRequest(Request request){
//        this.requests.add(request);
//    }
}
