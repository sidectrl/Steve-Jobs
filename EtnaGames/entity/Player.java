package entity;

import java.awt.Graphics2D;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import FirstGUI.GamePanel;
import FirstGUI.KeyHandler;

public class Player extends Entity {
    GamePanel gp;
    KeyHandler keyH;

    public Player(GamePanel gp, KeyHandler keyH) {
        this.gp = gp;
        this.keyH = keyH;
        setDefaultValue();
        getPlayerImage();
    }

    public void getPlayerImage() {
        try {
            up1 = ImageIO.read(getClass().getResourceAsStream("sprites/WalkingSprites/boy_up_1.png"));
            up2 = ImageIO.read(getClass().getResourceAsStream("sprites/WalkingSprites/boy_up_2.png"));
            down1 = ImageIO.read(getClass().getResourceAsStream("sprites/WalkingSprites/boy_down_1.png"));
            down2 = ImageIO.read(getClass().getResourceAsStream("sprites/WalkingSprites/boy_down_2.png"));
            left1 = ImageIO.read(getClass().getResourceAsStream("sprites/WalkingSprites/boy_left_1.png"));
            left2 = ImageIO.read(getClass().getResourceAsStream("sprites/WalkingSprites/boy_left_2.png"));
            right1 = ImageIO.read(getClass().getResourceAsStream("sprites/WalkingSprites/boy_right_1.png"));
            right2 = ImageIO.read(getClass().getResourceAsStream("sprites/WalkingSprites/boy_right_2.png"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void setDefaultValue() {
        x = 100;
        y = 100;
        speed = 4;
        direction = "down";
    }

    public void update() {
        if (keyH.upPressed || keyH.downPressed || keyH.leftPressed || keyH.rightPressed) {
            if (keyH.upPressed == true) {
                y -= speed; // x values incarses to the right, y incarses as the go down
                direction = "up";
            } else if (keyH.downPressed == true) {
                y += speed;
                direction = "down";
            } else if (keyH.leftPressed == true) {
                x -= speed;
                direction = "left";
            } else if (keyH.rightPressed == true) {
                x += speed;
                direction = "right";
            }

            spriteCounter++;
            if (spriteCounter > 12) {
                if (spriteNum == 1) {
                    spriteNum = 2;
                } else if (spriteNum == 2) {
                    spriteNum = 1;
                }
                spriteCounter = 0;
            }
        }
    }

    public void draw(Graphics2D g2) {
        /*
         * g2.setColor(Color.white);
         * g2.fillRect(x, y, gp.getTileSize(), gp.getTileSize()); // Draw a rectangle
         * and fills it with the speficied color
         */
        BufferedImage image = null;
        switch (direction) {
            case "up":
                if (spriteNum == 1) {
                    image = up1;
                }
                if (spriteNum == 2) {
                    image = up2;
                }
                break;
            case "down":
                if (spriteNum == 1) {
                    image = down1;
                }
                if (spriteNum == 2) {
                    image = down2;
                }
                break;
            case "left":
                if (spriteNum == 1) {
                    image = left1;
                }
                if (spriteNum == 2) {
                    image = left2;
                }
                break;
            case "right":
                if (spriteNum == 1) {
                    image = right1;
                }
                if (spriteNum == 2) {
                    image = right2;
                }
                break;
        }
        g2.drawImage(image, x, y, gp.getTileSize(), gp.getTileSize(), null);
    }
}
