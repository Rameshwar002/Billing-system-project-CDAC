package com.springboot.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.main.pojos.Registration;
import com.springboot.main.repository.RegistrationRepository;

@Service
public class RegistrationService {

	
	@Autowired
	private RegistrationRepository registrationRepository;
	
	//GET ALL FIELDS
	public List<Registration> getRegisterToService()
	{
		return registrationRepository.findAll();
	}
	
	//STORE THE REGISTRATION DETAILS
	public void sendRegisterToService(Registration register)
	{
		registrationRepository.save(register);
	}

	//GET THE PASSWORD AGAINST USERNAME TO AUTHENTICATE USER USER
	public String getByUserNameService(String username) {
		Registration byuserName = registrationRepository.getByuserName(username);
		String passWord = byuserName.getPassWord();
		return passWord;
	}

	//RESET PASSWORD
	public void forForgot(String username, Registration register) {
		// TODO Auto-generated method stub
		Registration byuserName = registrationRepository.getByuserName(username);
		byuserName.setPassWord(register.getPassWord());
		registrationRepository.save(byuserName);
	}

	

	

	

	

	

	

	

	

}
