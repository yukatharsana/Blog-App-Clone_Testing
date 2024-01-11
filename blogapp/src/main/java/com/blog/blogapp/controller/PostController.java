package com.blog.blogapp.controller;

import com.blog.blogapp.exception.ResourceNotfoundExp;
import com.blog.blogapp.model.Post;
import com.blog.blogapp.model.Users;
import com.blog.blogapp.repo.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/post")
public class PostController {
    @Autowired
    private PostRepo postRepo;
    public List<Post> getall(){
        return postRepo.findAll();
    }
    @PostMapping
    public Post addNew(@RequestBody Post post){
        return postRepo.save(post);
    }
    @GetMapping("{postid}")
    public ResponseEntity<Post> postById(@PathVariable  int postid) {
        Post post = postRepo.findById(postid)
                .orElseThrow(() -> new RuntimeException("Employee not exist with id" + postid));
        return ResponseEntity.ok(post);
    }
        @PutMapping("{postid}")
        public  ResponseEntity<Post> changePost(@PathVariable("postid")  int postid,@RequestBody Post post ){
            Post postdata=postRepo.findById(postid)
                    .orElseThrow(()->new ResourceNotfoundExp("Employee not exist with id"+postid));
            return ResponseEntity.ok(postdata);
        }
    }


