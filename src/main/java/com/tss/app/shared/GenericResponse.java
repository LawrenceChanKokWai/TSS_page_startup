package com.tss.app.shared;

public class GenericResponse {

    private String message;

    public GenericResponse(String message) {
        this.message = message;
    }

    public GenericResponse() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
