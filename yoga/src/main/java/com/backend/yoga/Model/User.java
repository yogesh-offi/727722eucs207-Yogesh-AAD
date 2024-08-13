package com.backend.yoga.Model;

import java.util.List;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "UserData")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    public String uname;
    public String email;
    public String password;
    public String Role;

    @ManyToMany(cascade = CascadeType.ALL)
    public List<Courses> plans;
    
}
