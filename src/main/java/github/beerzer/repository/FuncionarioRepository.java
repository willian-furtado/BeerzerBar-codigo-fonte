package github.beerzer.repository;

import github.beerzer.dominio.Funcionario;
import github.beerzer.dominio.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {
}
