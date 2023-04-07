package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Child;
import com.knf.dev.demo.crudapplication.repository.ChildReposetory;
import com.knf.dev.demo.crudapplication.service.ChildrenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
public class ChildrenController {
    @Autowired
    private ChildrenService _service;

    @GetMapping("/children/{groId}")
    public List<Child> getGroupsFromUser(@PathVariable("groId") int groId){
        System.out.println("GroupId: "+groId);
        return _service.getChildren(groId);
    }
}

