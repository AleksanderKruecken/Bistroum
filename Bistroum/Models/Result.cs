using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bistroum.Models
{
    public class Result
    {
        public int ID { get; set; }
        [Display(Name = "Uporabnik")]
        public string UserID { get; set; }
        [Display(Name = "Stopnja")]
        public string Level { get; set; }
        [Display(Name = "Porabljeni čas")]
        public int Time { get; set; }
        [Display(Name = "Ustvarjeno")]
        public DateTime DateCreated { get; set; }

    }
}
