using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;

using System.Web.Http;
using System.Web.Http.Cors;
using WebAPI1.Authenic;

[assembly: OwinStartup(typeof(WebAPI1.Startup))]
namespace WebAPI1
{
    
    public class Startup
    {

        public void Configuration(IAppBuilder app)
        {

           app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            var myProvider = new MyAuthProvider();
            OAuthAuthorizationServerOptions options = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/login"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(30),
                Provider = myProvider
            };
            app.UseOAuthAuthorizationServer(options);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());


            HttpConfiguration config = new HttpConfiguration();
            WebApiConfig.Register(config);
        }


    }
}