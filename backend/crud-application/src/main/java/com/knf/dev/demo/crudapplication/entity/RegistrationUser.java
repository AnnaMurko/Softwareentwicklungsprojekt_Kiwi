package com.knf.dev.demo.crudapplication.entity;

import jakarta.persistence.*;


@Entity
@Table(name = "userTable")
public class RegistrationUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    public RegistrationUser() {

    }

    public RegistrationUser(int id, String userName, String password, String emailId) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.emailId = emailId;
    }

    @Column(name = "userName")
    private String userName;
    @Column(name = "password")
    private String password;
    @Column(name = "email_id")
    private String emailId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
}
