using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Test
{
    public partial class Form1 : Form
    {
        private int count = 0;

        public Form1()
        {
            InitializeComponent();
        }
        private void Previous_Click(object sender, EventArgs e)
        {
            if(count >= 0)
            {
                count--;
                changeImage(count);
            }
            else
            {
                count = 2;
                changeImage(count);
            }
           
        }

        private void btnNext_Click(object sender, EventArgs e)
        {
            if (count <= 2)
            {
                count++;
                changeImage(count);
            }
            else
            {
                count = 0;
                changeImage(count);
            }
        }

        private void changeImage(int count)
        {
            switch (count)
            {
                case 0:
                    this.pctBox1.Image = Properties.Resources._1img;
                    break; 
                case 1:
                    this.pctBox1.Image = Properties.Resources._9img;
                    break; 
                case 2:
                    this.pctBox1.Image = Properties.Resources._10img;
                    break;
            }
        }
    }
}
