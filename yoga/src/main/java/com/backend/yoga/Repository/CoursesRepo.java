package com.backend.yoga.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.yoga.Model.Courses;

public interface CoursesRepo extends JpaRepository<Courses,Integer>{

}
