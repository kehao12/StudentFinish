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
    public class CONTACTController : ApiController
    {
        private DbModels db = new DbModels();
        public CONTACTController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/CONTACT
        public IQueryable<CONTACT> GetCONTACTs()
        {
            return db.CONTACTs;
        }

        // GET: api/CONTACT/5
        [ResponseType(typeof(CONTACT))]
        public IHttpActionResult GetCONTACT(string id)
        {
            CONTACT cONTACT = db.CONTACTs.FirstOrDefault(x => x.STU_ID==id);
            if (cONTACT == null)
            {
                return NotFound();
            }

            return Ok(cONTACT);
        }

        // PUT: api/CONTACT/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCONTACT(int id, CONTACT cONTACT)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cONTACT.CONTACT_ID)
            {
                return BadRequest();
            }

            db.Entry(cONTACT).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CONTACTExists(id))
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

        // POST: api/CONTACT
        [ResponseType(typeof(CONTACT))]
        public IHttpActionResult PostCONTACT(CONTACT cONTACT)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CONTACTs.Add(cONTACT);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CONTACTExists(cONTACT.CONTACT_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = cONTACT.CONTACT_ID }, cONTACT);
        }

        // DELETE: api/CONTACT/5
        [ResponseType(typeof(CONTACT))]
        public IHttpActionResult DeleteCONTACT(int id)
        {
            CONTACT cONTACT = db.CONTACTs.Find(id);
            if (cONTACT == null)
            {
                return NotFound();
            }

            db.CONTACTs.Remove(cONTACT);
            db.SaveChanges();

            return Ok(cONTACT);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CONTACTExists(int id)
        {
            return db.CONTACTs.Count(e => e.CONTACT_ID == id) > 0;
        }
    }
}