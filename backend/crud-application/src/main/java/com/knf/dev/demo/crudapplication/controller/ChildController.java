package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Child;
import com.knf.dev.demo.crudapplication.repository.ChildsRepository;
import com.knf.dev.demo.crudapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @PostMapping("/childs")
    public Child createChild(@RequestBody Child child) {
        System.out.println(child);
        Long userId = child.getUserId();
        // Setzen Sie das Kind-Objekt im User-Objekt auf das User-Objekt, das aus der Datenbank geladen wurde
        child.setUser(userRepository.findById(userId).orElse(null));
        // Setzen Sie die user_id für das Kind
        // Speichern Sie das Kind-Objekt in der Datenbank
        return childsRepository.save(child);
    }

}