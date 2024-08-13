package com.backend.yoga.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.yoga.Model.User;

public interface UserRepo extends JpaRepository<User,Integer> {

}
