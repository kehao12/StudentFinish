using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebAPI1.ViewModels
{
    public class CatalogCustom
    {
        public int CATA_ID { get; set; }
        public int YEAR_START_ID { get; set; }
        public int YEAR_START { get; set; }
        public int YEAR_END_ID { get; set; }
        public int YEAR_END { get; set; }
        public string NOTE { get; set; }
        public Nullable<int> STATUS { get; set; }
    }

}