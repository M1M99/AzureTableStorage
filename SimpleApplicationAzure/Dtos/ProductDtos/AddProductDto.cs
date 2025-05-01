using Azure;

namespace SimpleApplicationAzure.Dtos.ProductDtos
{
    public class AddProductDto
    {
        public string PartitionKey { get; set; }
        //public DateTimeOffset? Timestamp { get; set; }
        public string? Name { get; set; }
        public double Price { get; set; }
        public int Stock { get; set; }
        public string? Color { get; set; }
        public string? StoreKey { get; set; }
        public string? StorePartitionKey { get; set; }
    }
}
