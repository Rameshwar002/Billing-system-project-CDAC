package com.springboot.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.main.pojos.Food;
import com.springboot.main.repository.FoodRepository;
@Service
public class FoodService {

	@Autowired
	private FoodRepository foodRepository;

	public void sendFood(Food food) {
		foodRepository.save(food);
		
	}
	
	public List<Food> getAllFood() {
		
		return foodRepository.findAll();
	}

	@SuppressWarnings("deprecation")
	public Food getFood(Integer fid) {
		
		return foodRepository.getById(fid);
	}

	@SuppressWarnings("deprecation")
	public void updateFood(Integer id, Food food) {
		Food byId = foodRepository.getById(id);
		foodRepository.save(food);
	}

	public void deleteFood(List<Integer> fid) {
		foodRepository.deleteAllById(fid);
		
	}

	public List<Food> getFoodByArray(List<Integer> fid) {
		
		return foodRepository.findAllById(fid);
	}

	

	
	
	
}
