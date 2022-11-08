package tile;
import javax.imageio.ImageIO;
import java.awt.Graphics2D;
import main.GamePanel;

public class TileManager {
    GamePanel gp;
    Tile[] tile;

    public TileManager(GamePanel gp) {
        this.gp = gp;
        tile = new Tile[10];

        getTileImage();
    }

    public void getTileImage() {
        try {
            tile[0] = new Tile();
            tile[0].image = ImageIO.read(getClass().getResourceAsStream("../sources/tiles/grass.png"));
            tile[1] = new Tile();
            tile[1].image = ImageIO.read(getClass().getResourceAsStream("../sources/tiles/wall.png"));
            tile[2] = new Tile();
            tile[2].image = ImageIO.read(getClass().getResourceAsStream("../sources/tiles/water.png"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public void draw(Graphics2D g2){
        g2.drawImage(tile[0].image, 0, 0, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 0, 48, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 0, 96, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 0, 144, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[0].image, 48, 0, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 96, 0, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 144, 0, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[0].image, 48, 48, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 96, 48, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 144, 48, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[0].image, 48, 96, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 96, 96, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 144, 96, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[0].image, 48, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 96, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 144, 144, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[0].image, 0, 240, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 0, 288, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 0, 336, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 0, 384, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[0].image, 48, 240, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 48, 288, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 48, 336, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 48, 384, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[0].image, 96, 240, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 96, 288, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 96, 336, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 96, 384, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[0].image, 144, 240, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 144, 288, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 144, 336, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 144, 384, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[1].image, 192, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 192, 192, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 192, 240, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[1].image, 240, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 240, 192, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 240, 240, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[1].image, 288, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 288, 192, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 288, 240, gp.getTileSize(), gp.getTileSize(), null);
        
        g2.drawImage(tile[1].image, 336, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 336, 192, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 336, 240, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[1].image, 384, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 384, 192, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 384, 240, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[1].image, 432, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 432, 192, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 432, 240, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[1].image, 480, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 480, 192, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 480, 240, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[1].image, 528, 96, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 528, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 528, 192, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 528, 240, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 528, 288, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[1].image, 576, 96, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 576, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 576, 192, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 576, 240, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 576, 288, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[1].image, 624, 96, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 624, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 624, 192, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 624, 240, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 624, 288, gp.getTileSize(), gp.getTileSize(), null);

        g2.drawImage(tile[1].image, 672, 144, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[0].image, 672, 192, gp.getTileSize(), gp.getTileSize(), null);
        g2.drawImage(tile[1].image, 672, 240, gp.getTileSize(), gp.getTileSize(), null);

        //g2.drawImage(tile[1].image, 48, 0, gp.getTileSize(), gp.getTileSize(), null);
        //g2.drawImage(tile[2].image, 96, 0, gp.getTileSize(), gp.getTileSize(), null);
    }
}
