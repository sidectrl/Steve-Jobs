using System;

internal class Program
{
    private static void Main(string[] args)
    {
        /*
         * Esercizio
            implementare un programma che chiede all’utente il suo
            nome e successivamente la sua data di nascita Infine, il programma
            saluta l’utente chiamandolo per nome, indicando la sua età e quanti
            giorni mancano per il suo prossimo compleanno Il programma deve
            essere implementato in modo tale da funzionare correttamente in
            qualsiasi anno
         */
        // Chiedi all'utente il suo nome
        Console.Write("Inserisci il tuo nome: ");
        string nome = Console.ReadLine();

        // Chiedi all'utente la sua data di nascita
        Console.Write("Inserisci la tua data di nascita (gg/mm/aaaa): ");
        DateTime dataNascita = DateTime.Parse(Console.ReadLine());

        // Calcola l'età dell'utente
        int eta = DateTime.Now.Year - dataNascita.Year;
        if (DateTime.Now < dataNascita.AddYears(eta))
        {
            eta--;
        }

        // Calcola i giorni mancanti al prossimo compleanno
        DateTime dataProssimoCompleanno = dataNascita.AddYears(eta + 1);
        TimeSpan giorniMancanti = dataProssimoCompleanno - DateTime.Now;

        // Saluta l'utente
        Console.WriteLine($"Ciao, {nome}! Oggi hai {eta} anni e mancano {giorniMancanti.Days} giorni al tuo prossimo compleanno.");
    }
}
