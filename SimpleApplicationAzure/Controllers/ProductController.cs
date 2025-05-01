using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SimpleApplicationAzure.Dtos.ProductDtos;
using SimpleApplicationAzure.Models;
using SimpleApplicationAzure.Services;

namespace SimpleApplicationAzure.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly INoSqlService<Product> _service;

        public ProductController(INoSqlService<Product> service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IQueryable<Product>> GetProductsAsync()
        {
            return await _service.GetAllAsync();
        }

        [HttpDelete]
        public async Task<bool> DeleteEntity(DeleteProductDto dto)
        {
            var prod = new Product
            {
                RowKey = dto.RowKey,
                PartitionKey = dto.PartitionKey,
            };
            return await _service.Delete(prod.RowKey,prod.PartitionKey);
        }

        [HttpPost("New Product")]
        public async Task AddNew(AddProductDto dto)
        {
            await _service.AddAsync(new Product
            {
                Name = dto.Name,
                Color = dto.Color,
                PartitionKey = dto.PartitionKey,
                Price = dto.Price,
                RowKey = Guid.NewGuid().ToString(),
                Stock = dto.Stock,
                StoreKey = dto.StoreKey,
                StorePartitionKey = dto.StorePartitionKey,
            });
        }
    }
}
