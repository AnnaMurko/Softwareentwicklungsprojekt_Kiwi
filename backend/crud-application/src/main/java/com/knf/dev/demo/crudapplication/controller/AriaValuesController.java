package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.AriaValues;
import com.knf.dev.demo.crudapplication.exception.ResourceNotFoundException;
import com.knf.dev.demo.crudapplication.repository.AriaValuesRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class AriaValuesController {

    private final AriaValuesRepository ariaValuesRepository;

    @Autowired
    public AriaValuesController(AriaValuesRepository ariaValuesRepository) {
        this.ariaValuesRepository = ariaValuesRepository;
    }

    // Add a new AriaValue
    @PostMapping("/ariaValues")
    public ResponseEntity<Object> createAriaValues(@RequestBody AriaValues ariaValue) {
        ariaValuesRepository.save(ariaValue);
        return ResponseEntity.ok().build();
    }
}
