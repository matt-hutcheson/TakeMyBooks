package com.codeclan.example.server.components;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;

import com.codeclan.example.server.models.Book;
import com.codeclan.example.server.models.User;
import com.google.gson.Gson;

public class BookWebFetch {
    public class Store
    {
        public String store_name;
        public String store_price;
        public String product_url;
        public String currency_code;
        public String currency_symbol;
    }

    public class Review
    {
        public String name;
        public String rating;
        public String title;
        public String review;
        public String datetime;
    }

    public class Product
    {
        public String barcode_number;
        public String barcode_type;
        public String barcode_formats;
        public String mpn;
        public String model;
        public String asin;
        public String product_name;
        public String title;
        public String category;
        public String manufacturer;
        public String brand;
        public String label;
        public String author;
        public String publisher;
        public String artist;
        public String actor;
        public String director;
        public String studio;
        public String genre;
        public String audience_rating;
        public String ingredients;
        public String nutrition_facts;
        public String color;
        public String format;
        public String package_quantity;
        public String size;
        public String length;
        public String width;
        public String height;
        public String weight;
        public String release_date;
        public String description;
        public Object[] features;
        public String[] images;
        public Store[] stores;
        public Review[] reviews;
    }

    public class RootObject
    {
        public Product[] products;
    }

    public Book fetchWithBarcode(String isbn, User currentUser) {
        Book book = new Book();
        try {
            APIkey key = new APIkey();
            URL url = new URL("https://api.barcodelookup.com/v2/products?barcode=" + isbn + "&formatted=y&key=" + key.getKey());
            BufferedReader br = new BufferedReader(new InputStreamReader(url.openStream()));
            String str = "";
            String data = "";
            while (null != (str= br.readLine())) {
                data+=str;
            }

            Gson g = new Gson();

            RootObject value = g.fromJson(data, RootObject.class);

            return new Book(value.products[0].title, value.products[0].author, value.products[0].genre, value.products[0].barcode_number, currentUser, value.products[0].images[0]);

        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return book;
    }
}
