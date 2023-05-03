package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Child;
import com.knf.dev.demo.crudapplication.repository.ChildsRepository;
import com.knf.dev.demo.crudapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class ChildController {
    @Autowired
    private ChildsRepository childsRepository;
    @Autowired
private UserRepository userRepository;

    @GetMapping("/childs")
    public List<Child> getAllChildren() {
        List<Child> children = childsRepository.findAll();
        for (Child child : children) {
            child.setUser(userRepository.findById(child.getUserId()).orElse(null));
        }
        return children;
    }


    // create user rest API
    @PostMapping("/childs")
    public Child createChild(@RequestBody Child child) {
        return childsRepository.save(child);
    }

}