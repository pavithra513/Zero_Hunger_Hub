package com.example.zerohungerhub.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.zerohungerhub.dto.LoginDTO;
import com.example.zerohungerhub.dto.RegisterDTO;
import com.example.zerohungerhub.entity.User;
import com.example.zerohungerhub.repository.UserRepository;
import com.example.zerohungerhub.security.JwtService;

@Service
public class AuthService {

    private final UserRepository repo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(
            UserRepository repo,
            PasswordEncoder passwordEncoder,
            JwtService jwtService) {

        this.repo = repo;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }


    // REGISTER

    public String register(RegisterDTO dto) {

        User user = new User();

        user.setName(dto.getName());

        user.setEmail(dto.getEmail());

        user.setPassword(
                passwordEncoder.encode(
                        dto.getPassword()
                )
        );

        user.setPhone(dto.getPhone());

        if (dto.getRole() == null ||
            dto.getRole().isEmpty()) {

            user.setRole("RESTAURANT");

        } else {

            user.setRole(dto.getRole());
        }

        repo.save(user);

        return user.getRole()
                + " registered successfully";
    }


    // LOGIN

    public String login(LoginDTO dto) {

        User user = repo.findByEmail(
                dto.getEmail()
        ).orElseThrow(
                () -> new RuntimeException(
                        "User not found"
                )
        );


        // Check password

        if (!passwordEncoder.matches(
                dto.getPassword(),
                user.getPassword())) {

            throw new RuntimeException(
                    "Invalid password"
            );
        }


        // Generate JWT

        String token =
                jwtService.generateToken(user);


        return token;
    }
}