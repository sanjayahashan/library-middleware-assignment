package com.codecool.library.model;

public class login {

    String Username;
    String Password;
    public  login(){

    }
    public login(String username, String password) {
        Username = username;
        Password = password;
    }


    public String getUsername() {
        return Username;
    }

    public void setUsername(String username) {
        Username = username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }
}
