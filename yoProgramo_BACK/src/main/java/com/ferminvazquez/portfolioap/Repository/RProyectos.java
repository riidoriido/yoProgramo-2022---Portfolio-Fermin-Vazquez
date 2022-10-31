package com.ferminvazquez.portfolioap.Repository;

import com.ferminvazquez.portfolioap.Entity.Proyectos;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RProyectos extends JpaRepository<Proyectos, Integer> {
    public Optional<Proyectos> findByNombreP(String nombreP);
    public boolean existsByNombreP(String nombreE);
}
