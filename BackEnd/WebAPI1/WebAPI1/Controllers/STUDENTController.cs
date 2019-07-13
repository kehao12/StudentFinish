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
    public class STUDENTController : ApiController
    {
        private DbModels db = new DbModels();
        public STUDENTController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/STUDENT
        public IQueryable<STUDENT> GetSTUDENTs()
        {
            return db.STUDENTs;
        }

        // GET: api/STUDENT/5
        [ResponseType(typeof(STUDENT))]
        public IHttpActionResult GetSTUDENT(string id)
        {
            STUDENT sTUDENT = db.STUDENTs.Find(id);
            if (sTUDENT == null)
            {
                return NotFound();
            }

            return Ok(sTUDENT);
        }

        // PUT: api/STUDENT/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSTUDENT(string id, STUDENT sTUDENT)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sTUDENT.STU_ID)
            {
                return BadRequest();
            }

            db.Entry(sTUDENT).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!STUDENTExists(id))
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

        // POST: api/STUDENT
        [ResponseType(typeof(STUDENT))]
        public IHttpActionResult PostSTUDENT(STUDENT sTUDENT)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.STUDENTs.Add(sTUDENT);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (STUDENTExists(sTUDENT.STU_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = sTUDENT.STU_ID }, sTUDENT);
        }

        // DELETE: api/STUDENT/5
        [ResponseType(typeof(STUDENT))]
        public IHttpActionResult DeleteSTUDENT(string id)
        {
            STUDENT sTUDENT = db.STUDENTs.Find(id);
            if (sTUDENT == null)
            {
                return NotFound();
            }

            db.STUDENTs.Remove(sTUDENT);
            db.SaveChanges();

            return Ok(sTUDENT);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool STUDENTExists(string id)
        {
            return db.STUDENTs.Count(e => e.STU_ID == id) > 0;
        }
    }
}