package com.knf.dev.demo.crudapplication.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "aria_values")
@JsonIgnoreProperties("child")
public class AriaValues {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @Column(name = "value")
    private List<String> values;

    @Column(name = "child_id")
    private Long childId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "child_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Child child;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // Getter und Setter

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<String> getValues() {
        return values;
    }

    public void setValues(List<String> values) {
        this.values = values;
    }

    public Long getChildId() {
        return childId;
    }

    public void setChildId(Long childId) {
        this.childId = childId;
    }

    public Child getChild() {
        return child;
    }

    public void setChild(Child child) {
        this.child = child;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    // toString-Methode

    @Override
    public String toString() {
        return "AriaValues{" +
                "id=" + id +
                ", values=" + values +
                ", childId=" + childId +
                ", child=" + child +
                ", createdAt=" + createdAt +
                '}';
    }
}
