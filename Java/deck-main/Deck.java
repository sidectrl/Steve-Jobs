
import java.util.Collections;
import java.util.LinkedList;
import java.util.ListIterator;

public class Deck {
    private LinkedList<Card> cards = new LinkedList<Card>();
    private ListIterator<Card> listIterator = cards.listIterator();

    public Deck() {

    }

    public Deck(LinkedList<Card> cards) {
        this.cards = cards;
        this.listIterator = cards.listIterator();
    }

    public void shuffle() {
        Collections.shuffle(this.cards);
        this.listIterator = cards.listIterator();
    }

    public Card getHead() {
        return this.listIterator.next();
    }

    public boolean hasHead() {
        return this.listIterator.hasNext();
    }

    public LinkedList<Card> getCards() {
        return cards;
    }

    public void setCards(LinkedList<Card> cards) {
        this.cards = cards;
        this.listIterator = cards.listIterator();
    }

}
