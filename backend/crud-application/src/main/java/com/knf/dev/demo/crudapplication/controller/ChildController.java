package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Child;
import com.knf.dev.demo.crudapplication.repository.ChildsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1")
public class ChildController {
    @Autowired
    private ChildsRepository childsRepository;

    @GetMapping("/childs")
    public List<Child> getAllChildren() {
        return childsRepository.findAll();
    }
}