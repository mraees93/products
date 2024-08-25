using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace products_api.Model
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Description { get; set; } = null!;
        public double SalePrice { get; set; }
        public string Category { get; set; } = null!;
        public string Image { get; set; } = null!;
    }
}