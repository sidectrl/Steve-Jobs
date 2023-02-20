using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace limonelli_francesco_rubrica
{
    internal class Contact
    {
        #region Attributes
        private string name = string.Empty;
        private List<string> homePhone = new List<string>();
        private List<string> mobilePhone = new List<string>();
        private List<string> officePhone = new List<string>();
        #endregion

        #region Costructors
        public Contact()
        {
        }
        public Contact(string name, string homePhone = "", string mobilePhone = "", string officePhone = "")
        {
            this.name = name;
            this.homePhone.Add(homePhone);
            this.mobilePhone.Add(mobilePhone);
            this.officePhone.Add(officePhone);
        }
        #endregion

        #region Set and get methods
        public string getName() => name;
        public List<string> getHomePhone() {
           /* string response = "Home numbers: ";
            foreach (string iesim in this.homePhone)
                response += iesim + " - ";*/
            return this.homePhone;
        }
        public List<string> getMobilePhone()
        {
            /*cstring response = "Phone numbers: ";
            foreach (string iesim in this.mobilePhone)
                response += iesim + " - ";*/
            return this.mobilePhone;
        }
        public List<string> getOfficePhone()
        {
            /*string response = "Office numbers: ";
            foreach (string iesim in this.mobilePhone)
                response += iesim + " - ";*/
            return this.officePhone;
        }

        public void setName(string name) => this.name = name;
        public void setHomePhone(List<string> homePhone) => this.homePhone = homePhone;
        public void setMobilePhone(List<string> mobilePhone) => this.mobilePhone = mobilePhone;
        public void setOfficePhone(List<string> officePhone) => this.officePhone = officePhone;

        public void addHomePhone(string homePhone) => this.homePhone.Add(homePhone);
        public void addMobilePhone(string mobilePhone) => this.mobilePhone.Add(mobilePhone);
        public void addOfficePhone(string officePhone) => this.officePhone.Add(officePhone);
        #endregion

        #region Methods
        public override string ToString()
        {
            return $"{this.name}";
        }
        #endregion
    }
}
