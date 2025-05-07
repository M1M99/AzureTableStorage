using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SimpleApplicationAzure.Models;
using SimpleApplicationAzure.Services;

namespace SimpleApplicationAzure.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly INoSqlService<Store> _service;

        public StoreController(INoSqlService<Store> service)
        {
            _service = service;
        }
        [HttpGet]
        public async Task<IQueryable<Store>> GetAll()
        {
           return await _service.GetAllAsync();
        }
        [HttpPost]
        public async Task AddNew(AddStoreDto dto)
        {
            var store = new Store
            {
                Address = dto.Address,
                CityName=dto.CityName,
                CountryName =dto.CountryName,
                PartitionKey=dto.PartitialKey,
                RowKey = Guid.NewGuid().ToString(), 
            };
            await _service.AddAsync(store);
        }
    }
}
