package com.knf.dev.demo.crudapplication.repository;

import com.knf.dev.demo.crudapplication.entity.Attendant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;



@Repository
public interface AttendantRepository extends JpaRepository<Attendant, Long> {

    Attendant findByUsername(String username);
    List<Attendant> findAll();
}