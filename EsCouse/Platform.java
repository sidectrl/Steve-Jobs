package EsCouse;

import java.util.ArrayList;
import java.util.List;

enum Category {
    Math, Informatics, English, Science, Italian, Java, Logistyc, Database
}

public class Platform {
    // #region Attributes
    private String name = "";
    private List<Course> courses = new ArrayList<Course>();

    // #endregion

    // #region Costructor
    public Platform(String name) {
        this.name = name;
    }
    // #endregion

    // #region Get and Set Methods
    public void setCourses(List<Course> courses) {
        this.courses = courses;
    }

    public List<Course> getCourses() {
        return courses;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // #endregion

    // #region Methods
    public void addCourse(Course course) {
        this.courses.add(course);
    }

    public Course addCourse(String name, double price) {
        Course dummy = new Course(name, price);
        this.courses.add(dummy);
        return dummy;
    }

    public Course getCourseByIndex(int index) {
        if (index < this.courses.size() && index >= 0) {
            Course course = this.courses.get(index);
            return course;
        }
        return null;
    }

    public ArrayList<Course> searchByCategory(Category category) {
        ArrayList<Course> resultCourses = new ArrayList<Course>();
        ArrayList<Category> categories = new ArrayList<Category>();
        for (Course iesimCourse : this.courses) {
            categories = iesimCourse.getCategories();
            for (Category iesimCategory : categories) {
                if (iesimCategory.equals(category))
                    resultCourses.add(iesimCourse);
            }
        }
        return resultCourses;
    }

    public ArrayList<Course> searchByName(String filter) {
        ArrayList<Course> resultCourses = new ArrayList<Course>();
        for (Course iesimCourse : this.courses) {
            if (iesimCourse.getName().toLowerCase().contains(filter.toLowerCase())) {
                resultCourses.add(iesimCourse);
            }
        }
        return resultCourses;
    }
    // #endregion
}
