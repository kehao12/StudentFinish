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
using WebAPI1.Models;

namespace WebAPI1.Controllers
{
    [Authorize]
    public class INPUT_TYPEController : ApiController
    {
        private DbModels db = new DbModels();
        public INPUT_TYPEController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/INPUT_TYPE
        public IQueryable<INPUT_TYPE> GetINPUT_TYPE()
        {
            return db.INPUT_TYPE;
        }

        // GET: api/INPUT_TYPE/5
        [ResponseType(typeof(INPUT_TYPE))]
        public IHttpActionResult GetINPUT_TYPE(int id)
        {
            INPUT_TYPE iNPUT_TYPE = db.INPUT_TYPE.Find(id);
            if (iNPUT_TYPE == null)
            {
                return NotFound();
            }

            return Ok(iNPUT_TYPE);
        }

        // PUT: api/INPUT_TYPE/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutINPUT_TYPE(int id, INPUT_TYPE iNPUT_TYPE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != iNPUT_TYPE.INTYPE_ID)
            {
                return BadRequest();
            }

            db.Entry(iNPUT_TYPE).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!INPUT_TYPEExists(id))
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

        // POST: api/INPUT_TYPE
        [ResponseType(typeof(INPUT_TYPE))]
        public IHttpActionResult PostINPUT_TYPE(INPUT_TYPE iNPUT_TYPE)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.INPUT_TYPE.Add(iNPUT_TYPE);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = iNPUT_TYPE.INTYPE_ID }, iNPUT_TYPE);
        }

        // DELETE: api/INPUT_TYPE/5
        [ResponseType(typeof(INPUT_TYPE))]
        public IHttpActionResult DeleteINPUT_TYPE(int id)
        {
            INPUT_TYPE iNPUT_TYPE = db.INPUT_TYPE.Find(id);
            if (iNPUT_TYPE == null)
            {
                return NotFound();
            }

            db.INPUT_TYPE.Remove(iNPUT_TYPE);
            db.SaveChanges();

            return Ok(iNPUT_TYPE);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool INPUT_TYPEExists(int id)
        {
            return db.INPUT_TYPE.Count(e => e.INTYPE_ID == id) > 0;
        }
    }
}