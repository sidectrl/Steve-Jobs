using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HitParade_Sample
{
    internal class Hit
    {
        #region Attributes
        private string title = string.Empty;
        private string author = string.Empty; //gli autori nel caso dovessero essere multipli verranno separati nella stringa tramite la virgola
        #endregion

        #region Costructors
        public Hit() { }
        public Hit(string title, string author)
        {
            this.title = title;
            this.author = author;
        }
        #endregion

        #region Set and get methods
        public string getTitle() => this.title;
        public string getAuthor() => this.author;
        public void setTitle(string title)
        {
            this.title = title;
        }
        public void setAuthor(string author)
        {
            this.author = author;
        }
        #endregion

        #region Other methods
        public override string ToString() => $"Title: {this.title}, \n\r Author:{this.author}";
        #endregion
    }
}
