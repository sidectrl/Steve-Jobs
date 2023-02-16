using HitParade_Sample;
using System.Runtime.CompilerServices;

internal class HitParadeManager
{
    private static void Main(string[] args)
    {
        int index = 0, position = 0;
        string author, title;
        HitParade hitParade = new HitParade();
        hitsTemplate(ref hitParade);


        do
        {
            Console.WriteLine("Menù: \n\r" +
                "0. Exit. \n\r" +
                "1. Show the placement. \n\r" +
                "2. Add new hit. \n\r" +
                "3. Remove a hit. \n\r" +
                "4. Swap 2 hits. \n\r" +
                "5. Filter hits. \n\r");
            index = input();
            switch (index)
            {
                case 1:
                    Console.WriteLine(hitParade.ToString());
                    break;
                case 2:
                    Console.WriteLine("Write the hit's title:");
                    title = Console.ReadLine();
                    Console.WriteLine("Write the hit's author:");
                    author = Console.ReadLine();
                    Console.WriteLine("Write the hit's position:");
                    position = Convert.ToInt16(Console.ReadLine());
                    hitParade.addHit(new Hit(title, author), position);
                    Console.WriteLine(hitParade.ToString());
                    break;
                case 3:
                    Console.WriteLine("Type the hit's index which you want to remove.");
                    position = Convert.ToInt16(Console.ReadLine());
                    hitParade.removeHit(position);
                    Console.WriteLine(hitParade.ToString());
                    break;
                case 4:
                    Console.WriteLine("Write the hit's swap positions");
                    hitParade.swapHits(Convert.ToInt16(Console.ReadLine()), Convert.ToInt16(Console.ReadLine()));
                    Console.WriteLine(hitParade.ToString());
                    break;
                case 5:
                    Console.WriteLine("Search the song:");
                    title = Console.ReadLine();
                    Console.WriteLine(hitParade.searchHit(title));
                    break;

            }
        } while (index != 0);
    }

    private static int input()
    {
        try { return Convert.ToInt16(Console.ReadLine()); } catch { throw new Exception("Input is not an int"); };
    }

    private static void hitsTemplate(ref HitParade hitParade)
    {
        hitParade.addHit(new Hit("Sburrero perchè", "Tiger fregna"), 1);
        hitParade.addHit(new Hit("Sburo blu", "Tiger Fregna"), 2);
        hitParade.addHit(new Hit("Sbuvro no", "Tiger Fregna"), 3);
        hitParade.addHit(new Hit("Analone", "Fill Anal"), 4);
        hitParade.addHit(new Hit("Mi sveglio tutta sborrata", "Emma Sborrone"), 5);
        hitParade.addHit(new Hit("Sugnu tuttu nfocu", "GiGi u malavitusu"), 6);
        hitParade.addHit(new Hit("Sono un marco", "Marco D'Urso"), 7);
    }
}