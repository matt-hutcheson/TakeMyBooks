package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public List<User> findUsersByUserName(String userName);
    public List<User> findUsersByCommunity(String community);
    public List<User> findUsersByShareBooksId(Long id);
}

