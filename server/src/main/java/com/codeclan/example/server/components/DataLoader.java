package com.codeclan.example.server.components;

import com.codeclan.example.server.models.Book;
import com.codeclan.example.server.models.Request;
import com.codeclan.example.server.models.User;
import com.codeclan.example.server.repositories.BookRepository;
import com.codeclan.example.server.repositories.RequestRepository;
import com.codeclan.example.server.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RequestRepository requestRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args){
        User bob = new User("BobTheReader", "bobthereader@waterstones.com", "Edinburgh");

        userRepository.save(bob);

        User robert = new User("RobertBruce", "bobthebruce@waterstones.com", "Glasgow");
        userRepository.save(robert);

        User kanye = new User("KanyeNot", "knw@fishsticks.com", "Hull");
        userRepository.save(kanye);

        User jkr = new User("JKRofling", "hp4l@hogwarts.co.uk", "London");
        userRepository.save(jkr);

        Book bookCOT = new Book("Children Of Time", "Tchaikovsky, Adrian", "Sci-Fi", "9781447273288", bob, "https://images.barcodelookup.com/3143/31435732-1.jpg");
        bookRepository.save(bookCOT);

        Book bookReacher1 = new Book("Never Go Back: (Jack Reacher 18)", "Child, Lee", "Thriller", "9780553825541", bob, "https://images.barcodelookup.com/2504/25047627-1.jpg");
        bookRepository.save(bookReacher1);

        Book bookNorse = new Book("Norse Mythology by Neil Gaiman (Paperback, 2018)", "Gaiman, Neil ", "History", "9781408891957", robert, "https://images.barcodelookup.com/8818/88184054-1.jpg");
        bookRepository.save(bookNorse);

        Book bookHomo = new Book("Homo Deus: a Brief History of Tomorrow", "Harari, Yuval Noah", "Non-Fiction", "9781784703936", jkr, "https://images.barcodelookup.com/1664/16647771-1.jpg");
        bookRepository.save(bookHomo);

        Book bookSapiens = new Book("Sapiens: a Brief History of Humankind", "Yuval Noah Harari", "Non-Fiction", "9780062316110", kanye, "https://images.barcodelookup.com/145/1452652-1.jpg");
        bookRepository.save(bookSapiens);

        Book bookMC = new Book("Minecraft: The Official Beginner's Handbook", "Stephanie Milton", "Reference", "9781405268394", kanye, "https://images.barcodelookup.com/965/9652934-1.jpg");
        bookRepository.save(bookMC);

        Book bookTA1 = new Book("Those Above: the Empty Throne Book 1", "Polansky, Daniel", "Fantasy", "9781444779912", jkr, "https://images.barcodelookup.com/2474/24749190-1.jpg");
        bookRepository.save(bookTA1);

        Book bookTA2 = new Book("Those Below: the Empty Throne Book 2", "Polansky, Daniel", "Fantasy", "9781444779967", robert, "https://images.barcodelookup.com/6756/67569967-1.jpg");
        bookRepository.save(bookTA2);

        Book bookReacher2 = new Book("A Wanted Man (with Bonus Short Story Not a Drill): a Jack Reacher Novel", "Child, Lee", "Thriller", "9780440246312", kanye, "https://images.barcodelookup.com/114/1148884-1.jpg");
        bookRepository.save(bookReacher2);

        bob.addBookToSharedBooks(bookCOT);
        bob.addBookToSharedBooks(bookReacher1);
        robert.addBookToSharedBooks(bookNorse);
        jkr.addBookToSharedBooks(bookHomo);
        kanye.addBookToSharedBooks(bookSapiens);
        kanye.addBookToSharedBooks(bookMC);
        jkr.addBookToSharedBooks(bookTA1);
        robert.addBookToSharedBooks(bookTA2);
        kanye.addBookToSharedBooks(bookReacher2);
        userRepository.save(bob);
        userRepository.save(robert);
        userRepository.save(jkr);
        userRepository.save(kanye);

        Request request = new Request("Completed", kanye, bob, bookReacher2);
        requestRepository.save(request);

        Request request2 = new Request("Rejected", jkr, kanye, bookHomo);
        requestRepository.save(request2);

        Request request3 = new Request("Pending", robert, jkr, bookTA2);
        requestRepository.save(request3);

        Request request4 = new Request("Approved", bob, kanye, bookReacher1);
        requestRepository.save(request4);
    }
}
