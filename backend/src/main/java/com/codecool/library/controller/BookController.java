package com.codecool.library.controller;

import com.codecool.library.model.Book;
import com.codecool.library.model.Specimen;
import com.codecool.library.repository.BookRepository;
import com.codecool.library.repository.SpecimenRepository;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
public class BookController {

    private BookRepository bookRepo;
    private SpecimenRepository specimenRepo;

    public BookController(BookRepository bookRepo, SpecimenRepository specimenRepo) {
        this.bookRepo = bookRepo;
        this.specimenRepo = specimenRepo;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/library/book")
    public List<Book> getAllBook() {

        return bookRepo.findAllByOrderByTitle();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/library/book")
    public Book addNewBook(@RequestBody Book newBook) {

        bookRepo.save(newBook);

        Set<Specimen> specimenSet = newBook.getSpecimens();
        if(specimenSet == null){
            Specimen specimen =new Specimen("2019",30,newBook);
            specimenRepo.save(specimen);
        }else {
            for (Specimen spec : specimenSet) {
                System.out.println(spec.getBookingTime());
                spec.setBook(newBook);
                specimenRepo.save(spec);
            }
        }



        return newBook;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/library/book/{id}")
    public void deleteBook(@PathVariable Long id) {
        Book bookToDelete = bookRepo.findById(id).get();

        Set<Specimen> specimenSet = bookToDelete.getSpecimens();
        if(specimenSet !=null){
            for (Specimen spec : specimenSet) {
                Long idToDelete = spec.getId();
                specimenRepo.deleteById(idToDelete);
            }
        }

        bookRepo.deleteById(id);
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.PUT, value = "/library/book/{id}")
	public void updateBook(@RequestBody Book book, @PathVariable String id)
	{
		bookRepo.save(book);
	}


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(method = RequestMethod.GET, value="/library/book/{id}")
    public Book getBookById(@PathVariable("id") Long id) {
        return bookRepo.findById(id).get();
    }




}
