using System.Collections.Generic;

namespace ACE.MODELS
{
    public class Post
    {
        public string PreviewImage { get; set; }
        public string PreviewText { get; set; }
        public string PreviewHeader { get; set; }
        public string Date { get; set; }
        public string Tag { get; set; }
        public int Stars { get; set; }
        public User _User { get; set; }
        public string Header { get; set; }
        public string Text { get; set; }
        public List<Comment> Comments { get; set; }
    }
}