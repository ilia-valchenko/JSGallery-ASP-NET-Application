using System;
using System.Collections.Generic;
using System.Configuration;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace Gallery.Controllers
{
    public class GalleryController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AjaxImageLoader(int startIndex)
        {
            string path = ConfigurationManager.AppSettings["ImageGalleryPath"];

            if(!Directory.Exists(Server.MapPath(path)))
                throw new DirectoryNotFoundException();

            var dir = new DirectoryInfo(Server.MapPath(path));
            FileInfo[] files = dir.GetFiles();
            ImageHtmlInfo[] images = new ImageHtmlInfo[files.Length - startIndex];

            for (int i = startIndex, j = 0; i < files.Length; i++, j++)
            {
                string imagePath = files[i].Name;
                StringBuilder alt = new StringBuilder(files[i].Name);

                while (alt[alt.Length - 1] != '.')
                    alt.Remove(alt.Length - 1, 1);

                alt.Remove(alt.Length - 1, 1);

                string title = alt.ToString();
                title = title.Replace('_', ' ');

                images[j] = new ImageHtmlInfo(imagePath, title, alt.ToString());
            }

            return Json(images);
        }
    }
}