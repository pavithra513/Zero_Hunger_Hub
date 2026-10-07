package com.example.zerohungerhub.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.zerohungerhub.dto.LoginDTO;
import com.example.zerohungerhub.dto.RegisterDTO;
import com.example.zerohungerhub.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService service;

    public AuthController(AuthService service) {

        this.service = service;
    }


    // REGISTER

    @PostMapping("/register")
    public String register(
            @RequestBody RegisterDTO dto) {

        return service.register(dto);
    }


    // LOGIN

    @PostMapping("/login")
    public String login(
            @RequestBody LoginDTO dto) {

        return service.login(dto);
    }
}