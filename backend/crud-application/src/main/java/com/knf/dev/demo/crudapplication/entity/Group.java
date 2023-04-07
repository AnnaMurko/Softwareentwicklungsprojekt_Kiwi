package com.knf.dev.demo.crudapplication.entity;

import com.knf.dev.demo.crudapplication.KiWiEntity;
import jakarta.persistence.*;

@Entity
@Table(name = "Groups")
public class Group implements KiWiEntity {


    @Id
    @Column(name = "GroId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "GroSDesc")
    private String sDesc;

    @Column(name = "GroDesc")
    private String desc;

    @Column(name = "GroEdiId")
    private Long eduId;



    //region getter and setter
    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    @Override
    public void setSDesc(String sDesc) {
        this.sDesc = sDesc;
    }

    @Override
    public String getSDesc() {
        return this.sDesc;
    }

    @Override
    public void setDesc(String desc) {
        this.desc = desc;
    }

    @Override
    public String getDesc() {
        return  this.desc;
    }

    public Long getEduId() {
        return eduId;
    }

    public void setEduId(Long eduId) {
        this.eduId = eduId;
    }
    //endregion
}
