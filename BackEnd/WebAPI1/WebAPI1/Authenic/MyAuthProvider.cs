using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using WebAPI1.Models;

namespace WebAPI1.Authenic
{
    public class MyAuthProvider : OAuthAuthorizationServerProvider
    {
        ComputeSha256Hash compute = new ComputeSha256Hash();
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
           
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            var passwordEncryt = compute.encrypt(context.Password);
            DbModels db = new DbModels();
            var userdata = db.USERs.Where(x => x.USERNAME == context.UserName && x.PASSWORD == passwordEncryt && x.STATUS != 0).FirstOrDefault();
            if (userdata != null)
            {

                AuthenticationProperties properties = CreateProperties(userdata.USERNAME, userdata.EMAIL, ""+userdata.STATUS);
                AuthenticationTicket ticket = new AuthenticationTicket(identity, properties);
               
                context.Validated(ticket);
            }
            else
            {


                context.SetError("invalid_grant", "Wrong email or password.");
            }
        }

        public static AuthenticationProperties CreateProperties(string userName, string email, string status)
        {
            IDictionary<string, string> data = new Dictionary<string, string>
        {
            { "userName", userName },
            {"email",email},
            {"status", status }
        };
            return new AuthenticationProperties(data);
        }
        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (KeyValuePair<string, string> property in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(property.Key, property.Value);
            }

            return Task.FromResult<object>(null);
        }
    }


}