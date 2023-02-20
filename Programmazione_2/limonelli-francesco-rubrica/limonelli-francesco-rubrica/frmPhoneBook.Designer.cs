namespace limonelli_francesco_rubrica
{
    partial class frmPhoneBook
    {
        /// <summary>
        /// Variabile di progettazione necessaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Pulire le risorse in uso.
        /// </summary>
        /// <param name="disposing">ha valore true se le risorse gestite devono essere eliminate, false in caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Codice generato da Progettazione Windows Form

        /// <summary>
        /// Metodo necessario per il supporto della finestra di progettazione. Non modificare
        /// il contenuto del metodo con l'editor di codice.
        /// </summary>
        private void InitializeComponent()
        {
            this.pnAddContact = new System.Windows.Forms.Panel();
            this.btnMoreNumbers = new System.Windows.Forms.Button();
            this.cnbPhoneType = new System.Windows.Forms.ComboBox();
            this.lblAddContact = new System.Windows.Forms.Label();
            this.btnAddContact = new System.Windows.Forms.Button();
            this.txtBxNumber = new System.Windows.Forms.TextBox();
            this.lblAddName = new System.Windows.Forms.Label();
            this.txtBxName = new System.Windows.Forms.TextBox();
            this.btnShowAdd = new System.Windows.Forms.Button();
            this.lstShowPhoneBook = new System.Windows.Forms.ListBox();
            this.btnRemove = new System.Windows.Forms.Button();
            this.txtSearch = new System.Windows.Forms.TextBox();
            this.btnMergeContacts = new System.Windows.Forms.Button();
            this.pnMerge = new System.Windows.Forms.Panel();
            this.lblMerge = new System.Windows.Forms.Label();
            this.btnMerge = new System.Windows.Forms.Button();
            this.lblNewName = new System.Windows.Forms.Label();
            this.txtNewName = new System.Windows.Forms.TextBox();
            this.pnAddContact.SuspendLayout();
            this.pnMerge.SuspendLayout();
            this.SuspendLayout();
            // 
            // pnAddContact
            // 
            this.pnAddContact.BackColor = System.Drawing.Color.WhiteSmoke;
            this.pnAddContact.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.pnAddContact.Controls.Add(this.btnMoreNumbers);
            this.pnAddContact.Controls.Add(this.cnbPhoneType);
            this.pnAddContact.Controls.Add(this.lblAddContact);
            this.pnAddContact.Controls.Add(this.btnAddContact);
            this.pnAddContact.Controls.Add(this.txtBxNumber);
            this.pnAddContact.Controls.Add(this.lblAddName);
            this.pnAddContact.Controls.Add(this.txtBxName);
            this.pnAddContact.Location = new System.Drawing.Point(483, 12);
            this.pnAddContact.Name = "pnAddContact";
            this.pnAddContact.Size = new System.Drawing.Size(371, 192);
            this.pnAddContact.TabIndex = 0;
            this.pnAddContact.Visible = false;
            // 
            // btnMoreNumbers
            // 
            this.btnMoreNumbers.Location = new System.Drawing.Point(172, 140);
            this.btnMoreNumbers.Name = "btnMoreNumbers";
            this.btnMoreNumbers.Size = new System.Drawing.Size(70, 28);
            this.btnMoreNumbers.TabIndex = 9;
            this.btnMoreNumbers.Text = "Add";
            this.btnMoreNumbers.UseVisualStyleBackColor = true;
            this.btnMoreNumbers.Click += new System.EventHandler(this.btnMoreNumbers_Click);
            // 
            // cnbPhoneType
            // 
            this.cnbPhoneType.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cnbPhoneType.Items.AddRange(new object[] {
            "Home number",
            "Phone number",
            "Office number"});
            this.cnbPhoneType.Location = new System.Drawing.Point(23, 110);
            this.cnbPhoneType.Name = "cnbPhoneType";
            this.cnbPhoneType.Size = new System.Drawing.Size(121, 24);
            this.cnbPhoneType.TabIndex = 10;
            // 
            // lblAddContact
            // 
            this.lblAddContact.AutoSize = true;
            this.lblAddContact.Font = new System.Drawing.Font("Microsoft Sans Serif", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblAddContact.Location = new System.Drawing.Point(107, 11);
            this.lblAddContact.Name = "lblAddContact";
            this.lblAddContact.Size = new System.Drawing.Size(152, 29);
            this.lblAddContact.TabIndex = 9;
            this.lblAddContact.Text = "Add Contact";
            // 
            // btnAddContact
            // 
            this.btnAddContact.Location = new System.Drawing.Point(284, 121);
            this.btnAddContact.Name = "btnAddContact";
            this.btnAddContact.Size = new System.Drawing.Size(70, 41);
            this.btnAddContact.TabIndex = 8;
            this.btnAddContact.Text = "Save";
            this.btnAddContact.UseVisualStyleBackColor = true;
            this.btnAddContact.Click += new System.EventHandler(this.btnAddContact_Click);
            // 
            // txtBxNumber
            // 
            this.txtBxNumber.Location = new System.Drawing.Point(23, 140);
            this.txtBxNumber.Name = "txtBxNumber";
            this.txtBxNumber.Size = new System.Drawing.Size(143, 22);
            this.txtBxNumber.TabIndex = 2;
            // 
            // lblAddName
            // 
            this.lblAddName.AutoSize = true;
            this.lblAddName.Location = new System.Drawing.Point(23, 57);
            this.lblAddName.Name = "lblAddName";
            this.lblAddName.Size = new System.Drawing.Size(44, 16);
            this.lblAddName.TabIndex = 1;
            this.lblAddName.Text = "Name";
            // 
            // txtBxName
            // 
            this.txtBxName.Location = new System.Drawing.Point(23, 76);
            this.txtBxName.Name = "txtBxName";
            this.txtBxName.Size = new System.Drawing.Size(143, 22);
            this.txtBxName.TabIndex = 0;
            this.txtBxName.TextChanged += new System.EventHandler(this.txtBxName_TextChanged);
            // 
            // btnShowAdd
            // 
            this.btnShowAdd.Location = new System.Drawing.Point(12, 486);
            this.btnShowAdd.Name = "btnShowAdd";
            this.btnShowAdd.Size = new System.Drawing.Size(101, 35);
            this.btnShowAdd.TabIndex = 1;
            this.btnShowAdd.Text = "Add Contact";
            this.btnShowAdd.UseVisualStyleBackColor = true;
            this.btnShowAdd.Click += new System.EventHandler(this.btnShowAdd_Click);
            // 
            // lstShowPhoneBook
            // 
            this.lstShowPhoneBook.FormattingEnabled = true;
            this.lstShowPhoneBook.ItemHeight = 16;
            this.lstShowPhoneBook.Location = new System.Drawing.Point(12, 44);
            this.lstShowPhoneBook.Name = "lstShowPhoneBook";
            this.lstShowPhoneBook.Size = new System.Drawing.Size(450, 436);
            this.lstShowPhoneBook.Sorted = true;
            this.lstShowPhoneBook.TabIndex = 2;
            this.lstShowPhoneBook.DoubleClick += new System.EventHandler(this.lstShowPhoneBook_DoubleClick);
            // 
            // btnRemove
            // 
            this.btnRemove.Location = new System.Drawing.Point(119, 486);
            this.btnRemove.Name = "btnRemove";
            this.btnRemove.Size = new System.Drawing.Size(101, 35);
            this.btnRemove.TabIndex = 3;
            this.btnRemove.Text = "Remove";
            this.btnRemove.UseVisualStyleBackColor = true;
            this.btnRemove.Click += new System.EventHandler(this.btnRemove_Click);
            // 
            // txtSearch
            // 
            this.txtSearch.Location = new System.Drawing.Point(12, 12);
            this.txtSearch.Name = "txtSearch";
            this.txtSearch.Size = new System.Drawing.Size(450, 22);
            this.txtSearch.TabIndex = 4;
            this.txtSearch.TextChanged += new System.EventHandler(this.txtSearch_TextChanged);
            // 
            // btnMergeContacts
            // 
            this.btnMergeContacts.Location = new System.Drawing.Point(226, 486);
            this.btnMergeContacts.Name = "btnMergeContacts";
            this.btnMergeContacts.Size = new System.Drawing.Size(111, 35);
            this.btnMergeContacts.TabIndex = 5;
            this.btnMergeContacts.Text = "Merge Contact";
            this.btnMergeContacts.UseVisualStyleBackColor = true;
            this.btnMergeContacts.Click += new System.EventHandler(this.btnMergeContacts_Click);
            // 
            // pnMerge
            // 
            this.pnMerge.BackColor = System.Drawing.Color.WhiteSmoke;
            this.pnMerge.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            this.pnMerge.Controls.Add(this.lblMerge);
            this.pnMerge.Controls.Add(this.btnMerge);
            this.pnMerge.Controls.Add(this.lblNewName);
            this.pnMerge.Controls.Add(this.txtNewName);
            this.pnMerge.Location = new System.Drawing.Point(483, 24);
            this.pnMerge.Name = "pnMerge";
            this.pnMerge.Size = new System.Drawing.Size(371, 134);
            this.pnMerge.TabIndex = 6;
            this.pnMerge.Visible = false;
            // 
            // lblMerge
            // 
            this.lblMerge.AutoSize = true;
            this.lblMerge.Font = new System.Drawing.Font("Microsoft Sans Serif", 15F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblMerge.Location = new System.Drawing.Point(95, 12);
            this.lblMerge.Name = "lblMerge";
            this.lblMerge.Size = new System.Drawing.Size(191, 29);
            this.lblMerge.TabIndex = 9;
            this.lblMerge.Text = "Merge Contacts";
            // 
            // btnMerge
            // 
            this.btnMerge.Location = new System.Drawing.Point(275, 67);
            this.btnMerge.Name = "btnMerge";
            this.btnMerge.Size = new System.Drawing.Size(70, 41);
            this.btnMerge.TabIndex = 8;
            this.btnMerge.Text = "Merge";
            this.btnMerge.UseVisualStyleBackColor = true;
            this.btnMerge.Click += new System.EventHandler(this.btnMerge_Click);
            // 
            // lblNewName
            // 
            this.lblNewName.AutoSize = true;
            this.lblNewName.Location = new System.Drawing.Point(23, 57);
            this.lblNewName.Name = "lblNewName";
            this.lblNewName.Size = new System.Drawing.Size(71, 16);
            this.lblNewName.TabIndex = 1;
            this.lblNewName.Text = "New name";
            // 
            // txtNewName
            // 
            this.txtNewName.Location = new System.Drawing.Point(23, 76);
            this.txtNewName.Name = "txtNewName";
            this.txtNewName.Size = new System.Drawing.Size(143, 22);
            this.txtNewName.TabIndex = 0;
            // 
            // frmPhoneBook
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(868, 535);
            this.Controls.Add(this.pnAddContact);
            this.Controls.Add(this.btnMergeContacts);
            this.Controls.Add(this.txtSearch);
            this.Controls.Add(this.btnRemove);
            this.Controls.Add(this.lstShowPhoneBook);
            this.Controls.Add(this.btnShowAdd);
            this.Controls.Add(this.pnMerge);
            this.Name = "frmPhoneBook";
            this.Text = "Phone Book";
            this.pnAddContact.ResumeLayout(false);
            this.pnAddContact.PerformLayout();
            this.pnMerge.ResumeLayout(false);
            this.pnMerge.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel pnAddContact;
        private System.Windows.Forms.TextBox txtBxName;
        private System.Windows.Forms.Label lblAddName;
        private System.Windows.Forms.TextBox txtBxNumber;
        private System.Windows.Forms.Button btnAddContact;
        private System.Windows.Forms.Label lblAddContact;
        private System.Windows.Forms.Button btnShowAdd;
        private System.Windows.Forms.ListBox lstShowPhoneBook;
        private System.Windows.Forms.ComboBox cnbPhoneType;
        private System.Windows.Forms.Button btnRemove;
        private System.Windows.Forms.TextBox txtSearch;
        private System.Windows.Forms.Button btnMergeContacts;
        private System.Windows.Forms.Panel pnMerge;
        private System.Windows.Forms.Label lblMerge;
        private System.Windows.Forms.Button btnMerge;
        private System.Windows.Forms.Label lblNewName;
        private System.Windows.Forms.TextBox txtNewName;
        private System.Windows.Forms.Button btnMoreNumbers;
    }
}

