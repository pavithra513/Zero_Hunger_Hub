package com.example.zerohungerhub.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.zerohungerhub.entity.Donation;
import com.example.zerohungerhub.service.DonationService;

@RestController
@RequestMapping("/donations")
@CrossOrigin(origins = "http://localhost:5173")
public class DonationController {

    private final DonationService service;

    public DonationController(DonationService service) {
        this.service = service;
    }

    // Restaurant add food
    @PostMapping
    public Donation addDonation(@RequestBody Donation donation) {

        return service.addDonation(donation);
    }

    // Restaurant donations
    @GetMapping("/restaurant/{restaurantId}")
    public List<Donation> getRestaurantDonations(
            @PathVariable Long restaurantId) {

        return service.getRestaurantDonations(restaurantId);
    }
    
 // Get single donation for edit

    @GetMapping("/{id}")
    public Donation getDonation(@PathVariable Long id) {

        return service.getDonation(id);

    }

    // NGO view available food
    @GetMapping("/available")
    public List<Donation> getAvailableDonations() {

        return service.getAvailableDonations();
    }

    // NGO accept
    @PutMapping("/{donationId}/accept/{ngoId}")
    public Donation acceptDonation(
            @PathVariable Long donationId,
            @PathVariable Long ngoId) {

        return service.acceptDonation(donationId, ngoId);
    }

    // NGO donations
    @GetMapping("/ngo/{ngoId}")
    public List<Donation> getNgoDonations(
            @PathVariable Long ngoId) {

        return service.getNgoDonations(ngoId);
    }

    // Volunteer assign
    @PutMapping("/{donationId}/volunteer/{volunteerId}")
    public Donation assignVolunteer(
            @PathVariable Long donationId,
            @PathVariable Long volunteerId) {

        return service.assignVolunteer(donationId, volunteerId);
    }

    // Volunteer tasks
    @GetMapping("/volunteer/{volunteerId}")
    public List<Donation> getVolunteerTasks(
            @PathVariable Long volunteerId) {

        return service.getVolunteerTasks(volunteerId);
    }

    // Delivered
    @PutMapping("/{donationId}/delivered")
    public Donation markDelivered(
            @PathVariable Long donationId) {

        return service.markDelivered(donationId);
    }

    // Completed
    @PutMapping("/{donationId}/complete")
    public Donation completeDonation(
            @PathVariable Long donationId) {

        return service.completeDonation(donationId);
    }

    // Edit
    @PutMapping("/{id}")
    public Donation updateDonation(
            @PathVariable Long id,
            @RequestBody Donation donation) {

        return service.updateDonation(id, donation);
    }

    // Delete
    @DeleteMapping("/{id}")
    public String deleteDonation(@PathVariable Long id) {

        service.deleteDonation(id);

        return "Donation deleted successfully";
    }
}