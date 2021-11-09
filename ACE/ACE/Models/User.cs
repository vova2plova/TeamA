using System.Text.Json.Serialization;

namespace ACE.MODELS
{
    public class User
    {
        public string NickName { get; set; }
        public string Avatar { get; set; }
        public string Email { get; set; }
        public int Stars { get; set; }
        public string Password { get; set; }
        public string PasswordConfirm { get; set; }
        
    }
}