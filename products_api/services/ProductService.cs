using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using products_api.dto;
using Newtonsoft.Json;

namespace products_api.services
{
    public interface IProductService
    {
        Task<IEnumerable<ProductDTO>> GetItemsAsync();
    }

    public class ProductService : IProductService
    {
        private readonly HttpClient _httpClient;

        public ProductService(HttpClient httpClient)
        {
            _httpClient = httpClient ?? throw new ArgumentNullException(nameof(httpClient));
        }

        public async Task<IEnumerable<ProductDTO>> GetItemsAsync()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "https://singularsystems-tech-assessment-sales-api2.azurewebsites.net/products");
            var response = await _httpClient.SendAsync(request);

            if (!response.IsSuccessStatusCode)
            {
                throw new Exception($"Failed to retrieve products: {response.StatusCode}");
            }

            var content = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<IEnumerable<ProductDTO>>(content);
        }
    }
}