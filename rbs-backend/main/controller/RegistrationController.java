package com.springboot.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.main.pojos.Food;
import com.springboot.main.pojos.Registration;
import com.springboot.main.repository.FoodRepository;
import com.springboot.main.service.FoodService;
import com.springboot.main.service.RegistrationService;

@CrossOrigin(origins = "*")
@RestController
public class RegistrationController {

	//==================> FOR REGISTRATION /LOGIN/FORGOT PAGE <=============
	@Autowired
	private RegistrationService registrationService;
	

	//GET THE LIST OF FIELDS
	@GetMapping("/getregister")
	public List<Registration> getRegister()
	{
		return registrationService.getRegisterToService();
	}
	
	//STORE THE REGISTRATION DETAILS
	@PostMapping(value = "/sendregister")
	public void sendRegister(@RequestBody Registration register)
	{
		registrationService.sendRegisterToService(register);
	}
	
	//GET THE PASSWORD AGAINST USERNAME TO AUTHENTICATE USER USER
	@GetMapping("/fetchbyusername/{username}")
	public String getByUserName(@PathVariable String username)
	{
		return registrationService.getByUserNameService(username);
	}

	//RESET PASSWORD
	@PutMapping(value = "/forforgot/{username}")
	public void forForgot(@PathVariable String username,@RequestBody Registration register)
	{
		registrationService.forForgot(username,register);
	}
	
	//==================> FOR FOOD PAGE <=============
	@Autowired
	private FoodService foodService;
	
	
	//SEND FOOD 
	@PostMapping("/sendFood")
	public void sendFood(@RequestBody Food food) {
		foodService.sendFood(food);
	}
	
	//GET ALL FOOD
	@GetMapping("/getAllFood")
	public List<Food> getAllFood(){
		return foodService.getAllFood();
	}
	
	//GET FOOD BY ID
	@GetMapping("/getFood/{fid}")
	public Food getFood(@PathVariable Integer fid) {
		return foodService.getFood(fid);
	}
	
	//GET FOOD BY ARRAY FOR SELECTING ITEMS
	@GetMapping("/getFoodByArray/{fid}")
	public List<Food> getFoodByArray(@PathVariable List<Integer> fid) {
		return foodService.getFoodByArray(fid);
	}
	
	//UPDATE FOOD BY ID
	@PutMapping("/updateFood/{id}")
	public void updateFood(@PathVariable Integer id,@RequestBody Food food) {
		foodService.updateFood(id,food);
	}
	
	//DELETE FOOD
	@DeleteMapping("/deleteFood/{fid}")
	public void deleteFood(@PathVariable List<Integer> fid) {
		foodService.deleteFood(fid);
	}
	
	

}
