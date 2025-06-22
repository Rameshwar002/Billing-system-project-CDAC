package com.springboot.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.main.pojos.Food;

public interface FoodRepository extends JpaRepository<Food,Integer>{

}
