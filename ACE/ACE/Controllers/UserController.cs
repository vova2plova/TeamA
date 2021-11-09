﻿using System.Collections.Generic;
using System.Diagnostics;
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
        private readonly ILogger<UserController> _logger;
        
        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<User> Get()
        {
            var _user = new User();
            _user.NickName = "Vova2plova";
            _user.Avatar = "img";
            _user.Email = "@";
            _user.Password = "123";
            return Ok(_user);
        }   

        [HttpPost]
        public ActionResult<User> Post(User body)
        {
            if ((body.NickName == "vova2plova") && (body.Password == "123"))
                return Ok(body);
            return BadRequest(body);
        }
    }
}