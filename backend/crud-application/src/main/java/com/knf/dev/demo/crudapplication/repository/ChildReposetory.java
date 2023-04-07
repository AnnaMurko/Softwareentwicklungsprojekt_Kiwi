package com.knf.dev.demo.crudapplication.repository;

import com.knf.dev.demo.crudapplication.entity.Child;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChildReposetory extends JpaRepository<Child, Long> {

    @Query("SELECT p FROM Child p WHERE p.groupId = ?1")
    List<Child> getChildrenByGroup(int groId);
}
