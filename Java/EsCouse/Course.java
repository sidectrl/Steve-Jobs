package EsCouse;

import java.util.ArrayList;

public class Course {
    // #region Attributes
    private String name = "";
    private double price = 0;
    private ArrayList<Category> categories = new ArrayList<Category>();
    private ArrayList<Lesson> lessons = new ArrayList<Lesson>();
    private Boolean active = false;
    // #endregion

    // #region Costructor
    public Course(String name, double price) {
        this.name = name;
        this.price = price;
    }
    // #endregion

    // #region Get and set Methods
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPriece() {
        return price;
    }

    public void setPriece(double priece) {
        this.price = priece;
    }

    public ArrayList<Category> getCategories() {
        return categories;
    }

    public void setCategories(ArrayList<Category> categories) {
        this.categories = categories;
    }

    public ArrayList<Lesson> getLessons() {
        return lessons;
    }

    public void setLessons(ArrayList<Lesson> lessons) {
        this.lessons = lessons;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
    // #endregion

    // #region Methods
    public Lesson addLesson(String title, double duration) {
        Lesson lesson = new Lesson(title, duration);
        lessons.add(lesson);
        return lesson;
    }

    public void addCategory(Category category) {
        this.categories.add(category);
    }

    public String toString() {
        String response = "\n\r" + name + " State: ";
        if (this.active)
            response += "Active";
            else response += "Not Active";
        response += "\n\r" + "Price: $" + price;
        response += "\n\rCategories: ";
        for (Category iesimCategory : this.categories) {
            response += iesimCategory.name() + " ";
        }
        response += "\n\rLessons: ";
        for (Lesson iesimLesson : this.lessons) {
            response += iesimLesson.toString() + " ";
        }
        return response;
    }
    // #endregion
}