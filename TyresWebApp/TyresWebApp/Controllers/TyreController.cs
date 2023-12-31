﻿using Microsoft.AspNetCore.Mvc;
using TyresWebApp.Interfaces;
using TyresWebApp.dto;
using AutoMapper;
using TyresWebApp.Models;

namespace TyresWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TyreController : Controller
    {
        private readonly ITyreRepository _tyreRepository;
        private readonly IMapper _mapper;
        public TyreController(ITyreRepository tyreRepository, IMapper mapper)
        {
            _tyreRepository = tyreRepository;
            _mapper = mapper;
        }

        [HttpPost]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult CreateTyre([FromBody] TyreDto tyreCreate)
        { 
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var tyreMap = _mapper.Map<TyreModels>(tyreCreate);

            if (!_tyreRepository.CreateTyre(tyreMap))
                {
                    ModelState.AddModelError("", "Something went wrong while saving");
                    return StatusCode(500, ModelState);
                }

            return Ok("Succesfuly created");
        }
        
    }
}
 