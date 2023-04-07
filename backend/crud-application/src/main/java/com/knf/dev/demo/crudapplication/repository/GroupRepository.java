package com.knf.dev.demo.crudapplication.repository;

import com.knf.dev.demo.crudapplication.entity.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

    @Query("SELECT p FROM Group p WHERE p.eduId = ?1")
    List<Group> getGroupByEduId(int eduId);
}
