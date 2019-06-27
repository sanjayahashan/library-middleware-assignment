package com.codecool.library.error;

public class Error_reply {
    private String Message;

    public Error_reply(String message) {
        Message = message;
    }

    public String getMessage() {

        return Message;
    }

    public void setMessage(String message) {
        Message = message;
    }
}
