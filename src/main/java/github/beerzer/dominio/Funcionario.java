package github.beerzer.dominio;

import lombok.Data;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Funcionario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "id_Pessoa")
    @OneToOne(orphanRemoval = true, fetch = FetchType.LAZY)
    private Pessoa pessoa;

    @Column(name = "matricula")
    @NotNull
    private String matricula;
}
