package github.beerzer.resource;

import github.beerzer.dominio.DTO.PedidoDTO;
import github.beerzer.dominio.Pedido;
import github.beerzer.dominio.Produtos;
import github.beerzer.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/pedidos")
@CrossOrigin("http://localhost:4200")
public class PedidoResource {

    @Autowired
    private final PedidoService pedidoService;

    public PedidoResource(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Pedido salvar(@RequestBody @Valid PedidoDTO pedidos){
        return pedidoService.salvar(pedidos);
    }
}
