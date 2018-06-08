using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Bistroum.Data;
using Bistroum.Models;

namespace Bistroum.Pages.Results
{
    public class DetailsModel : PageModel
    {
        private readonly Bistroum.Data.ApplicationDbContext _context;

        public DetailsModel(Bistroum.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        public Result Result { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Result = await _context.Result.SingleOrDefaultAsync(m => m.ID == id);

            if (Result == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
