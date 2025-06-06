﻿using Azure;
using Azure.Data.Tables;

namespace SimpleApplicationAzure.Models
{
    public class Product : ITableEntity
    {
        public string PartitionKey { get; set; }
        public string RowKey { get; set; }
        public DateTimeOffset? Timestamp { get; set; }
        public ETag ETag { get; set; } = ETag.All;
        public string? Name { get; set; }
        public double Price { get; set; }
        public int Stock { get; set; }
        public string? Color { get; set; }
        public string? StoreKey { get; set; }
        public string? StorePartitionKey { get; set; }
    }
}
