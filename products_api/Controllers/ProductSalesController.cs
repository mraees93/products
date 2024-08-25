using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using products_api.Model;
using Newtonsoft.Json;

namespace products_api.Controllers
{
    [ApiController]
    [Route("api/product-sales")]
    public class ProductSalesController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public ProductSalesController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<ProductSale>>> GetProductSales(int id)
        {
            try
            {
                var httpClient = _httpClientFactory.CreateClient();
                
                var request = new HttpRequestMessage(HttpMethod.Get, $"https://singularsystems-tech-assessment-sales-api2.azurewebsites.net/product-sales?Id={id}");
                var response = await httpClient.SendAsync(request);

                if (response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var data = JsonConvert.DeserializeObject<List<ProductSale>>(responseBody);
                    
                    return Ok(data);
                }
                else
                {
                    return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
                }
            } 
            catch (HttpRequestException ex)
            {
                Console.WriteLine($"Error fetching data: {ex.Message}");
                return StatusCode(500, "Failed to fetch data");
            }
        }
    }
}