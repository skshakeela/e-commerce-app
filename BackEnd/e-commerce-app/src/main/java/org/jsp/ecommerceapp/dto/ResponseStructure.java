package org.jsp.ecommerceapp.dto;

import org.jsp.ecommerceapp.model.Address;

public class ResponseStructure<T> {
private String message;
private T body;
private int statusCode;
private Address body1;

public String getMessage() {
	return message;
}
public void setMessage(String message) {
	this.message = message;
}
public T getBody() {
	return body;
}
public void setBody(T body) {
	this.body = body;
}
public int getStatusCode() {
	return statusCode;
}
public void setStatusCode(int statusCode) {
	this.statusCode = statusCode;
}
public Address getBody1() {
	return body1;
}
public void setBody1(Address body1) {
	this.body1 = body1;
}




}
