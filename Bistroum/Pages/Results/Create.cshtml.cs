using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Bistroum.Data;
using Bistroum.Models;

namespace Bistroum.Pages.Results
{
    public class CreateModel : PageModel
    {
        private readonly Bistroum.Data.ApplicationDbContext _context;

        public CreateModel(Bistroum.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Result Result { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Result.Add(Result);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}