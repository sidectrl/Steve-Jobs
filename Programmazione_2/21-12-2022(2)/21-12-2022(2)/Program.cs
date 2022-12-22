using System;

internal class Program
{
    private static void Main(string[] args)
    {
        var name = "";
        DateTime age;
        /*
         * Esercizio
            implementare un programma che chiede all’utente il suo
            nome e successivamente la sua data di nascita Infine, il programma
            saluta l’utente chiamandolo per nome, indicando la sua età e quanti
            giorni mancano per il suo prossimo compleanno Il programma deve
            essere implementato in modo tale da funzionare correttamente in
            qualsiasi anno
         */
        Console.WriteLine("Inserisci nome e data di nascita");
        var input = Console.ReadLine().Split(' ');
        age = DateTime.Parse(input[1]);
        if (input.Length == 2)
        {
            Console.WriteLine($"Hi {input[0]}, your age is {getAge(age)}, your birthday is in {getDaysToBirth(age)} days");
        }
        Console.ReadKey();
    }
    public static int getAge(DateTime birthday)
    {
        return Convert.ToInt32(DateTime.Now.Year - birthday.Year);
    }
    public static int getDaysToBirth(DateTime birthday)
    {
        return 1;
    }
}