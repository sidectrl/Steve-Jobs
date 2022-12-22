internal class Program
{
    private static void Main(string[] args)
    {
        string[] input;
        if (args.Length > 0)
        {
            input = args[0].Split(' ');
        }
        else
        {
            Console.WriteLine("Inserisci nome, cognome ed anni.");
            Console.WriteLine("Formato: <nome> <cognome> <età>");
            input = Console.ReadLine().Split(' ');
            if (input.Length == 3)
            {
                string nome = input[0];
                string cognome = input[1];
                int anni = Convert.ToInt32(input[2]);
                Console.WriteLine($"Nome: {nome}, \n\rCognome: {cognome},\n\rEta': {anni}\n\r"
                    + "Sei " + (anni >= 18 ? "maggiorenne" : "minorenne") + ".");
            }
        }

        Console.ReadKey();

    }
}