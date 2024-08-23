using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using products_api.interfaces;
using Newtonsoft.Json;

namespace products_api.services
{
    public class ProductService(IHttpClientFactory httpClientFactory) : IProduct
    {
        private readonly HttpClient httpClient = httpClientFactory.CreateClient();

        public async Task<IEnumerable<string[]>> GetItemsAsync()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "https://singularsystems-tech-assessment-sales-api2.azurewebsites.net/products");
            var response = await httpClient.SendAsync(request);
            
             if (!response.IsSuccessStatusCode)
            {
                throw new Exception($"Failed to retrieve products: {response.StatusCode}");
            }

             var content = await response.Content.ReadAsStringAsync();
             return JsonConvert.DeserializeObject<IEnumerable<string>>(content);
        }
    }
}