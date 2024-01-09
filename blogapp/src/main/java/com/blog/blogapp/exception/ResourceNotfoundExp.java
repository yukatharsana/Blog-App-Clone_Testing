package com.blog.blogapp.exception;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class ResourceNotfoundExp extends RuntimeException {
    public ResourceNotfoundExp(String message) {
        super(message);
    }
}
