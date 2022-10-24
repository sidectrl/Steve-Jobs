import java.util.LinkedList;

public class FrenchDeck extends Deck {

    public FrenchDeck() {
        LinkedList<Card> cards = this.generateDeck();
        super.setCards(cards);
    }

    public FrenchDeck(int nOfDecks) {
        LinkedList<Card> finalCards = new LinkedList<>();
        for (int i = 0; i < nOfDecks; i++) {
            LinkedList<Card> cards = this.generateDeck();
            finalCards.addAll(cards);
        }
        super.setCards(finalCards);
    }

    private LinkedList<Card> generateDeck() {
        String[] seeds = { "Hearts", "Diamonds", "Spades", "Clubes" };
        LinkedList<Card> cards = new LinkedList<Card>();
        for (int i = 0; i < seeds.length; i++) {
            for (int j = 1; j <= 13; j++) {
                FrenchCard c = new FrenchCard(seeds[i], j);
                cards.add(c);
            }
        }
        return cards;
    }

}
