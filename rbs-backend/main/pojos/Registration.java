package com.springboot.main.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Registration_Details")
public class Registration {

	
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="resistration_id")
	private Integer registrationId=1;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="email_id")
	private String emailId;
	
	@Id
	@Column(name="user_name")
	private String userName;
	
	@Column(name="pass_word")
	private String passWord;

	public Registration() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Registration(Integer registrationId, String firstName, String lastName, String emailId, String userName,
			String passWord) {
		super();
		this.registrationId = registrationId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
		this.userName = userName;
		this.passWord = passWord;
	}

	public Integer getRegistrationId() {
		return registrationId;
	}

	public void setRegistrationId(Integer registrationId) {
		this.registrationId = registrationId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

	@Override
	public String toString() {
		return "Registration [registrationId=" + registrationId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", emailId=" + emailId + ", userName=" + userName + ", passWord=" + passWord + "]";
	}

	
	
	
	
	
}
