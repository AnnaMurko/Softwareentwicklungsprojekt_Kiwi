package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Attendant;
import com.knf.dev.demo.crudapplication.exception.ResourceNotFoundException;
import com.knf.dev.demo.crudapplication.repository.AttendantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class AttendantController {

    private final AttendantRepository attendantRepository;

    @Autowired
    public AttendantController(AttendantRepository attendantRepository) {
        this.attendantRepository = attendantRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Attendant attendantCredentials) {
        Attendant existingAttendant = attendantRepository.findByName(attendantCredentials.getName());
        if (existingAttendant == null || !existingAttendant.getPassword().equals(attendantCredentials.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        return ResponseEntity.ok().build();
    }

    @GetMapping("/attendants")
    public List<Attendant> getAllAttendants() {
        return attendantRepository.findAll();
    }

    @PostMapping("/attendants")
    public Attendant createAttendant(@RequestBody Attendant newAttendant) {
        return attendantRepository.save(newAttendant);
    }

    @PutMapping("/attendants/{id}")
    public ResponseEntity<Attendant> updateAttendant(@PathVariable Long id, @RequestBody Attendant updatedAttendantDetails) {
        Attendant existingAttendant = attendantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Attendant not exist with id: " + id));

        existingAttendant.setName(updatedAttendantDetails.getName());
        existingAttendant.setPassword(updatedAttendantDetails.getPassword());
        existingAttendant.setAdmin(updatedAttendantDetails.isAdmin());

        Attendant updatedAttendant = attendantRepository.save(existingAttendant);
        return ResponseEntity.ok(updatedAttendant);
    }

    @DeleteMapping("/attendants/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAttendant(@PathVariable Long id) {
        Attendant existingAttendant = attendantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Attendant not exist with id: " + id));

        attendantRepository.delete(existingAttendant);

        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
