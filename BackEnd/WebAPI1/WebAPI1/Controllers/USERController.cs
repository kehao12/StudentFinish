using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI1.Authenic;
using WebAPI1.Models;
using WebAPI1.ViewModels;

namespace WebAPI1.Controllers
{
    [Authorize]
    public class USERController : ApiController
    {
        private DbModels db = new DbModels();
        private ComputeSha256Hash compute = new ComputeSha256Hash();
        private UserChangePwRes userChangePwRes = new UserChangePwRes();
        private UserRes userRes = new UserRes();
        public USERController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/USER
        public IQueryable<USER> GetUSERs()
        {
            return db.USERs;
        }

        // GET: api/USER/5
        [ResponseType(typeof(USER))]
        public IHttpActionResult GetUSER(string id)
        {
            USER uSER = db.USERs.Find(id);
            if (uSER == null)
            {
                return NotFound();
            }

            return Ok(uSER);
        }

        // PUT: api/USER/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUSER(string id, USER uSER)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != uSER.USERNAME)
            {
                return BadRequest();
            }
            uSER.PASSWORD = (new ComputeSha256Hash()).encrypt(uSER.PASSWORD);
            db.Entry(uSER).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!USERExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/USER
        [ResponseType(typeof(USER))]
        public IHttpActionResult PostUSER(USER uSER)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            uSER.PASSWORD = (new ComputeSha256Hash()).encrypt(uSER.PASSWORD);
            db.USERs.Add(uSER);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (USERExists(uSER.USERNAME))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = uSER.USERNAME }, uSER);
        }

        // DELETE: api/USER/5
        [ResponseType(typeof(USER))]
        public IHttpActionResult DeleteUSER(string id)
        {
            USER uSER = db.USERs.Find(id);
            if (uSER == null)
            {
                return NotFound();
            }

            db.USERs.Remove(uSER);
            db.SaveChanges();

            return Ok(uSER);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Route("api/ChangePassWord")]
        [ResponseType(typeof(UserChangePwRes))]
        public IHttpActionResult PostPW(UserRequest uSER)
        {
            
            USER user = db.USERs.Where(x=> x.USERNAME == uSER.username).FirstOrDefault();
            if(user == null)
            {
                userChangePwRes.status = 1;
                userChangePwRes.message = "username wrong";
                return Ok(userChangePwRes);
            }
            else
            {
                if(user.PASSWORD.Equals(compute.encrypt(uSER.currentPassword)))
                {
                    user.PASSWORD = compute.encrypt(uSER.newPassword);
                    db.Entry(user).State = EntityState.Modified;
                    db.SaveChanges();
                    userChangePwRes.status = 0;
                    userChangePwRes.message = "change password success ! ";
                }
                else
                {
                    userChangePwRes.status = 2;
                    userChangePwRes.message = "error : wrong current password !";
                    return Ok(userChangePwRes);
                }
            }
            return Ok(userChangePwRes);

        }

        [Route("api/myUser")]
        [ResponseType(typeof(UserRes))]
        public IHttpActionResult getU(string username)
        {

            USER user = db.USERs.Where(x => x.USERNAME == username).FirstOrDefault();
            userRes.FIRST_NAME = user.FIRST_NAME;
            userRes.LAST_NAME = user.LAST_NAME;
            userRes.BIRTH_DAY = user.BIRTH_DAY;
            userRes.GENDER = user.GENDER;
            userRes.PHONE = user.PHONE;
            userRes.EMAIL = user.EMAIL;
            userRes.ADDRESS = user.ADDRESS;

            return Ok(userRes);

        }

        [Route("api/updateUser")]
        [ResponseType(typeof(UserRes))]
        public IHttpActionResult postUser(USER uSER)
        {

            USER user = db.USERs.Where(x => x.USERNAME == uSER.USERNAME).FirstOrDefault();
            user.FIRST_NAME = uSER.FIRST_NAME;
            user.LAST_NAME = uSER.LAST_NAME;
            user.BIRTH_DAY = uSER.BIRTH_DAY;
            user.GENDER = uSER.GENDER;
            user.PHONE = uSER.PHONE;
            user.EMAIL = uSER.EMAIL;
            user.ADDRESS = uSER.ADDRESS;
            db.Entry(user).State = EntityState.Modified;
            db.SaveChanges();
            return Ok(uSER);

        }


        private bool USERExists(string id)
        {
            return db.USERs.Count(e => e.USERNAME == id) > 0;
        }
    }
}