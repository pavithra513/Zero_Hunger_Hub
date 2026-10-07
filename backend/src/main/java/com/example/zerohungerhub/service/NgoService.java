package com.example.zerohungerhub.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.zerohungerhub.entity.Donation;
import com.example.zerohungerhub.repository.DonationRepository;

@Service
public class NgoService {

    private final DonationRepository donationRepository;

    public NgoService(DonationRepository donationRepository) {
        this.donationRepository = donationRepository;
    }

    public List<Donation> getAvailableFood() {

        return donationRepository.findByStatus("AVAILABLE");
    }

    public Donation acceptFood(Long donationId, Long ngoId) {

        Donation donation = donationRepository.findById(donationId)
                .orElseThrow(() -> new RuntimeException("Food not found"));

        donation.setNgoId(ngoId);
        donation.setStatus("ACCEPTED");

        return donationRepository.save(donation);
    }
}