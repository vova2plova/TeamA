using ACE.MODELS;
using Microsoft.EntityFrameworkCore;

namespace ACE
{
    public class WebContext : DbContext
    {
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<User> Users { get; set; }
        
        public WebContext()
        {
            Database.EnsureCreated();
        }
        
        public WebContext(DbContextOptions<WebContext> options) : base(options)
        {
            
        }
    }
}