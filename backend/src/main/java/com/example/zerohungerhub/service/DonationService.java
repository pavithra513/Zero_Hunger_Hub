package com.example.zerohungerhub.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.zerohungerhub.entity.Donation;
import com.example.zerohungerhub.repository.DonationRepository;

@Service
public class DonationService {

    private final DonationRepository repo;

    public DonationService(DonationRepository repo) {

        this.repo = repo;

    }

    public Donation addDonation(Donation donation) {

        donation.setStatus("AVAILABLE");

        return repo.save(donation);

    }

    public List<Donation> getRestaurantDonations(Long restaurantId) {

        return repo.findByRestaurantId(restaurantId);

    }

    // Get single donation for edit
    public Donation getDonation(Long id) {

        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Donation not found"));

    }

    public List<Donation> getAvailableDonations() {

        return repo.findByStatus("AVAILABLE");

    }

    public Donation acceptDonation(Long donationId, Long ngoId) {

        Donation donation = repo.findById(donationId)
                .orElseThrow(() -> new RuntimeException("Donation not found"));

        donation.setNgoId(ngoId);
        donation.setStatus("ACCEPTED");

        return repo.save(donation);

    }

    public List<Donation> getNgoDonations(Long ngoId) {

        return repo.findByNgoId(ngoId);

    }

    public Donation assignVolunteer(Long donationId, Long volunteerId) {

        Donation donation = repo.findById(donationId)
                .orElseThrow(() -> new RuntimeException("Donation not found"));

        donation.setVolunteerId(volunteerId);
        donation.setStatus("PICKED_UP");

        return repo.save(donation);

    }

    public List<Donation> getVolunteerTasks(Long volunteerId) {

        return repo.findByVolunteerId(volunteerId);

    }

    public Donation markDelivered(Long donationId) {

        Donation donation = repo.findById(donationId)
                .orElseThrow(() -> new RuntimeException("Donation not found"));

        donation.setStatus("DELIVERED");

        return repo.save(donation);

    }

    public Donation completeDonation(Long donationId) {

        Donation donation = repo.findById(donationId)
                .orElseThrow(() -> new RuntimeException("Donation not found"));

        donation.setStatus("COMPLETED");

        return repo.save(donation);

    }

    public Donation updateDonation(Long id, Donation newDonation) {

        Donation donation = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Donation not found"));

        donation.setFoodName(newDonation.getFoodName());
        donation.setFoodType(newDonation.getFoodType());
        donation.setQuantity(newDonation.getQuantity());
        donation.setUnit(newDonation.getUnit());
        donation.setDescription(newDonation.getDescription());
        donation.setPreparedTime(newDonation.getPreparedTime());
        donation.setExpiryTime(newDonation.getExpiryTime());
        donation.setPickupAddress(newDonation.getPickupAddress());

        return repo.save(donation);

    }

    public void deleteDonation(Long id) {

        repo.deleteById(id);

    }

}