using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ACE.MODELS
{
    public class User
    {
        [Key] public int Id { get; set; }
        public string NickName { get; set; }
        public string Avatar { get; set; }
        public string Email { get; set; }

        public int Stars { get; set; }
        public string Password { get; set; }
        public string PasswordConfirm { get; set; }

        public List<Post> Post { get; set; }
    }
}