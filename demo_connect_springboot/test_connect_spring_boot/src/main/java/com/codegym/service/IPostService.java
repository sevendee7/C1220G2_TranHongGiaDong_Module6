package com.codegym.service;

import com.codegym.model.Item;

import java.util.List;

public interface IPostService {

    List<Item> getAllPost();

    void addNewPost(Item item);
}
