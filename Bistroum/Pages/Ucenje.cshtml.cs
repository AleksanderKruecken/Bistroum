﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Bistroum.Pages
{
    public class UcenjeModel : PageModel
    {
        public string Message { get; set; }

        public void OnGet()
        {
            Message = "Učenje";
        }
    }
}