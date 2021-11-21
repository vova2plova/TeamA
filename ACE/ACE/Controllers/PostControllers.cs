using System;
using System.Linq;
using ACE.MODELS;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ACE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private WebContext db;
        public PostController(WebContext context)
        {
            db = context;
        }
        
        
        
        [HttpGet("AboutAll")]
        public ActionResult<Post[]> GetAll()
        {
            var posts = db.Posts.ToArray();
            return Ok(posts);
        }
        
        [HttpPost("CreatePost")]
        public ActionResult<Post> Post(Post body)
        {
            var data = DateTime.Now.ToString();
            body.Date = data;
            db.Posts.Add(body);
            db.SaveChanges();
            return Ok(body);
        }
    }
}