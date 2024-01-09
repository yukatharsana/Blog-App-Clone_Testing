package com.blog.blogapp.repo;

import com.blog.blogapp.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<Users,Integer> {
}
