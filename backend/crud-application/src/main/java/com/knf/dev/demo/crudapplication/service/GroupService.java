package com.knf.dev.demo.crudapplication.service;

import com.knf.dev.demo.crudapplication.entity.Group;
import com.knf.dev.demo.crudapplication.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {

    @Autowired
    private GroupRepository _repo;

    public List<Group> listall(int eduId) {
        return _repo.getGroupByEduId(eduId);

    }
}
