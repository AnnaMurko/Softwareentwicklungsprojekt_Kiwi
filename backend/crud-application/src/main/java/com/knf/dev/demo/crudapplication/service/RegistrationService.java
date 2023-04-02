package com.knf.dev.demo.crudapplication.service;

import com.knf.dev.demo.crudapplication.entity.RegistrationUser;
import com.knf.dev.demo.crudapplication.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository repo;
    public RegistrationUser saveUser(RegistrationUser user)
    {
        return repo.save(user);
    }

    public RegistrationUser fetchUserByEmailId(String email)
    {
        return repo.findByEmailId(email);
    }

    public RegistrationUser fetchUserByEmailIdAndPassword(String email, String password)
    {
        return repo.findByEmailIdAndPassword(email,password);
    }
}
