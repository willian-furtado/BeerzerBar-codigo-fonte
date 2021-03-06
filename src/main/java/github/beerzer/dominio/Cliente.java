package github.beerzer.dominio;

import lombok.Data;
import javax.persistence.*;

@Entity
@Data
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "id_Pessoa")
    private Pessoa pessoa;

}
