package entity;
import java.awt.image.BufferedImage;
public class Entity {
    protected int worldX;
    protected int worldY;
    protected int x;
    protected int y;
    protected int speed;
    protected BufferedImage up1;
    protected BufferedImage up2;
    protected BufferedImage down1;
    protected BufferedImage down2;
    protected BufferedImage left1;
    protected BufferedImage left2;
    protected BufferedImage right1;
    protected BufferedImage right2;
    protected String direction;
    protected int spriteCounter = 0;
    protected int spriteNum = 1;

    public int getWorldX(){
        return this.worldX;
    }
    public int getWorldY(){
        return this.worldY;
    }
}
