package com.codecool.library.controller;


import com.codecool.library.error.Error_reply;
import com.codecool.library.model.Borrowing;
//import com.codecool.library.model.User;
import com.codecool.library.repository.BorrowingRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = {"http://localhost:4200"}, maxAge = 4800, allowCredentials = "true")
@RestController
public class BorrowingController {

    private BorrowingRepository borrowingRepository;

    public BorrowingController(BorrowingRepository borrowingRepository) {
        this.borrowingRepository = borrowingRepository;
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET,value = "/library/borrowings/{id}")
    public Borrowing getBorrowingById(@PathVariable("id") Long id) {
        return borrowingRepository.findById(id).get();
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET,value = "/library/borrowings/")
    public List<Borrowing> getAllBorrowingById() {
        return (List<Borrowing>) borrowingRepository.findAll();
    }


    @CrossOrigin
    @DeleteMapping("/library/Borrowings/{id}")
    public void deleteBook(@PathVariable Long id){
        borrowingRepository.deleteById(id);
    }


    @CrossOrigin
    @PostMapping("/library/Borrowings")
    public Error_reply addBorrowing(@RequestBody Borrowing borrowing){
        borrowingRepository.save(borrowing);
        return new Error_reply("added");
//        Long user =borrowing.getUser();
//        List<Borrowing> borrowings =borrowingRepository.findBorrowingById(user);
//        int size =borrowings.size();
//        if (size <3){
//
//
//        }else{
//            return new Error_reply("limit_exceeded");
//        }
//        return new Error_reply("limit_exceeded");
    }
}
