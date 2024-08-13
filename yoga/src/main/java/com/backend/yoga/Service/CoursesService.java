package com.backend.yoga.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.yoga.Model.Courses;
import com.backend.yoga.Repository.CoursesRepo;

@Service
public class CoursesService {

    @Autowired
    private CoursesRepo cr;

    public Courses savedata(Courses c)
    {
        return cr.save(c);
    }

    public List<Courses> getcourse()
    {
        return cr.findAll();
    }

    public Optional<Courses> retcourses(int coursid)
    {
        return cr.findById(coursid);
    }

    public Courses updateCourse(Courses course)
    {
        return cr.save(course);
    }

    public void deletecourse(int coursid)
    {
        cr.deleteById(coursid);
    }
}
