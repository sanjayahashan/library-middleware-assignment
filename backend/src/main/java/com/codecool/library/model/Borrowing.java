package com.codecool.library.model;

import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Date;

@Entity
@Component
@Table(name = "BORROWING")
public class Borrowing {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @Column (name = "specimen_id")
    private Long specimen;


    @Column (name = "user_id")
    private Long user;

    @Column(name ="return_date")
    private String returnDate;

    @Column(name = "expire_date")
    private String expire;

    public Borrowing(){}

    public Borrowing(Long specimen, Long user, String expire) {
        this.specimen = specimen;
        this.user = user;
        this.returnDate = null;
        this.expire = expire;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSpecimen() {
        return specimen;
    }

    public void setSpecimen(Long specimen) {
        this.specimen = specimen;
    }

    public Long getUser() {
        return user;
    }

    public void setUser(Long user) {
        this.user = user;
    }

    public String getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(String returnDate) {
        this.returnDate = returnDate;
    }

    public String getExpire() {
        return expire;
    }

    public void setExpire(String expire) {
        this.expire = expire;
    }
}
