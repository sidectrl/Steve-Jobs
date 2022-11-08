package tile;

import javax.imageio.ImageIO;
import java.awt.Graphics2D;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

import main.GamePanel;

public class TileManager {
    GamePanel gp;
    Tile[] tile;
    int[][] mapTileNum;

    public TileManager(GamePanel gp) {
        this.gp = gp;
        tile = new Tile[10];
        mapTileNum = new int[gp.getMaxWorldCol()][gp.getMaxWorldRow()];
        getTileImage();
        loadMap("../maps/world01.txt");
    }

    public void getTileImage() {
        try {
            tile[0] = new Tile();
            tile[0].image = ImageIO.read(getClass().getResourceAsStream("../sources/tiles/grass.png"));
            tile[1] = new Tile();
            tile[1].image = ImageIO.read(getClass().getResourceAsStream("../sources/tiles/wall.png"));
            tile[2] = new Tile();
            tile[2].image = ImageIO.read(getClass().getResourceAsStream("../sources/tiles/water.png"));
            tile[3] = new Tile();
            tile[3].image = ImageIO.read(getClass().getResourceAsStream("../sources/tiles/earth.png"));
            tile[4] = new Tile();
            tile[4].image = ImageIO.read(getClass().getResourceAsStream("../sources/tiles/tree.png"));
            tile[5] = new Tile();
            tile[5].image = ImageIO.read(getClass().getResourceAsStream("../sources/tiles/sand.png"));

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void loadMap(String filePath) {
        try {
            InputStream is = getClass().getResourceAsStream(filePath);
            BufferedReader br = new BufferedReader(new InputStreamReader(is));
            int col = 0;
            int row = 0;

            while (col < gp.getMaxWorldCol() && row < gp.getMaxWorldRow()) {
                String line = br.readLine();
                while (col < gp.getMaxWorldCol()) {
                    String[] numbers = line.split(" ");
                    int num = Integer.parseInt(numbers[col]);
                    mapTileNum[col][row] = num;
                    col++;
                }
                if (col == gp.getMaxWorldCol()) {
                    col = 0;
                    row++;
                }

            }
            br.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /*
     * public void draw(Graphics2D g2) { this part is to draw a single map
     * int col = 0;
     * int row = 0;
     * int x = 0;
     * int y = 0;
     * while (col < gp.getMaxScreenX() && row < gp.getMaxScreenY()) {
     * int tileNum = mapTileNum[col][row];
     * g2.drawImage(tile[tileNum].image, x, y, gp.getTileSize(), gp.getTileSize(),
     * null);
     * col++;
     * x += gp.getTileSize();
     * if (col == gp.getMaxScreenX()) {
     * col = 0;
     * x = 0;
     * row++;
     * y += gp.getTileSize();
     * }
     * }
     * }
     */

    public void draw(Graphics2D g2) {
        int worldCol = 0;
        int worldRow = 0;

        while (worldCol < gp.getMaxWorldCol() && worldRow < gp.getMaxWorldRow()) {
            int tileNum = mapTileNum[worldCol][worldRow];
            int worldX = worldCol * gp.getTileSize();
            int worldY = worldRow * gp.getTileSize();
            int screenX = worldX - gp.getPlayerWorldX() + gp.getPlayerScreenX();
            int screenY = worldY - gp.getPlayerWorldY() + gp.getPlayerScreenY();
            if (worldX + gp.getTileSize() > gp.getPlayerWorldX() - gp.getPlayerScreenX()
                    && worldX - gp.getTileSize() < gp.getPlayerWorldX() + gp.getPlayerScreenX()
                    && worldY + gp.getTileSize() > gp.getPlayerWorldY() - gp.getPlayerScreenY()
                    && worldY - gp.getTileSize() < gp.getPlayerWorldY() + gp.getPlayerScreenY()) {
                g2.drawImage(tile[tileNum].image, screenX, screenY, gp.getTileSize(), gp.getTileSize(), null);
            }
            worldCol++;
            if (worldCol == gp.getMaxWorldCol()) {
                worldCol = 0;
                worldRow++;
            }
        }
    }
}
