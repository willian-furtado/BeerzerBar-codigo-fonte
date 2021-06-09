package github.beerzer.dominio.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PedidoDTO {
    private String nome;

    private Double preco;

    private Long quantidade;

}
