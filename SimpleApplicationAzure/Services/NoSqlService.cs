using Azure;
using Azure.Data.Tables;
using SimpleApplicationAzure.Helpers;
using System.Linq.Expressions;

namespace SimpleApplicationAzure.Services
{
    public class NoSqlService<TEntity> : INoSqlService<TEntity> where TEntity : class, ITableEntity, new()
    {
        private TableClient _tableClient;

        public NoSqlService()
        {
            var connectionString = ConnectionStrings.AzureStorageConnecionString;
            var tableName = typeof(TEntity).Name;
            _tableClient = new TableClient(connectionString, tableName);
            _tableClient.CreateIfNotExists();
        }

        public async Task<TEntity> AddAsync(TEntity entity)
        {
            await _tableClient.AddEntityAsync(entity);
            return await GetAsync(entity.RowKey, entity.PartitionKey);
        }

        public async Task<bool> Delete(string rowKey, string partitionKey)
        {
            try
            {
                await _tableClient.DeleteEntityAsync(partitionKey, rowKey);
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<IQueryable<TEntity>> GetAllAsync()
        {
            var entities = new List<TEntity>();
            await foreach (var entity in _tableClient.QueryAsync<TEntity>())
            {
                entities.Add(entity);
            }
            return entities.AsQueryable();
        }

        public async Task<TEntity> GetAsync(string rowKey, string partitionKey)
        {
            try
            {
                var data = await _tableClient.GetEntityAsync<TEntity>(partitionKey, rowKey);
                return data.Value;

            }
            catch (Exception ex)
            {
                throw new ArgumentNullException();
            }
        }

        public async Task<IQueryable<TEntity>> QueryAsync(Expression<Func<TEntity, bool>> expression)
        {
            var entities = new List<TEntity>();
            await foreach (var entity in _tableClient.QueryAsync(expression))
            {
                entities.Add(entity);
            }
            return entities.AsQueryable();
        }
    }
}
