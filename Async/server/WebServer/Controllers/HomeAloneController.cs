using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebServer.Controllers
{
    public class HomeAloneController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Get()
        {
            var response = new HttpResponseMessage();
            response.Content = new StringContent("This is from HomeAlone This is from HomeAlone This is from HomeAlone This is from HomeAlone This is from HomeAlone This is from HomeAlone This is from HomeAlone This is from HomeAlone This is from HomeAlone This is from HomeAlone");
            return response;
        }

    }
}
