import java.util.LinkedList;

public class SicilianDeck extends Deck {

    public SicilianDeck() {
        String[] seeds = { "Gold", "Swards", "Cups", "Claves" };
        LinkedList<Card> cards = new LinkedList<Card>();
        for (int i = 0; i < seeds.length; i++) {
            for (int j = 1; j <= 10; j++) {
                NumerableCard c = new NumerableCard(seeds[i], j);
                cards.add(c);
            }
        }
        super.setCards(cards);
    }
}
