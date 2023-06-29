package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Attendant;
import com.knf.dev.demo.crudapplication.repository.AttendantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/attendants")
@CrossOrigin(origins = "http://localhost:4200")
public class AttendantIdController {

    private final AttendantRepository attendantRepository;

    @Autowired
    public AttendantIdController(AttendantRepository attendantRepository) {
        this.attendantRepository = attendantRepository;
    }

    @GetMapping("/{name}/id")
    public ResponseEntity<Long> getAttendantIdByName(@PathVariable String name) {
        Attendant attendant = attendantRepository.findByUsername(name);
        if (attendant != null) {
            return ResponseEntity.ok(attendant.getId());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
