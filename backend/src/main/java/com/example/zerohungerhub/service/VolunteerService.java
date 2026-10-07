package com.example.zerohungerhub.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.zerohungerhub.entity.Donation;
import com.example.zerohungerhub.repository.DonationRepository;

@Service
public class VolunteerService {

    private final DonationRepository repo;

    public VolunteerService(DonationRepository repo) {
        this.repo = repo;
    }

    public List<Donation> getTasks(Long volunteerId) {

        return repo.findByVolunteerId(volunteerId);
    }

    public Donation acceptTask(Long donationId, Long volunteerId) {

        Donation donation = repo.findById(donationId)
                .orElseThrow(() -> new RuntimeException("Donation not found"));

        donation.setVolunteerId(volunteerId);
        donation.setStatus("PICKED_UP");

        return repo.save(donation);
    }

    public Donation delivered(Long donationId) {

        Donation donation = repo.findById(donationId)
                .orElseThrow(() -> new RuntimeException("Donation not found"));

        donation.setStatus("DELIVERED");

        return repo.save(donation);
    }
}