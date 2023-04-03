package com.knf.dev.demo.crudapplication.controller;

import com.knf.dev.demo.crudapplication.entity.RegistrationUser;
import com.knf.dev.demo.crudapplication.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class RegistrationController {
    @Autowired
    private RegistrationService service;

    @PostMapping("/registeruser")
    public RegistrationUser registerUser(@RequestBody RegistrationUser user) throws Exception {
        String tempEmailId = user.getEmailId();
        if (tempEmailId != null && "".equals(tempEmailId)) {
            RegistrationUser userobj = service.fetchUserByEmailId(tempEmailId);
            if (userobj != null) {
                throw new Exception("user with this id is already exist");
            }
        }
        RegistrationUser userObj = null;
        return service.saveUser(user);

    }

    @PostMapping("login")
    public RegistrationUser loginUser(@RequestBody RegistrationUser user) throws Exception {
        String tempEmailId = user.getEmailId();
        String password = user.getPassword();
        RegistrationUser userR = null;
        if (tempEmailId != null && password != null) {
            userR = service.fetchUserByEmailIdAndPassword(tempEmailId, password);
        }
        if (userR == null) {
            throw new Exception("Bad credentials");
        }
        return userR;
    }


    //public ResponseStatus authenticate(@RequestBody RegistrationUser user){
    //  return HttpStatus.OK;
    // }

    @PostMapping("/authenticate")
    public RegistrationUser authenticate(@RequestBody RegistrationUser user){
        return user;
    }
}