using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI1.ViewModels
{
    public class UserRes
    {
        public string LAST_NAME { get; set; }
        public string FIRST_NAME { get; set; }
        public Nullable<System.DateTime> BIRTH_DAY { get; set; }
        public Nullable<int> GENDER { get; set; }
        public string PHONE { get; set; }
        public string EMAIL { get; set; }
        public string ADDRESS { get; set; }
        
    }
}