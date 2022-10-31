package com.ferminvazquez.portfolioap.Controller;

import com.ferminvazquez.portfolioap.Dto.dtoProyectos;
import com.ferminvazquez.portfolioap.Entity.Proyectos;
import com.ferminvazquez.portfolioap.Security.Controller.Mensaje;
import com.ferminvazquez.portfolioap.Service.SProyectos;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/proyectos")
@CrossOrigin(origins = "http://localhost:4200")
public class CProyectos {
    @Autowired
    SProyectos sProyectos;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Proyectos>> list(){
        List<Proyectos> list = sProyectos.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoProyectos dtoproj) {
        if(StringUtils.isBlank(dtoproj.getNombreP()))
            return new ResponseEntity(new Mensaje("El campo nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        
        if(sProyectos.existsByNombreP(dtoproj.getNombreP()))
            return new ResponseEntity(new Mensaje("Ya existente"), HttpStatus.BAD_REQUEST);
        
        Proyectos proyectos = new Proyectos(
                dtoproj.getNombreP(),
                dtoproj.getDescripcionP(),
                dtoproj.getImgP());
                
        sProyectos.save(proyectos);
        return new ResponseEntity(new Mensaje("Se agregó correctamente"),HttpStatus.OK);    
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoProyectos dtoproj){
        if(!sProyectos.existsById(id))
            return new ResponseEntity(new Mensaje("Id inexistente"),HttpStatus.BAD_REQUEST);
        
        if(sProyectos.existsByNombreP(dtoproj.getNombreP()) && sProyectos.getByNombreP(dtoproj.getNombreP()).get().getId() != id)
            return new ResponseEntity(new Mensaje("Nombre en uso"),HttpStatus.BAD_REQUEST);
        
        if(StringUtils.isBlank(dtoproj.getNombreP()))
            return new ResponseEntity(new Mensaje("El campo nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        
        Proyectos proyectos = sProyectos.getOne(id).get();
        proyectos.setNombreP(dtoproj.getNombreP());
        proyectos.setDescripcionP(dtoproj.getDescripcionP());
        proyectos.setImgP(dtoproj.getImgP());
        
        sProyectos.save(proyectos);
        return new ResponseEntity(new Mensaje("Experiencia actualizada"), HttpStatus.OK);
    }
}
