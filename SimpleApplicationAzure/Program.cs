using SimpleApplicationAzure.Helpers;
using SimpleApplicationAzure.Services;

var builder = WebApplication.CreateBuilder(args);

ConnectionStrings.AzureStorageConnecionString = builder.Configuration.GetConnectionString("AzureStorageConnectionStr");
builder.Services.AddScoped(typeof(INoSqlService<>), typeof(NoSqlService<>));
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors(a => a.WithOrigins("https://localhost:51304"));
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
