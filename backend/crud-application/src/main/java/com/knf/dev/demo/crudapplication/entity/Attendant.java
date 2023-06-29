package com.knf.dev.demo.crudapplication.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "attendants")
@JsonIgnoreProperties("children")
public class Attendant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String password;

    @Column(name = "admin")
    private boolean admin;

    @OneToMany(mappedBy = "attendant", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Child> children = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String name) {
        this.username = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @JsonIgnoreProperties({"children"})
    public List<Child> getChildren() {
        return children;
    }

    @Override
    public String toString() {
        return "Attendant{" +
                "id=" + id +
                ", name='" + username + '\'' +
                ", admin=" + admin +
                '}';
    }
}
