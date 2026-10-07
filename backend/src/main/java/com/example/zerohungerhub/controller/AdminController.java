package com.example.zerohungerhub.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.zerohungerhub.entity.Donation;
import com.example.zerohungerhub.entity.User;
import com.example.zerohungerhub.repository.DonationRepository;
import com.example.zerohungerhub.repository.UserRepository;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private final UserRepository userRepo;
    private final DonationRepository donationRepo;

    public AdminController(
            UserRepository userRepo,
            DonationRepository donationRepo) {

        this.userRepo = userRepo;
        this.donationRepo = donationRepo;
    }

    // Get all users
    @GetMapping("/users")
    public List<User> getAllUsers() {

        return userRepo.findAll();
    }

    // Get all donations
    @GetMapping("/donations")
    public List<Donation> getAllDonations() {

        return donationRepo.findAll();
    }
}