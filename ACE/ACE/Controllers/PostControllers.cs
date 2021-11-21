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
        
        [HttpPost("CreatePost")]
        public ActionResult<Post> Login(Post body)
        {
            var data = DateTime.Now.ToString();
            body.Date = data;
            db.Posts.Add(body);
            db.SaveChanges();
            return Ok(body);
        }
    }
}