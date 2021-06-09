package github.beerzer.service;

import github.beerzer.dominio.DTO.PedidoDTO;
import github.beerzer.dominio.DTO.ProdutoDTO;
import github.beerzer.dominio.Pedido;
import github.beerzer.dominio.Produtos;
import github.beerzer.repository.PedidoRepository;
import github.beerzer.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public Pedido salvar(PedidoDTO pedidoDTO) {
        Pedido pedido = new Pedido();
        pedido.setNome(pedidoDTO.getNome());
        pedido.setQuantidade(pedidoDTO.getQuantidade());
        pedido.setPreco(Double.valueOf(pedidoDTO.getPreco()));
        return pedidoRepository.save(pedido);
    }
}
