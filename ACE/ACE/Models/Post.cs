using System.Collections.Generic;
using Castle.Components.DictionaryAdapter;

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
        
        public string User { get; set; }
        
        public long Id { get; set; }
        
        public string Header { get; set; }
        
        public string Text { get; set; }
        public List<Comment> Comments { get; set; }
    }
}