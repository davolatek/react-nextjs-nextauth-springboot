package com.knowledgetekhub.usersystem.service;

import com.knowledgetekhub.usersystem.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    List<User> getAllUsers();

    User getUserById(long id);

    boolean deleteUser(Long id);

    User updateUser(long id, User user);
}
