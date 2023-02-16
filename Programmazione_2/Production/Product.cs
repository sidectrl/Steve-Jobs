using System;

public class Product	
{
    #region Attributes
    private int cod = null;
	private double price = null;
    #endregion

    #region Costructor
    public Product()
	{
	}
    public Product(int cod, double price)
    {
        this.cod = cod;
        this.price = price;
    }
    #endregion

    #region Set and get methods
    public int getCod() => cod;
    public double getPrice() => price;
    public void setCod(int cod) => this.cod = cod;
    public void setPrice(double price) => this.price = price;
    #endregion

    #region Methods
    public override string ToString() => $"Code: {cod},\n\r price: {price}";
    #endregion

}
