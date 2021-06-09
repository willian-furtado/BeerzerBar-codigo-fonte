package github.beerzer.repository;

import github.beerzer.dominio.Pedido;
import github.beerzer.dominio.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido, Long> {
}
