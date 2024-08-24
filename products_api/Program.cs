using products_api.dto;
using products_api.services;
// using IProduct.Services;
var builder = WebApplication.CreateBuilder(args);
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient<ProductDTO>();
builder.Services.AddScoped<IHttpClientFactory>(factory => factory.CreateScope().ServiceProvider.GetRequiredService<IHttpClientFactory>());
builder.Services.AddHttpClient();
builder.Services.AddTransient<IProductService, ProductService>();
builder.Services.AddSingleton<ProductDTO>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("AllowAll");
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
