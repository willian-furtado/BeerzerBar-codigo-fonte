package github.beerzer.dominio;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Produtos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", length = 150)
    private String nome;

    @Column(name = "descricao", length = 150)
    private String descricao;

    @Column(name = "qtd")
    private Long quantidade;

    @Column(name = "preco")
    private Double preco;

    @Column(name = "categoria", length = 150)
    private String categoria;

    public void setNome(Object nome2) {
    }

    public void setDescricao(Object descricao2) {
    }

    public void setQuantidade(Object quantidade2) {
    }

    public void setPreco(Double valueOf) {
    }

    public void setCategoria(Object categoria2) {
    }

}
