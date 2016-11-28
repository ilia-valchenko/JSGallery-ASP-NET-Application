using System;

namespace Gallery
{
    [Serializable]
    public class ImageHtmlInfo
    {
        public ImageHtmlInfo(string path, string title, string alt)
        {
            Path = path;
            Title = title;
            Alt = alt;
        }

        public string Path { get; set; }
        public string Title { get; set; }
        public string Alt { get; set; }
    }
}