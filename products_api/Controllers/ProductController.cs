using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using products_api.Model;

namespace products_api.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController(IHttpClientFactory httpClientFactory) : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory = httpClientFactory;
        private const string productsURL = "https://singularsystems-tech-assessment-sales-api2.azurewebsites.net/products";

        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Product>>> GetProducts()
        {
            try
            {
                var httpClient = _httpClientFactory.CreateClient();
                var request = new HttpRequestMessage(HttpMethod.Get, productsURL);
                
                var response = await httpClient.SendAsync(request);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var products = JsonConvert.DeserializeObject<List<Product>>(responseBody);
                    
                    return Ok(products);
                }
                else
                {
                    return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
                }
            } 
            catch (HttpRequestException exception)
            {
                return StatusCode(500, $"Failed to fetch products: {exception.Message}");
            }
        }
    }
}