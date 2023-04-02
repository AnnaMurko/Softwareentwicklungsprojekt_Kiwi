package com.knf.dev.demo.crudapplication.repository;

import com.knf.dev.demo.crudapplication.entity.RegistrationUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RegistrationRepository extends JpaRepository<RegistrationUser, Integer> {

    RegistrationUser findByEmailId(String emailId);
    RegistrationUser findByEmailIdAndPassword(String emailId, String password);
}