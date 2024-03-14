package org.jsp.ecommerceapp.repository;

import java.util.List;

import org.jsp.ecommerceapp.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	public List<Product> findByBrand(String brand);

	public List<Product> findByCategory(String category);
	
	public List<Product>findByName(String name);


	@Query("select p from Product p where p.merchant.id=?1")
	List<Product> findByMerchantId(int merchant_id);
}
