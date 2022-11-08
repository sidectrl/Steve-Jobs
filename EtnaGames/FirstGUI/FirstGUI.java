package FirstGUI;

import javax.swing.JFrame;

public class FirstGUI {
    public static void main(String[] args) {
        // #region settingWindow
        JFrame window = new JFrame();
        window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // needed for closing the game
        window.setResizable(false); // make the window resizable
        window.setTitle("2D ANALventure"); // title of the window
        // now we set the game panel which we put on the window
        GamePanel gamePanel = new GamePanel();
        window.add(gamePanel);
        window.pack(); // we force the panel's dimension

        window.setLocationRelativeTo(null); // where whe window stays in the monitor
        window.setVisible(true); // window's visibility
        // #endregion

        gamePanel.startGameThread();
    }
}
