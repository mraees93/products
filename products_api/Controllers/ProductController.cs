using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace products_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProduct iproduct;

        public ProductController(IProduct _iproduct)
        {
            iproduct = _iproduct;
        }

        public async Task<IActionResult> Index()
        {
            var items = await _apiService.GetItemsAsync();
            return View(items);
        }
    }
}