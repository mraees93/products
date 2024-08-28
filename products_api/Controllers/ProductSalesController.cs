using Microsoft.AspNetCore.Mvc;
using products_api.Model;
using Newtonsoft.Json;

namespace products_api.Controllers
{
    [ApiController]
    [Route("api/product-sales")]
    public class ProductSalesController(IHttpClientFactory httpClientFactory) : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory = httpClientFactory;
        private const string productSalesURL = "https://singularsystems-tech-assessment-sales-api2.azurewebsites.net/product-sales?Id=";

        [HttpGet("{id}")]
        public async Task<ActionResult<IAsyncEnumerable<ProductSale>>> GetProductSales(int id)
        {
            try
            {
                var httpClient = _httpClientFactory.CreateClient();
                var request = new HttpRequestMessage(HttpMethod.Get, $"{productSalesURL}{id}");

                var response = await httpClient.SendAsync(request);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var productSales = JsonConvert.DeserializeObject<List<ProductSale>>(responseBody);
                    
                    return Ok(productSales);
                }
                else
                {
                    return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
                }
            } 
            catch (HttpRequestException exception)
            {
                return StatusCode(500, $"Failed to fetch product sales: {exception.Message}");
            }
        }
    }
}