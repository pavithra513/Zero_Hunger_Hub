package com.example.zerohungerhub.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.zerohungerhub.entity.Donation;
import com.example.zerohungerhub.service.VolunteerService;

@RestController
@RequestMapping("/volunteer")
@CrossOrigin(origins = "http://localhost:5173")
public class VolunteerController {

    private final VolunteerService service;

    public VolunteerController(VolunteerService service) {
        this.service = service;
    }

    @GetMapping("/tasks/{volunteerId}")
    public List<Donation> getTasks(
            @PathVariable Long volunteerId) {

        return service.getTasks(volunteerId);
    }

    @PutMapping("/accept/{donationId}/{volunteerId}")
    public Donation acceptTask(
            @PathVariable Long donationId,
            @PathVariable Long volunteerId) {

        return service.acceptTask(donationId, volunteerId);
    }

    @PutMapping("/delivered/{donationId}")
    public Donation delivered(
            @PathVariable Long donationId) {

        return service.delivered(donationId);
    }
}