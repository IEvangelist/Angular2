using Microsoft.AspNet.Mvc;

namespace Angular2.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {

            return View();
        }
    }
}