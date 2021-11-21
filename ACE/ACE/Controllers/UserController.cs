using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using ACE.MODELS;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ACE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private WebContext db;
        public UserController(WebContext context)
        {
            db = context;
        }

        // [HttpGet]
        // public ActionResult<User> Get()
        // {
        //     return Ok(_user);
        // }
        
        [HttpPost("Avatar")]
        public ActionResult<User> AddAvatar(User body)
        {
            var _user = db.Users.FirstOrDefault(x => x.NickName == body.NickName);
            if (_user != null)
                db.Users.Update(_user);
            return Ok(_user);
            // return BadRequest("Пользователь с таким логином и паролем не найден");
        }

        [HttpPost("login")]
        public ActionResult<User> Login(User body)
        {
            var _user = db.Users.FirstOrDefault(x => x.NickName == body.NickName &&
                                                     x.Password == body.Password);
            _user.Avatar = body.Avatar;
            if (_user != null)
                return Ok(_user);
            return BadRequest("Пользователь с таким логином и паролем не найден");
        }
        
        [HttpPost("register")]
        public ActionResult<User> Register(User body)
        {
            db.Users.Add(body);
            db.SaveChanges();
            return Ok(body);
        }
    }
}