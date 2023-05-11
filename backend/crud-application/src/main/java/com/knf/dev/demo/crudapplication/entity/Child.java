package com.knf.dev.demo.crudapplication.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.knf.dev.demo.crudapplication.entity.AriaValues;
import com.knf.dev.demo.crudapplication.entity.User;
import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "childs")
@JsonIgnoreProperties("user")
public class Child {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "user_id")
    private Long userId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id", insertable = false, updatable = false)
    private User user;

    @OneToMany(mappedBy = "child", cascade = CascadeType.ALL)
    private List<AriaValues> ariaValues;

    // getter and setter methods

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<AriaValues> getAriaValues() {
        return ariaValues;
    }

    public void setAriaValues(List<AriaValues> ariaValues) {
        this.ariaValues = ariaValues;
    }

    // toString method

    @Override
    public String toString() {
        return "Child{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", userId=" + userId +
                ", user=" + user +
                ", ariaValues=" + ariaValues +
                '}';
    }
}
