package entity;

import java.awt.Graphics2D;
import javax.imageio.ImageIO;
import main.GamePanel;
import main.KeyHandler;

import java.awt.image.BufferedImage;

public class Player extends Entity {
    protected GamePanel gp;
    protected KeyHandler keyH;
    protected final int screenX;
    protected final int screenY;

    public Player(GamePanel gp, KeyHandler keyH) {
        this.gp = gp;
        this.keyH = keyH;
        screenX = gp.getScreenWidth() / 2 - (gp.getTileSize() / 2);
        screenY = gp.getScreenHeight() / 2 - gp.getTileSize() / 2;
        setDefaultValue();
        getPlayerImage();
    }

    public void getPlayerImage() {
        try {
            up1 = ImageIO.read(getClass().getResourceAsStream("../sources/sprites/WalkingSprites/boy_up_1.png"));
            up2 = ImageIO.read(getClass().getResourceAsStream("../sources/sprites/WalkingSprites/boy_up_2.png"));
            down1 = ImageIO.read(getClass().getResourceAsStream("../sources/sprites/WalkingSprites/boy_down_1.png"));
            down2 = ImageIO.read(getClass().getResourceAsStream("../sources/sprites/WalkingSprites/boy_down_2.png"));
            left1 = ImageIO.read(getClass().getResourceAsStream("../sources/sprites/WalkingSprites/boy_left_1.png"));
            left2 = ImageIO.read(getClass().getResourceAsStream("../sources/sprites/WalkingSprites/boy_left_2.png"));
            right1 = ImageIO.read(getClass().getResourceAsStream("../sources/sprites/WalkingSprites/boy_right_1.png"));
            right2 = ImageIO.read(getClass().getResourceAsStream("../sources/sprites/WalkingSprites/boy_right_2.png"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void setDefaultValue() {
        worldX = gp.getTileSize() * 23;
        worldY = gp.getTileSize() * 21;
        speed = 4;
        direction = "down";
    }

    public void update() {
        if (keyH.upPressed || keyH.downPressed || keyH.leftPressed || keyH.rightPressed) {
            if (keyH.upPressed) {
                worldY -= speed; // x values incarses to the right, y incarses as the go down
                direction = "up";
            } else if (keyH.downPressed) {
                worldY += speed;
                direction = "down";
            } else if (keyH.leftPressed) {
                worldX -= speed;
                direction = "left";
            } else if (keyH.rightPressed) {
                worldX += speed;
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
            default:
                break;
        }
        g2.drawImage(image, this.screenX, this.screenY, gp.getTileSize(), gp.getTileSize(), null);
    }

    public int getScreenX(){
        return this.screenX;
    }
    public int getScreenY(){
        return this.screenY;
    }
}
