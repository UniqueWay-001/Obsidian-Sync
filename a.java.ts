class Book {
    String title;
    String author;
    double price;
    double discount_percentage;
    
    Book(String title, String author, double price, double discount_percentage) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.discount_percentage = discount_percentage;
    }
    
    void apply_Discount() {
        if (discount_percentage < 50 || discount_percentage > 0) {
            discount_percentage = price*0.20;
            price = price - discount_percentage;
        }
    }
        void display_Details() {
        System.out.println("Title: " + title + ", Author: " + author + ", Price: " + price + ".");
    }
}

public class Main {
    public static void main(String[] args) {
        Book obj = new Book("The Hobbit", "J.R.R. Tolkien", 40.00, 20.00);
        obj.apply_Discount();
        obj.display_Details();
    }
}