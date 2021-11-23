package github.beerzer.dominio;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Data
@Getter
@Setter
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

}
