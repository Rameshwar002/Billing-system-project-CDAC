package com.springboot.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.main.pojos.Registration;

public interface RegistrationRepository extends JpaRepository<Registration,Integer> {

	

	Registration getByuserName(String username);
}
