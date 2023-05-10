package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.Child;
import com.knf.dev.demo.crudapplication.entity.User;
import com.knf.dev.demo.crudapplication.exception.ResourceNotFoundException;
import com.knf.dev.demo.crudapplication.repository.ChildsRepository;
import com.knf.dev.demo.crudapplication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
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

    @DeleteMapping("/childs/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteChild
            (@PathVariable Long id) {
        Child child = childsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException
                        ("Child not exist with id :" + id));
        childsRepository.delete(child);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    @PutMapping("/childs/{id}")
    public ResponseEntity<Child> updateChild(@PathVariable Long id, @RequestBody Child childDetails) {
        System.out.println("Entering updateChild method, id: " + id);

        Child child = childsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Child not exist with id :" + id));

        System.out.println("Found child: " + child);

        child.setName(childDetails.getName());
        child.setUserId(childDetails.getUserId());
        child.setUser(userRepository.findById(child.getUserId()).orElse(null));

        System.out.println("Updating child with details: " + childDetails);

        Child updatedChild = childsRepository.save(child);
        System.out.println("Child updated: " + updatedChild);

        return ResponseEntity.ok(updatedChild);
    }



}