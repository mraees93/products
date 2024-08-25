using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace products_api.Model
{
    public class ProductSale
    {
        public int SaleId { get; set; }
        public int ProductId { get; set; }
        public double SalePrice { get; set; }
        public int SaleQty { get; set; }
        public string SaleDate { get; set; } = null!;
    }
}