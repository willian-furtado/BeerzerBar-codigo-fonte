package github.beerzer.dominio;

import lombok.Data;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Gerente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "id_Pessoa")
    private Pessoa pessoa;

    @Column(name = "matricula")
    @NotNull
    private String matricula;
}
