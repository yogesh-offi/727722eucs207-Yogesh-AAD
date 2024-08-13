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

import com.backend.yoga.Model.Institutions;
import com.backend.yoga.Service.InstitutionsService;

@RestController
public class InstitutionsController {

    @Autowired
    InstitutionsService is;
    Institutions ins;

    @GetMapping("/getins")
    public List<Institutions> getins(){
        return is.getInstitutions();
    }

    @PostMapping("/postins")
    public Institutions store(@RequestBody Institutions ins)
    {
        return is.savedata(ins);
    }

    @GetMapping("/getins/{id}")
    public Optional<Institutions> getinsbyid(@PathVariable int id)
    {
        return is.retins(id);
    }

    @PutMapping("/updateins/{id}")
    public Institutions updateIns(@PathVariable int id, @RequestBody Institutions ins)
    {
        return is.updateInstitution(ins);
    }

    @DeleteMapping("/deleteins/{id}")
    public void deleteIns(@PathVariable int id)
    {
        is.deleteInstitution(id);
    }
}
