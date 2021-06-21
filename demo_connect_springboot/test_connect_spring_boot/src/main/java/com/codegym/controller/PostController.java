package com.codegym.controller;

import com.codegym.model.Item;
import com.codegym.service.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class PostController {

    @Autowired
    private IPostService postService;

    @GetMapping("/postList")
    public List<Item> listPosts() {
        return postService.getAllPost();
    }

    @PostMapping("/postList")
    public void addNewPosts(@RequestBody Item item) {
        postService.addNewPost(item);
    }

}
