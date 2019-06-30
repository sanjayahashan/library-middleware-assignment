package com.codecool.library.controller;


import com.codecool.library.error.Error_reply;
import com.codecool.library.model.User;
import com.codecool.library.model.login;
import com.codecool.library.repository.UserRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    public UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository =userRepository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/users/login")
    public User login(@RequestBody login user){
        String userid =user.getUsername();
        String password =user.getPassword();
        List<User> users =userRepository.findAllByEmail(userid);
        for(User usr:users){
            if(usr.getPesel() == password){
                return usr;
            }
        }
        Error_reply error =new Error_reply("Could not Authenticate User");
        return  null;
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.POST, value ="/users/register")
    public User register(@RequestBody User register){
        userRepository.save(register);
        return register;
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value = "/users")
    public List<User> getAllUsers() {
    	return userRepository.findAll();
    }

}
