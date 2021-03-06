package github.beerzer;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableMBeanExport;

@Configuration
public class Config {

    @Bean(name = "applicationName")
    public String applicationName (){
        return "Beerzer Bar";
    }

}
