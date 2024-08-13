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

import com.backend.yoga.Model.User;
import com.backend.yoga.Service.UserService;

@RestController
public class UserController {

    @Autowired
    UserService us;
    User user;

    @GetMapping("/getuser")
    public List<User> getusers(){
        return us.getusers();
    }
    @GetMapping("getuser/{id}")
    public Optional<User> getbyusers(@PathVariable int id){
        return us.retuser(id);
    }

    @PostMapping("/postuser")
    public User store(@RequestBody User user)
    {
        return us.saveuser(user);
    }

    @PutMapping("/updateuser/{id}")
    public User updateuser(@RequestBody User user,@PathVariable int id)
    {
        return us.updateUser(id,user);
    }
    @PutMapping("/updateuserpass/{id}")
    public User updateuserpass(@RequestBody User user,@PathVariable int id)
    {
        return us.updateuserpass(user,id);
    }

    @DeleteMapping("/deleteuser/{id}")
    public void deleteuser(@PathVariable int id)
    {
        us.deleteUser(id);
    }
}
