public class BlackJack {
    private FrenchDeck deck;
    BlackJackPlayer p1 = new BlackJackPlayer("Carlo");
    BlackJackPlayer dealer = new BlackJackPlayer("John");
    BlackJackPlayer current = p1;

    public BlackJack() {
        this.deck = new FrenchDeck(2);
        deck.shuffle();
    }

    public void start() {
        p1.addCard((FrenchCard) this.deck.getHead());
        dealer.addCard((FrenchCard) this.deck.getHead());
        p1.addCard((FrenchCard) this.deck.getHead());
    }

    public void call() {
        this.current.addCard((FrenchCard) this.deck.getHead());
    }

    public void playDealer() {
        this.current = dealer;
        while (this.current.getScore().get(this.current.getScore().size() - 1) <= 17) {
            this.call();
        }
        return;
    }

    public BlackJackPlayer getWinner() {
        int p1 = this.p1.isStone() ? 0 : this.p1.getScore().get(this.p1.getScore().size() - 1);
        int dealer = this.dealer.isStone() ? 0 : this.dealer.getScore().get(this.dealer.getScore().size() - 1);
        return p1 > dealer ? this.p1 : this.dealer;
    }

    @Override
    public String toString() {
        String response = "";
        response += this.p1.getCards().toString() + "\n";
        response += this.p1.getScore() + "\n";
        response += this.dealer.getCards().toString() + "\n";
        response += this.dealer.getScore() + "\n";
        return response;
    }

}
