import java.util.ArrayList;

public class BlackJackPlayer {
    private String name;
    private ArrayList<FrenchCard> cards = new ArrayList<>();
    private boolean stone = false;

    BlackJackPlayer(String name) {
        this.name = name;
    }

    public void addCard(FrenchCard card) {
        this.cards.add(card);
    }

    public ArrayList<Integer> getScore() {
        ArrayList<Integer> scores = new ArrayList<>();
        int basicScore = 0;
        int nOfAces = 0;
        for (FrenchCard card : this.cards) {
            if (card.getValue() != 1) {
                if (card.getValue() >= 10) {
                    basicScore += 10;
                } else {
                    basicScore += card.getValue();
                }
            } else {
                nOfAces++;
            }
        }
        if (nOfAces == 0) {
            if (basicScore <= 21) {
                scores.add(basicScore);
            } else {
                this.stone = true;
            }
            return scores;
        } else {
            if (basicScore + nOfAces <= 21) {
                scores.add(basicScore + nOfAces);
            }
            if (basicScore + nOfAces + 10 <= 21) {
                scores.add(basicScore + nOfAces + 10);
            }
        }
        if (this.cards.size() > 0 && scores.size() == 0) {
            this.stone = true;
        }
        return scores;
    }

    public boolean isStone() {
        return stone;
    }

    public ArrayList<FrenchCard> getCards() {
        return cards;
    }

    @Override
    public String toString() {
        return this.name;
    }

}
