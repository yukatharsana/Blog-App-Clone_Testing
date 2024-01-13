package com.blog.blogapp.controller;

import com.blog.blogapp.exception.ResourceNotfoundExp;
import com.blog.blogapp.model.Post;
import com.blog.blogapp.model.Users;
import com.blog.blogapp.repo.PostRepo;
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
public class PostController {
    @Autowired
    private PostRepo postRepo;
    @GetMapping("/post")
    public List<Post> getall(){
        return postRepo.findAll();
    }
    @PostMapping(value = "/post",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Post addNew(@RequestPart("title") String title,
                       @RequestPart("description") String description,
                       @RequestPart("imgurl")MultipartFile image,
                       @RequestPart("userid") String userid,
                       @RequestPart("cat") String category,
    @RequestPart("hidden") String hidden
    ) throws IOException {
        Post post=new Post();
        post.setDescription(description);
        post.setUserid(Integer.parseInt(userid));
        post.setTitle(title);
        post.setPosturl(image.getBytes());
        post.setCategory(category);
        post.setHidden(Boolean.parseBoolean(hidden));
        System.out.println(post.getTitle());
        return postRepo.save(post);
    }
    @GetMapping("/post/{postid}")
    public ResponseEntity<Post> postById(@PathVariable  int postid) {
        Post post = postRepo.findById(postid)
                .orElseThrow(() -> new RuntimeException("Employee not exist with id" + postid));
        return ResponseEntity.ok(post);
    }
        @PutMapping("/post/{postid}")
        public  ResponseEntity<Post> changePost(@PathVariable("postid")  int postid,@RequestBody Post post ){
            Post postdata=postRepo.findById(postid)
                    .orElseThrow(()->new ResourceNotfoundExp("Employee not exist with id"+postid));
            return ResponseEntity.ok(postdata);
        }
        @DeleteMapping("/post/{postid}")
    public int deletePost(@PathVariable int postid){
        Post post=postRepo.findById(postid)
                .orElseThrow(()->new RuntimeException("Post not exist with id"+postid));
        postRepo.deleteById(postid);
        return postid;
    }
    }


