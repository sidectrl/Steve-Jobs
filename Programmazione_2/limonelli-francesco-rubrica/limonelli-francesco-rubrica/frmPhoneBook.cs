using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace limonelli_francesco_rubrica
{
    public partial class frmPhoneBook : Form
    {
        PhoneBook myPhoneBook = new PhoneBook();
        Contact dummyContact = new Contact();
        public frmPhoneBook()
        {
            InitializeComponent();
        }

        private void btnShowAdd_Click(object sender, EventArgs e)
        {
            this.dummyContact = new Contact();
            this.pnAddContact.Visible = true;
            if (pnMerge.Visible)
                pnMerge.Visible = false;
        }

        private void btnAddContact_Click(object sender, EventArgs e)
        {
            myPhoneBook.addContact(dummyContact);
            dummyContact = null;
            this.pnAddContact.Visible = false;
            showContacts();
        }

        private void btnRemove_Click(object sender, EventArgs e)
        {
            if (this.lstShowPhoneBook.SelectedIndex >= 0)
            {
                this.myPhoneBook.removeContact(this.lstShowPhoneBook.SelectedIndex);
                showContacts();
            }
            else
            {
                MessageBox.Show("You need to select an item");
            }
        }

        private void showContacts()
        {
            this.lstShowPhoneBook.Items.Clear();
            this.lstShowPhoneBook.Items.AddRange(this.myPhoneBook.getContacts().ToArray());
        }

        private void txtSearch_TextChanged(object sender, EventArgs e)
        {
            this.lstShowPhoneBook.Items.Clear();
            this.lstShowPhoneBook.Items.AddRange(myPhoneBook.searchContact(txtSearch.Text).ToArray());

        }

        private void btnMergeContacts_Click(object sender, EventArgs e)
        {
            pnMerge.Visible = true;
            if (pnAddContact.Visible)
                pnAddContact.Visible = false;
            this.lstShowPhoneBook.SelectionMode = SelectionMode.MultiSimple;
        }

        private void btnMerge_Click(object sender, EventArgs e)
        {
            if (lstShowPhoneBook.SelectedItems.Count == 2)
            {
                myPhoneBook.mergeMontacts(lstShowPhoneBook.SelectedIndices[0], lstShowPhoneBook.SelectedIndices[1], txtNewName.Text);
                lstShowPhoneBook.SelectionMode = SelectionMode.One;
                showContacts();
            }
            else
            {
                MessageBox.Show("The two items are not selected.");
            }
        }

        private void btnMoreNumbers_Click(object sender, EventArgs e)
        {
            try
            {
                switch (cnbPhoneType.SelectedItem)
            {
                case "Home number":
                    dummyContact.addHomePhone(this.txtBxNumber.Text);
                    break;
                case "Phone number":
                    dummyContact.addMobilePhone(this.txtBxNumber.Text);
                    break;
                case "Office number":
                    dummyContact.addOfficePhone(this.txtBxNumber.Text);
                    break;
            }
            }
            catch
            {
                MessageBox.Show("Invalid number");
            }
            
        }

        private void lstShowPhoneBook_DoubleClick(object sender, EventArgs e)
        {
            /*MessageBox.Show($"{myPhoneBook.getContacts()[lstShowPhoneBook.SelectedIndex].getName()}" +
                $"{myPhoneBook.getContacts()[lstShowPhoneBook.SelectedIndex].getHomePhone()}\n\r"+
                $"{myPhoneBook.getContacts()[lstShowPhoneBook.SelectedIndex].getMobilePhone()}\n\r" +
                $"{myPhoneBook.getContacts()[lstShowPhoneBook.SelectedIndex].getOfficePhone()}"
                );*/
            if (lstShowPhoneBook.SelectedIndex >= 0)
            {
                string response = myPhoneBook.getContacts()[lstShowPhoneBook.SelectedIndex].getName() + "\n\rHomePhone";
                foreach (string iesim in myPhoneBook.getContacts()[lstShowPhoneBook.SelectedIndex].getHomePhone())
                    response += " - " + iesim + "\n\r";
                response += "\n\rMobile Phone:";
                foreach (string iesim in myPhoneBook.getContacts()[lstShowPhoneBook.SelectedIndex].getMobilePhone())
                    response += " - " + iesim + "\n\r";
                response += "\n\rOffice Phone:";
                foreach (string iesim in myPhoneBook.getContacts()[lstShowPhoneBook.SelectedIndex].getOfficePhone())
                    response += " - " + iesim + "\n\r";
                MessageBox.Show(response);
            }
        }

        private void txtBxName_TextChanged(object sender, EventArgs e)
        {
            this.dummyContact.setName(txtBxName.Text);
        }
    }
}
