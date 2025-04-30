using System.Linq.Expressions;

namespace SimpleApplicationAzure.Services
{
    public interface INoSqlService<TEntity>
    {
        Task<TEntity> AddAsync(TEntity entity);
        Task<TEntity> GetAsync(string rowKey, string partitionKey);
        Task<IQueryable<TEntity>> GetAllAsync();
        Task<IQueryable<TEntity>> QueryAsync(Expression<Func<TEntity, bool>> expression);
        Task<bool> Delete(string rowKey,string partitionKey);
    }
}
