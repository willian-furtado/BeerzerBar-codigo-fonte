package github.beerzer.dominio;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Data
@Getter
@Setter
public class Produtos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, name = "nome", length = 150)
    @NotEmpty(message = "{campo.nome.obrigatorio}")
    @NotNull(message = "{campo.nome.obrigatorio}")
    private String nome;

    @Column(nullable = false, name = "codigo", length = 5)
    @NotEmpty(message = "{campo.codigo.obrigatorio}")
    private String codigo;

    @Column(name = "descricao", length = 150)
    private String descricao;

    @Column(nullable = false, name = "qtd")
    @NotNull(message = "{campo.quantidade.obrigatorio}")
    private Long quantidade;

    @Column(nullable = false, name = "preco")
    @NotNull(message = "{campo.preco.obrigatorio}")
    private Double preco;

    @Column(name = "categoria", length = 150)
    @NotEmpty(message = "{campo.categoria.obrigatorio}")
    private String categoria;

}
