using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogInController : ControllerBase
    {
        [HttpPost("login")]
        public IActionResult Login([FromBody]LoginDTO loginDTO)
        {
            var exists = IsUserCorrect(loginDTO);
            if (exists)
            {
                return Ok(new { Response="works" });
            }
            return Unauthorized();
        }
        private bool IsUserCorrect(LoginDTO loginDTO)
        {
            var users = new List<LoginDTO>() { new LoginDTO { Username = "admin", Password = "admin" }, new LoginDTO { Username = "user", Password = "user" } };
            var exists = users.Any(x => x.Username == loginDTO.Username && x.Password == loginDTO.Password);
            return exists;
        }
    }
}