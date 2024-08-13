package com.backend.yoga.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.yoga.Model.Institutions;
import com.backend.yoga.Repository.InstitutionsRepo;

@Service
public class InstitutionsService {

    @Autowired
    private InstitutionsRepo insrepo;

    public Institutions savedata(Institutions ins)
    {
        return insrepo.save(ins);
    }

    public List<Institutions> getInstitutions()
    {
        return insrepo.findAll();
    }

    public Optional<Institutions> retins(int insid)
    {
        return insrepo.findById(insid);
    }

    public void deleteInstitution(int id)
    {
        insrepo.deleteById(id);
    }

    public Institutions updateInstitution(Institutions ins)
    {
        return insrepo.save(ins);
    }
}
