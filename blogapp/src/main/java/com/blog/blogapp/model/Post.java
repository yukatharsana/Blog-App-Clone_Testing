package com.blog.blogapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

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

    @Column(name="description",length = 15000)
private String description;
    @Column(name="userid",nullable = false)
    private int userid;
    @Lob
    @Column(name="imgURL",columnDefinition = "LONGBLOB")
    private byte[] posturl;

   @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at",updatable = false)
    private Date createdAt;

}
