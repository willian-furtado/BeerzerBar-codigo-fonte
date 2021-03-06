package github.beerzer.dominio;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Data
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "nome", length = 150)
    private String nome;

    @NotNull
    @Email
    @Column(name = "email", length = 150)
    private String email;

    @NotNull
    @Column(name = "senha", length = 8)
    private String senha;

    @NotNull
    @Column(name = "cpf", length = 11)
    private String cpf;

    @Column(name = "data_Nascimento")
    private LocalDate dataNascimento;

    @NotNull
    @Column(name = "tipo")
    private Long tipo;


}
