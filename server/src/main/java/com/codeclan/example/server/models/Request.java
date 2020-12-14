package com.codeclan.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "requests")
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "status")
    private String status;

    @ManyToOne
    @JsonIgnoreProperties({"requests"})
    @JoinColumn(name = "user_id", nullable = false)
    private User owner;

    @ManyToOne
    @JsonIgnoreProperties({"requests"})
    @JoinColumn(name = "user_id", nullable = false)
    private User requester;

    @Column(name = "book")
    private Book book;

    public Request(String status, User owner, User requestor, Book book) {
        this.status = status;
        this.owner = owner;
        this.requester = requestor;
        this.book = book;
    }

    public Request() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public User getRequester() {
        return requester;
    }

    public void setRequester(User requester) {
        this.requester = requester;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
