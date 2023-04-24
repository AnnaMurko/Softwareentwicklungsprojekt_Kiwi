package com.knf.dev.demo.crudapplication.repository;

import com.knf.dev.demo.crudapplication.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
    Long getUserIdByUsername(String username);

}