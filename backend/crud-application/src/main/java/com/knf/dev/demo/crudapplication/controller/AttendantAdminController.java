package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Attendant;
import com.knf.dev.demo.crudapplication.repository.AttendantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/attendants")
@CrossOrigin(origins = "http://localhost:4200")
public class AttendantAdminController {

    private final AttendantRepository attendantRepository;

    @Autowired
    public AttendantAdminController(AttendantRepository attendantRepository) {
        this.attendantRepository = attendantRepository;
    }

    @GetMapping("/{name}/admin")
    public ResponseEntity<Boolean> getAttendantAdminStatus(@PathVariable String name) {
        Attendant attendant = attendantRepository.findByName(name);
        if (attendant != null) {
            return ResponseEntity.ok(attendant.isAdmin());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
