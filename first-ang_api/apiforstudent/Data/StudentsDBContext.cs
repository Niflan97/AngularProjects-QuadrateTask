
using apiforstudent;
using Microsoft.EntityFrameworkCore;

public class StudentsDBContext : DbContext
{
    public StudentsDBContext(DbContextOptions options) : base(options)
    {
    }
    public DbSet<Students> StudentTable { get; set; }
}