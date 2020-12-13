//package com.codeclan.example.server.models;
//
//import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name = "requests")
//public class Request {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name = "status")
//    private String status;
//
//    @ManyToOne
//    @JsonIgnoreProperties({"requests"})
//    @PrimaryKeyJoinColumn(name = "owner_id", referencedColumnName = "id")
//    private User owner;
//
//    @ManyToOne
//    @JsonIgnoreProperties({"requests"})
//    @PrimaryKeyJoinColumn(name = "requester_id", referencedColumnName = "id")
//    private User requester;
//
//    @ManyToOne
//    @JsonIgnoreProperties({"owner"})
//    @JoinColumn(name = "book_id", nullable = false)
//    private Book book;
//
//    public Request(String status, User owner, User requester, Book book) {
//        this.status = status;
//        this.owner = owner;
//        this.requester = requester;
//        this.book = book;
//    }
//
//    public Request() {
//
//    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getStatus() {
//        return status;
//    }
//
//    public void setStatus(String status) {
//        this.status = status;
//    }
//
//    public User getOwner() {
//        return owner;
//    }
//
//    public void setOwner(User owner) {
//        this.owner = owner;
//    }
//
//    public User getRequester() {
//        return requester;
//    }
//
//    public void setRequester(User requester) {
//        this.requester = requester;
//    }
//
//    public Book getBook() {
//        return book;
//    }
//
//    public void setBook(Book book) {
//        this.book = book;
//    }
//}
