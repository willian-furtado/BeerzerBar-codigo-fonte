package github.beerzer;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@SpringBootApplication
@RestController
public class Application {

    @Value("${application.name}")
    private String applicationName;

    @GetMapping("/hello")
    public String Hello (){
        return applicationName;
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
