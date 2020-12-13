package com.codeclan.example.server.repositories;

import com.codeclan.example.server.models.Request;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RequestRepository extends JpaRepository<Request, Long> {
    public List<Request> findRequestsByOwnerId(Long id);
    public List<Request> findRequestsByRequesterId(Long id);
    public List<Request> findRequestsByOwnerIdAndStatus(Long id, String status);
    public List<Request> findRequestsByRequesterIdAndStatus(Long id, String status);
    public List<Request> findRequestsByBookId(Long id);
    public List<Request> findRequestsByOwnerIdAndId(Long ownerId, Long requestId);
    public List<Request> findRequestsByRequesterIdAndId(Long requesterId, Long requestId);
}
