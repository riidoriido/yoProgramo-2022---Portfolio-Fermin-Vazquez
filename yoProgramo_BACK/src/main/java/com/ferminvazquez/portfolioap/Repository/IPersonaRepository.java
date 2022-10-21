
package com.ferminvazquez.portfolioap.Repository;

import com.ferminvazquez.portfolioap.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}
