package com.blog.blogapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
private int postid;
    @Column(name="title",nullable = false)
private String title;
    @Column(name="description")
private String description;
    @Column(name="userid",nullable = false)
    private int userid;
}
