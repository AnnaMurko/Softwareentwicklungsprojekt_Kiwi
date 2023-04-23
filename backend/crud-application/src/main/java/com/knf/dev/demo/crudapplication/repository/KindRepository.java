package com.knf.dev.demo.crudapplication.repository;

import com.knf.dev.demo.crudapplication.entity.Kind;
import com.knf.dev.demo.crudapplication.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface KindRepository extends JpaRepository<Kind, Long> {

}