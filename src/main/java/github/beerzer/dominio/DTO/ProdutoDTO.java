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
    public Object getQuantidade() {
        return null;
    }
    public Object getNome() {
        return null;
    }
    public Object getDescricao() {
        return null;
    }
    public String getPreco() {
        return null;
    }
    public Object getCategoria() {
        return null;
    }

}
