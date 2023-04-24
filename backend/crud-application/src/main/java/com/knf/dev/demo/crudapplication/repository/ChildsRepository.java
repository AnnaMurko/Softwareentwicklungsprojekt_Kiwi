package com.knf.dev.demo.crudapplication.repository;

import com.knf.dev.demo.crudapplication.entity.Child;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChildsRepository extends JpaRepository<Child, Long> {

    @Query("SELECT c FROM Child c JOIN c.user u")
    List<Child> findAllWithUser();

}