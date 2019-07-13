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
    public class PROGRAMController : ApiController
    {
        private DbModels db = new DbModels();
        public PROGRAMController()
        {
            db.Configuration.ProxyCreationEnabled = false;
        }
        // GET: api/PROGRAM
        public IQueryable<PROGRAM> GetPROGRAMS()
        {
            return db.PROGRAMS;
        }

        // GET: api/PROGRAM/5
        [ResponseType(typeof(PROGRAM))]
        public IHttpActionResult GetPROGRAM(int id)
        {
            PROGRAM pROGRAM = db.PROGRAMS.Find(id);
            if (pROGRAM == null)
            {
                return NotFound();
            }

            return Ok(pROGRAM);
        }

        // PUT: api/PROGRAM/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPROGRAM(int id, PROGRAM pROGRAM)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pROGRAM.PRO_ID)
            {
                return BadRequest();
            }

            db.Entry(pROGRAM).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PROGRAMExists(id))
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

        // POST: api/PROGRAM
        [ResponseType(typeof(PROGRAM))]
        public IHttpActionResult PostPROGRAM(PROGRAM pROGRAM)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PROGRAMS.Add(pROGRAM);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (PROGRAMExists(pROGRAM.PRO_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = pROGRAM.PRO_ID }, pROGRAM);
        }

        // DELETE: api/PROGRAM/5
        [ResponseType(typeof(PROGRAM))]
        public IHttpActionResult DeletePROGRAM(int id)
        {
            PROGRAM pROGRAM = db.PROGRAMS.Find(id);
            if (pROGRAM == null)
            {
                return NotFound();
            }

            db.PROGRAMS.Remove(pROGRAM);
            db.SaveChanges();

            return Ok(pROGRAM);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PROGRAMExists(int id)
        {
            return db.PROGRAMS.Count(e => e.PRO_ID == id) > 0;
        }
    }
}