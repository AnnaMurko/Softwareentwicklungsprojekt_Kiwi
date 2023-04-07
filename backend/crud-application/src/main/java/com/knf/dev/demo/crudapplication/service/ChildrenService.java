package com.knf.dev.demo.crudapplication.service;

import com.knf.dev.demo.crudapplication.entity.Child;
import com.knf.dev.demo.crudapplication.repository.ChildReposetory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChildrenService {
    @Autowired
    private ChildReposetory _repo;

    public List<Child> getChildren(int groupId) {
        return _repo.getChildrenByGroup(groupId);

    }
}
