package com.springboot.main.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name = "food_details")
public class Food {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "food_id")
	private Integer foodId;
	
	@Column(name = "food_name")
	private String 	foodName;
	
	@Column(name="food_category")
	private String 	foodCategory;
	
	@Column(name = "food_prize")
	private Long foodPrize;

	public Food() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Food(Integer foodId, String foodName, String foodCategory, Long foodPrize) {
		super();
		this.foodId = foodId;
		this.foodName = foodName;
		this.foodCategory = foodCategory;
		this.foodPrize = foodPrize;
	}

	public Integer getFoodId() {
		return foodId;
	}

	public void setFoodId(Integer foodId) {
		this.foodId = foodId;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public String getFoodCategory() {
		return foodCategory;
	}

	public void setFoodCategory(String foodCategory) {
		this.foodCategory = foodCategory;
	}

	public Long getFoodPrize() {
		return foodPrize;
	}

	public void setFoodPrize(Long foodPrize) {
		this.foodPrize = foodPrize;
	}

	@Override
	public String toString() {
		return "Food [foodId=" + foodId + ", foodName=" + foodName + ", foodCategory=" + foodCategory + ", foodPrize="
				+ foodPrize + "]";
	}
	
	
	
	
}
