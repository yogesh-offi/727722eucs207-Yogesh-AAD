package com.backend.yoga.Model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "course")
public class Courses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    public String name;
    public double price;
    public String time;
    public String description;

    // @OneToOne(cascade = CascadeType.ALL)
    // public Institutions institute;
    
}
