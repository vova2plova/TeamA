using System;
using System.Data.Entity;
using System.Linq;
using ACE.MODELS;
using Castle.Core.Internal;
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

        [HttpGet("GetPost")]
        public ActionResult<Post> GetPost(long id)
        {
            var post = db.Posts.Find(id);
            return Ok(post);
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
            var date = DateTime.Now.ToString();
            body.Date = date;
            db.Posts.Add(body);
            db.SaveChanges();
            return Ok(body);
        }
    }
}