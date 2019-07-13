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
    public class DOCUMENTController : ApiController
    {
        private DbModels db = new DbModels();
        public DOCUMENTController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/DOCUMENT
        public IQueryable<DOCUMENT> GetDOCUMENTs()
        {
            return db.DOCUMENTs;
        }

        // GET: api/DOCUMENT/5
        [ResponseType(typeof(Object))]
        public IHttpActionResult GetDOCUMENT(string id)
        {
            Object dOCUMENT = db.DOCUMENTs.Where(x => x.STU_ID==id).ToList();
            if (dOCUMENT == null)
            {
                return NotFound();
            }

            return Ok(dOCUMENT);
        }

        // PUT: api/DOCUMENT/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDOCUMENT(string id, DOCUMENT dOCUMENT)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != dOCUMENT.STU_ID)
            {
                return BadRequest();
            }

            db.Entry(dOCUMENT).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DOCUMENTExists(id))
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

        // POST: api/DOCUMENT
        [ResponseType(typeof(DOCUMENT))]
        public IHttpActionResult PostDOCUMENT(DOCUMENT dOCUMENT)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.DOCUMENTs.Add(dOCUMENT);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (DOCUMENTExists(dOCUMENT.STU_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = dOCUMENT.STU_ID }, dOCUMENT);
        }

        // DELETE: api/DOCUMENT/5
        [ResponseType(typeof(DOCUMENT))]
        public IHttpActionResult DeleteDOCUMENT(string id)
        {
            DOCUMENT dOCUMENT = db.DOCUMENTs.Find(id);
            if (dOCUMENT == null)
            {
                return NotFound();
            }

            db.DOCUMENTs.Remove(dOCUMENT);
            db.SaveChanges();

            return Ok(dOCUMENT);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DOCUMENTExists(string id)
        {
            return db.DOCUMENTs.Count(e => e.STU_ID == id) > 0;
        }
    }
}