package EsCouse;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Platform p = new Platform("Udemy");
        p.addCourse("Data Science", 12.30);
        Course c2 = p.addCourse("Java", 15.30);
        p.addCourse("OS", 22.50);
        Course c1 = p.getCourseByIndex(0);
        c1.addLesson("Basic", 10);
        c1.addLesson("Advanced", 12);
        c1.addCategory(Category.Math);
        c1.addCategory(Category.Science);
        c1.setActive(true);
        c2.addLesson("Object Oriented", 8);
        c2.addLesson("Sample of Forza 5", 7);
        c2.addCategory(Category.Java);
        Course c3 = p.addCourse("Database Managment", 70.9);
        c3.addLesson("Basic", 10);
        c3.addLesson("Advanced", 30);
        c3.addCategory(Category.Database);
        c3.addCategory(Category.Logistyc);
        c3.setActive(true);
        Course c4 = p.addCourse("Database developement", 69.99);
        c4.addLesson("Basic", 30);
        c4.addLesson("Advanced", 50);
        c4.addCategory(Category.Informatics);
        c4.addCategory(Category.Database);
        ArrayList<Course> coursesFilteredByCategory = p.searchByCategory(Category.Science);
        ArrayList<Course> coursesFilteredByName = p.searchByName("dat");
        System.out.println(coursesFilteredByCategory);
        System.out.println(coursesFilteredByName);
    }
}
