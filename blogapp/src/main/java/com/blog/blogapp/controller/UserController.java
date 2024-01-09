package com.blog.blogapp.controller;

import com.blog.blogapp.model.Users;
import com.blog.blogapp.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private UserRepo userRepo;
    @GetMapping
    public List<Users> getall(){
        return  userRepo.findAll();
    }
    @PostMapping
    public Users newUser(Users user){
return userRepo.save(user);
    }
    @GetMapping("{usrId}")
    public ResponseEntity<Users> userById(@PathVariable  int userid){
        Users user=userRepo.findById(userid)
                .orElseThrow(()->new RuntimeException("Employee not exist with id"+userid));
        return ResponseEntity.ok(user);
    }

}
