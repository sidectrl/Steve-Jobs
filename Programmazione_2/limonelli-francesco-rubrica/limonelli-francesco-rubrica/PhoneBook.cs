using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace limonelli_francesco_rubrica
{
    internal class PhoneBook
    {
        #region Attributes
        private List<Contact> contacts = new List<Contact>();
        #endregion

        #region Costructors
        #endregion

        #region Set and get methods
        public List<Contact> getContacts() => contacts;
        #endregion

        #region Other methods
        public override string ToString()
        {
            string response = string.Empty;
            this.contacts.Sort();
            foreach (var iesim in contacts)
                response += $"{iesim.getName()} \n\r";
            return response;
        }

        public void addContact(Contact contact)
        {
            this.contacts.Add(contact);
        }

        public void removeContact(int index)
        {
            if(this.contacts.Count > 0) 
                this.contacts.RemoveAt(index);
            
        }
        public List<Contact> searchContact(string name)
        {
            List<Contact> response = new List<Contact>();
            foreach (var contact in this.contacts)
                if (contact.getName().ToLower().Contains(name.ToLower()))
                    response.Add(contact);
            return response;
        }

        public void mergeMontacts(int indexA, int indexB, string newName)
        {
            foreach (string iesim in this.contacts[indexB].getHomePhone())
                this.contacts[indexA].addHomePhone(iesim);
            foreach (string iesim in this.contacts[indexB].getMobilePhone())
                this.contacts[indexA].addMobilePhone(iesim);
            foreach (string iesim in this.contacts[indexB].getOfficePhone())
                this.contacts[indexA].addOfficePhone(iesim);
            this.contacts[indexA].setName(newName);
            this.contacts.RemoveAt(indexB);
        }

        #endregion
    }
}
