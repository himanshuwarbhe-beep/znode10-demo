using Microsoft.EntityFrameworkCore;
using ZnodeDemo.Api.Models;

namespace ZnodeDemo.Api.Data;

public class ZnodeDemoDbContext : DbContext
{
    public ZnodeDemoDbContext(DbContextOptions<ZnodeDemoDbContext> options)
        : base(options)
    {
    }

    public DbSet<Product> Products => Set<Product>();
}