package com.example.zerohungerhub.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.zerohungerhub.entity.Donation;
import com.example.zerohungerhub.service.NgoService;

@RestController
@RequestMapping("/ngo")
@CrossOrigin(origins = "http://localhost:5173")
public class NgoController {

    private final NgoService service;

    public NgoController(NgoService service) {
        this.service = service;
    }

    @GetMapping("/food")
    public List<Donation> getAvailableFood() {

        return service.getAvailableFood();
    }

    @PutMapping("/accept/{donationId}/{ngoId}")
    public Donation acceptFood(
            @PathVariable Long donationId,
            @PathVariable Long ngoId) {

        return service.acceptFood(donationId, ngoId);
    }
}