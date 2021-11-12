﻿using System.ComponentModel.DataAnnotations;
using Castle.Components.DictionaryAdapter;

namespace ACE.MODELS
{
    public class Comment
    {
        public string User { get; set; }
        
        public long Id { get; set; }
        
        public string Date { get; set; }
        
        public string Text { get; set; }
    }
}