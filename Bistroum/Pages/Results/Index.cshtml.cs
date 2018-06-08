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
    public class IndexModel : PageModel
    {
        private readonly Bistroum.Data.ApplicationDbContext _context;

        public IndexModel(Bistroum.Data.ApplicationDbContext context)
        {
            _context = context;
        }

        public IList<Result> Result { get;set; }

        public async Task OnGetAsync()
        {
            Result = await _context.Result.ToListAsync();
        }
    }
}
