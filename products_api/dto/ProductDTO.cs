using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace products_api.dto
{
    public class ProductDTO
    {
        public int productId { get; set; }
        public string description { get; set; } = null!;
        public double salePrice { get; set; }
        public string category { get; set; } = null!;
        public string image { get; set; } = null!;
    }
}