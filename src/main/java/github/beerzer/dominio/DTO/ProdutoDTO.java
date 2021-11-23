package github.beerzer.dominio.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProdutoDTO {
    private String categoria;
    private String descricao;
    private String nome;
    private Double preco;
    private Long quantidade;

}
