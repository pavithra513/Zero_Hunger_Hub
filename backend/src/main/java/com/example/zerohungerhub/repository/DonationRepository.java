package com.example.zerohungerhub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.zerohungerhub.entity.Donation;

public interface DonationRepository extends JpaRepository<Donation, Long> {

    List<Donation> findByRestaurantId(Long restaurantId);

    List<Donation> findByStatus(String status);

    List<Donation> findByNgoId(Long ngoId);

    List<Donation> findByVolunteerId(Long volunteerId);
}