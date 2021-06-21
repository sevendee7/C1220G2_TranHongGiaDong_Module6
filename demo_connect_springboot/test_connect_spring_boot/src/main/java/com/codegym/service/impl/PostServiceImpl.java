package com.codegym.service.impl;

import com.codegym.model.Item;
import com.codegym.repository.IPostRepository;
import com.codegym.service.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements IPostService {

    @Autowired
    private IPostRepository postRepository;

    @Override
    public List<Item> getAllPost() {
        return postRepository.findAll();
    }

    @Override
    public void addNewPost(Item item) {
        postRepository.save(item);
    }
}
