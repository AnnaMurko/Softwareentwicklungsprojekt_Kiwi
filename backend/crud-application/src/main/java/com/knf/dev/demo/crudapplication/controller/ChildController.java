package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Child;
import com.knf.dev.demo.crudapplication.entity.Valuation;
import com.knf.dev.demo.crudapplication.exception.ResourceNotFoundException;
import com.knf.dev.demo.crudapplication.repository.AttendantRepository;
import com.knf.dev.demo.crudapplication.repository.ChildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class ChildController {

    private final ChildRepository childRepository;
    private final AttendantRepository attendantRepository;

    @Autowired
    public ChildController(ChildRepository childRepository, AttendantRepository attendantRepository) {
        this.childRepository = childRepository;
        this.attendantRepository = attendantRepository;
    }

    @GetMapping("/children")
    public List<Child> getAllChildren() {
        List<Child> children = childRepository.findAll();
        children.forEach(child -> child.setAttendant(attendantRepository.findById(child.getAttendantId()).orElse(null)));
        return children;
    }

    @GetMapping("/children/{id}/valuations")
    public ResponseEntity<List<Valuation>> getValuationsByChildId(@PathVariable Long id) {
        Child child = childRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Child not exist with id: " + id));
        return new ResponseEntity<>(child.getValuations(), HttpStatus.OK);
    }

    @PostMapping("/children")
    public Child createChild(@RequestBody Child child) {
        child.setAttendant(attendantRepository.findById(child.getAttendantId()).orElse(null));
        return childRepository.save(child);
    }

    @DeleteMapping("/children/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteChild(@PathVariable Long id) {
        Child child = childRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Child not exist with id :" + id));
        childRepository.delete(child);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/children/{id}")
    public ResponseEntity<Child> updateChild(@PathVariable Long id, @RequestBody Child childDetails) {
        Child child = childRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Child not exist with id :" + id));
        child.setFirstName(childDetails.getFirstName());
        child.setLastName(childDetails.getLastName());
        child.setAttendantId(childDetails.getAttendantId());
        child.setAttendant(attendantRepository.findById(child.getAttendantId()).orElse(null));
        child.setNote(childDetails.getNote());
        return ResponseEntity.ok(childRepository.save(child));
    }
}
