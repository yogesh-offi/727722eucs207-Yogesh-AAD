package com.backend.yoga.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.yoga.Model.Courses;
import com.backend.yoga.Service.CoursesService;

@RestController
public class CoursesController {

    @Autowired
    CoursesService cs;
    Courses c;

    @GetMapping("/courses")
    public List<Courses> getCourses() 
    {
        return cs.getcourse();
    }

    @PostMapping("/saveCourse")
    public Courses save(@RequestBody Courses course)
    {
        return cs.savedata(course);
    }

    @GetMapping("/courses/{id}")
    public Optional<Courses> retcourses(@PathVariable int id)
    {
        return cs.retcourses(id);
    }

    @PutMapping("/updateCourse/{id}")
    public Courses updateCourse(@PathVariable int id, @RequestBody Courses course)
    {
        return cs.updateCourse(course);
    }

    @DeleteMapping("/courses/{id}")
    public void deleteCourse(@PathVariable int id)
    {
        cs.deletecourse(id);
    }

}
