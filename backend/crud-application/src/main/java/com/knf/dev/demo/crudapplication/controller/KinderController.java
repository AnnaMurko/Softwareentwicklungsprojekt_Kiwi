package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Kind;
import com.knf.dev.demo.crudapplication.entity.User;
import com.knf.dev.demo.crudapplication.repository.KindRepository;
import com.knf.dev.demo.crudapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class KinderController {

    @Autowired
    private KindRepository kindRepository;

    // get all users
    @GetMapping("/kinder")
    public List<Kind> getAllUsers() {
        return kindRepository.findAll();
    }
}