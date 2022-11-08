package main;

import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Color;
import java.awt.Dimension;
import javax.swing.JPanel;

import Entity.Player;
import tile.TileManager;

public class GamePanel extends JPanel implements Runnable {

    final int originalTileSize = 16; // Starting size of the character
    final int scale = 3; // for scaling the characters
    final int tileSize = originalTileSize * scale; // final size of Character

    // To decide the final size of the window we have to know how much character at
    // one time have to be
    final int maxScreenX = 16;
    final int maxScreenY = 12;
    final int screenWidth = tileSize * maxScreenX;
    final int screenHeight = tileSize * maxScreenY;
    KeyHandler keyH = new KeyHandler();
    Thread gameThread;

    // FPS
    int FPS = 60;
    TileManager tileM = new TileManager(this);
    Player player = new Player(this, keyH);
    // #region Player information

    // #endregion

    public GamePanel() {
        this.setPreferredSize(new Dimension(screenWidth, screenHeight));
        this.setBackground(Color.black);
        this.setDoubleBuffered(true);
        this.addKeyListener(keyH);
        this.setFocusable(true); // whit this, this gamePanel can be "focused" to recive imput key
    }

    public void startGameThread() {
        gameThread = new Thread(this);
        gameThread.start();
    }

    public void update() {
        player.update();
    }

    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g; // Graphics2D class extends the Graphics class to provide more sophisticated
                                        // control over geometry, coordinate transformations, color management, and text
                                        // layout
        tileM.draw(g2);
        player.draw(g2);
        g2.dispose(); // Dispose of this graphics context and release any system resources that it is
                      // using

    }

    /*
     * @Override
     * public void run() {
     * double drawInterval = 1000000000 / FPS; // 1000000000 is 1 second
     * double nextDrawTime = System.nanoTime() + drawInterval; // current time +
     * drawinterval
     * while (gameThread != null) {
     * // long currentTime = System.nanoTime();
     * 
     * // 1 UPDATE: update information such as character position
     * update();
     * 
     * // 2 DRAW: draw the screen with the update information
     * repaint(); // we use this to call paintComponent
     * 
     * try {
     * double remainingTime = nextDrawTime - System.nanoTime();
     * remainingTime = remainingTime / 1000000;
     * 
     * if (remainingTime < 0) {
     * remainingTime = 0;
     * }
     * 
     * Thread.sleep((long) remainingTime);
     * nextDrawTime += drawInterval;
     * } catch (InterruptedException e) {
     * e.printStackTrace();
     * }
     * }
     * }
     */

    @Override
    public void run() {
        double drawInterval = 1000000000 / FPS;
        double delta = 0; // current time + drawInterval
        long lastTime = System.nanoTime();
        long currentTime;
        long timer = 0;
        int drawCount = 0;
        while (gameThread != null) {
            currentTime = System.nanoTime();
            delta += (currentTime - lastTime) / drawInterval;
            timer += (currentTime - lastTime);
            lastTime = currentTime;
            if (delta >= 1) {
                // 1 UPDATE: update information such as character position
                update();
                // 2 DRAW: draw the screen with the update information
                repaint(); // we use this to call paintComponent
                delta--;
                drawCount++;
            }
            // we can check if the process do 60 FPS
            if (timer >= 1000000000) {
                System.out.println("FPS:" + drawCount);
                drawCount = 0;
                timer = 0;
            }
        }
    }

    public int getTileSize() {
        return this.tileSize;
    }
}
