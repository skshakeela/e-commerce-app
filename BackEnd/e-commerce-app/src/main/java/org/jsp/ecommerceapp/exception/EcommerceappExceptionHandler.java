package org.jsp.ecommerceapp.exception;

import org.jsp.ecommerceapp.dto.ResponseStructure;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class EcommerceappExceptionHandler extends ResponseEntityExceptionHandler{
    @ExceptionHandler(InvalidCredentialsException.class)
	public ResponseEntity<ResponseStructure<String>> handlerICE(InvalidCredentialsException exception){
	ResponseStructure<String> structure=new ResponseStructure<>();
	structure.setBody("cannot find Merchant");
	structure.setMessage(exception.getMessage());
	structure.setStatusCode(HttpStatus.NOT_FOUND.value());
	return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
	}
    
    @ExceptionHandler(IdNotFoundException.class)
   	public ResponseEntity<ResponseStructure<String>> handlerINFE(IdNotFoundException exception){
   	ResponseStructure<String> structure=new ResponseStructure<>();
   	structure.setBody("cannot find Merchant");
   	structure.setMessage(exception.getMessage());
   	structure.setStatusCode(HttpStatus.NOT_FOUND.value());
   	return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
   	}
    

    @ExceptionHandler(MerchantNotFoundException.class)
   	public ResponseEntity<ResponseStructure<String>> handlerMNFE(MerchantNotFoundException exception){
   	ResponseStructure<String> structure=new ResponseStructure<>();
   	structure.setBody(" Merchant not found");
   	structure.setMessage(exception.getMessage());
   	structure.setStatusCode(HttpStatus.NOT_FOUND.value());
   	return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
   	}
    

    @ExceptionHandler(UserNotFoundException.class)
   	public ResponseEntity<ResponseStructure<String>> handlerUNFE(UserNotFoundException exception){
   	ResponseStructure<String> structure=new ResponseStructure<>();
   	structure.setBody(" User not found");
   	structure.setMessage(exception.getMessage());
   	structure.setStatusCode(HttpStatus.NOT_FOUND.value());
   	return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
   	}
    
    @ExceptionHandler(AddressNotFoundException.class)
   	public ResponseEntity<ResponseStructure<String>> handlerANFE(AddressNotFoundException exception){
   	ResponseStructure<String> structure=new ResponseStructure<>();
   	structure.setBody(" Address not found");
   	structure.setMessage(exception.getMessage());
   	structure.setStatusCode(HttpStatus.NOT_FOUND.value());
   	return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
   	}
    
    @ExceptionHandler(IllegalStateException.class)
   	public ResponseEntity<ResponseStructure<String>> handlerISE(IllegalStateException exception){
   	ResponseStructure<String> structure=new ResponseStructure<>();
   	structure.setBody(" Activate your account to sign in");
   	structure.setMessage(exception.getMessage());
   	structure.setStatusCode(HttpStatus.NOT_FOUND.value());
   	return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
   	}

}
