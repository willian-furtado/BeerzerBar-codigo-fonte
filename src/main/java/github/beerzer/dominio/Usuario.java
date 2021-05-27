package github.beerzer.dominio;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    @NotNull
    @Column(name = "username", length = 100)
    private String username;

    @NotEmpty
    @NotNull
    @Column(name = "password", length = 8)
    private String password;

    @NotEmpty
    @Email
    @Column(name = "email", length = 100)
    private String email;

}
