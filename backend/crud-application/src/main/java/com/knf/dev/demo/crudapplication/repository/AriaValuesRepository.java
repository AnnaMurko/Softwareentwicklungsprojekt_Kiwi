package com.knf.dev.demo.crudapplication.repository;

import com.knf.dev.demo.crudapplication.entity.AriaValues;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AriaValuesRepository extends JpaRepository<AriaValues, Long> {
    List<AriaValues> findByChildId(Long childId);

}
