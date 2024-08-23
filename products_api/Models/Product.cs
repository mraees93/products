namespace products_api.Models
{
    public class Product
    {
        public int id { get; set; }
        public string? description { get; set; }
        public double salePrice { get; set; }
        public string? category { get; set; }
        public string? image { get; set; }
    }
}
