
namespace products_api.Model
{
    public class Product
    {
        public int ProductId { get; set; }
        public string? Description { get; set; }
        public double SalePrice { get; set; }
        public string? Category { get; set; }
        public string? Image { get; set; }
    }
}