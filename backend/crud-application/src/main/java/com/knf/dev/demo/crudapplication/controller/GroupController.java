package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Group;
import com.knf.dev.demo.crudapplication.repository.GroupRepository;
import com.knf.dev.demo.crudapplication.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1")
public class GroupController {

    @Autowired
    private GroupService _service;

    @GetMapping("/groups/{eduId}")
    public List<Group> getGroupsFromUser( @PathVariable("eduId") int eduId){
        System.out.println("EduId: "+eduId);
        return _service.listall(eduId);
    }
}
