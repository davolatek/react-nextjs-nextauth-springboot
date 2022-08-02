package com.knowledgetekhub.usersystem.service;

import com.knowledgetekhub.usersystem.entity.UserEntity;
import com.knowledgetekhub.usersystem.model.User;
import com.knowledgetekhub.usersystem.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImplementation implements UserService{

    private UserRepository userRepository;

    public UserServiceImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User saveUser(User user) {

        UserEntity userEntity = new UserEntity();

        BeanUtils.copyProperties(user, userEntity);
        userRepository.save(userEntity);

        return user;
    }
}
