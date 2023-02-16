using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Production
{
    public class Seller
    {
        #region Attributes
        private int code = 0;
        private ArrayList products = new ArrayList();
        #endregion
        #region Costructors
        public Seller()
        {
        }
        public Seller(int code)
        {
            this.code = code;
        }

        #endregion

        #region Get and set methods
        public int getCode() => code;
        public ArrayList getProducts() => products;
        
        #endregion

        #region Other methods

        #endregion
    }
    
    
}
