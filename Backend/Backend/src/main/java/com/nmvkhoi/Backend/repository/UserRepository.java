package com.nmvkhoi.Backend.repository;

import com.nmvkhoi.Backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
