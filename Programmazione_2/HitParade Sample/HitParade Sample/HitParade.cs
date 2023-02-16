using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HitParade_Sample
{
    internal class HitParade
    {
        #region Attributes
        private List<Hit> hits = new List<Hit>();
        #endregion

        #region Costructors
        #endregion

        #region Set and get methods

        #endregion

        #region Other methods
        public override string ToString()
        {
            string response = string.Empty;
            foreach (var iesim in hits)
                response += $"{hits.IndexOf(iesim) + 1} - {iesim.getTitle()} \n\r";
            return response;
        }

        public void addHit(Hit hit, int index)
        {
            this.hits.Insert(index - 1, hit);
        }

        public void removeHit(int index)
        {
            this.hits.RemoveAt(index - 1);
        }
        public string searchHit(string name)
        {
            string response = string.Empty;
            foreach (var hit in this.hits)
                if (hit.getTitle().ToLower().Contains(name.ToLower()))
                    response += $"{this.hits.IndexOf(hit) + 1} - {hit.getTitle()}\n";
            return response;
        }

        public void swapHits(int indexA, int indexB)
        {
            var temp = this.hits[indexA - 1];
            this.hits[indexA - 1] = hits[indexB - 1];
            this.hits[indexB - 1] = temp;
        }

        #endregion
    }

}
