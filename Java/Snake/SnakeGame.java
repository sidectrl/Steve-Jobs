package Snake;
import java.util.ArrayList;
import java.util.Random;

enum Direction {
    UP, DOWN, LEFT, RIGHT
}

public class SnakeGame {
    private int width;
    private int height;
    private boolean inProgress = true;
    private Direction forbittenDirection = Direction.RIGHT;
    Coordinate food;
    ArrayList<Coordinate> snake = new ArrayList<>();

    SnakeGame(int width, int height) {
        this.width = width;
        this.height = height;
        Coordinate c1 = new Coordinate(3, 3);
        Coordinate c2 = new Coordinate(4, 3);
        Coordinate c3 = new Coordinate(5, 3);
        Coordinate c4 = new Coordinate(6, 3);
        this.snake.add(c1);
        this.snake.add(c2);
        this.snake.add(c3);
        this.snake.add(c4);
        this.food = generateRandomCoordinate();
    }

    public Coordinate getNewCoordinate(Coordinate head, Direction d) {
        int x = 0;
        int y = 0;

        switch (d) {
            case LEFT:
                x = head.getX() - 1;
                y = head.getY();
                this.forbittenDirection = Direction.RIGHT;
                return new Coordinate(x, y);
            case RIGHT:
                x = head.getX() + 1;
                y = head.getY();
                this.forbittenDirection = Direction.LEFT;
                return new Coordinate(x, y);
            case UP:
                x = head.getX();
                y = head.getY() - 1;
                this.forbittenDirection = Direction.DOWN;
                return new Coordinate(x, y);
            case DOWN:
                x = head.getX();
                y = head.getY() + 1;
                this.forbittenDirection = Direction.UP;
                return new Coordinate(x, y);
        }
        return null;
    }

    public boolean checkIsValid(Coordinate newCoordinateToCheck) {
        if (newCoordinateToCheck.getX() < 0 ||
                newCoordinateToCheck.getY() < 0 ||
                newCoordinateToCheck.getX() < height ||
                newCoordinateToCheck.getY() < width ) {
            return false;
        }
        for (Coordinate c : this.snake) {
            if (c.getX() == newCoordinateToCheck.getX() && c.getY() == newCoordinateToCheck.getY()) {
                return false;
            }
        }
        return true;
    }

    public void move(Direction d) {
        // Add in head
        if (!this.inProgress || d == forbittenDirection) {
            return;
        }
        Coordinate c = getNewCoordinate(this.snake.get(0), d);
        this.snake.add(0, c);

        if (c.getX() == food.getX() && c.getY() == food.getY()) {
            this.food = generateRandomCoordinate(); // quando mangio
        } else if (!this.snake.isEmpty()) {
            this.snake.remove(this.snake.size() - 1); // quando non mangio
        }
    }

    public Coordinate generateRandomCoordinate() {
        Random rand = new Random();
        int randomX = rand.nextInt(height - 1);
        int randomY = rand.nextInt(width - 1);
        for (Coordinate c : this.snake)
            if (c.getX() == randomX && c.getY() == randomY) {
                return generateRandomCoordinate();
            }
        return new Coordinate(randomX, randomY);
    }

    public boolean containInThisCoordinate(int x, int y) {
        for (Coordinate c : this.snake) {
            if (c.getX() == x && c.getY() == y) {
                return true;
            }
        }
        return false;
    }

    public String toString() {
        String response = "";
        for (int i = 0; i < width; i++) {
            for (int j = 0; j < height; j++) {
                if (food.getX() == i && food.getY() == j) {
                    response += "|*";
                } else if (containInThisCoordinate(j, i)) {
                    response += "|0";
                } else {
                    response += "| ";
                }
            }
            response += "\n";
        }
        response += this.inProgress ? "\nIn corso" : "\nTerminata";
        return response;
    }
}