package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Valuation;
import com.knf.dev.demo.crudapplication.repository.ValuationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class ValuationController {

    private final ValuationRepository valuationRepository;

    @Autowired
    public ValuationController(ValuationRepository valuationRepository) {
        this.valuationRepository = valuationRepository;
    }

    @PostMapping("/valuations")
    public ResponseEntity<Valuation> createValuation(@RequestBody Valuation valuation) {
        Valuation savedValuation = valuationRepository.save(valuation);
        return ResponseEntity.ok(savedValuation);
    }
}
