package com.blog.blogapp.controller;

import com.blog.blogapp.exception.ResourceNotfoundExp;
import com.blog.blogapp.model.Users;
import com.blog.blogapp.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepo userRepo;
    @GetMapping("/user")
    public List<Users> getall(){
        return  userRepo.findAll();
    }
    @PostMapping(value = "/user",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Users> newUser(@RequestPart("name") String name,
                         @RequestPart("email") String email,
                         @RequestPart("password") String password,
                         @RequestPart("profile") MultipartFile profile
                         ) throws IOException {
        Users user=new Users();
        user.setPassword(password);
        user.setEmail(email);
        user.setName(name);
        user.setProfile(profile.getBytes());
        return ResponseEntity.ok(userRepo.save(user));
    }
    @GetMapping("/user/{userid}")
    public ResponseEntity<Users> userById(@PathVariable  int userid){
        Users user=userRepo.findById(userid)
                .orElseThrow(()->new RuntimeException("User not exist with id"+userid));
        return ResponseEntity.ok(user);
    }
    @PutMapping(value = "/user",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Users> updateUser(@RequestPart("name") String name,
                                            @RequestPart("email") String email,
                                            @RequestPart("userid") String userid,
                                            @RequestPart("password") String password,
                                            @RequestPart("profile") MultipartFile profile) throws IOException {
        Users u=userRepo.findById(Integer.parseInt(userid))
                .orElseThrow(()->new ResourceNotfoundExp("User not exisy with id"+userid));
                u.setEmail(email);
        u.setName(name);
        u.setPassword(password);
        if(profile!=null)
            u.setProfile(profile.getBytes());
        userRepo.save(u);
        return ResponseEntity.ok(u);
    }
    @DeleteMapping("/user/{userid}")
    public int deleteUser(@PathVariable int userid){
        Users user=userRepo.findById(userid)
                .orElseThrow(()->new RuntimeException("User not exist with id"+userid));
        userRepo.deleteById(userid);
        return userid;
    }

}
