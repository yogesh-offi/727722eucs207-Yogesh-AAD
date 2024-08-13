package com.backend.yoga.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.yoga.Model.User;
import com.backend.yoga.Repository.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo ur;

    public User saveuser(User user)
    {
        return ur.save(user);
    }
    public User updateuserpass(User user,int id)
    {
        Optional<User> optionaluser = ur.findById(id);
        User Ouser=optionaluser.get();
        Ouser.setPassword(user.getPassword());
        return ur.save(Ouser);
    }

    public List<User> getusers()
    {
        return ur.findAll();
    }

    public Optional<User> retuser(int uid)
    {
        return ur.findById(uid);
    }

    public User updateUser(int id,User user)
    {
        Optional<User> optionaluser = ur.findById(id);
        User Ouser=optionaluser.get();
        Ouser.setPlans(user.getPlans());
        return ur.save(Ouser);
    }

    public void deleteUser(int id)
    {
        ur.deleteById(id);
    }
}
