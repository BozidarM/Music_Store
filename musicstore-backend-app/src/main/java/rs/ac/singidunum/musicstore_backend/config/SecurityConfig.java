package rs.ac.singidunum.musicstore_backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import rs.ac.singidunum.musicstore_backend.service.UsersService;

import javax.servlet.http.HttpServletResponse;

@Configuration
@EnableConfigurationProperties
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UsersService usersService;

    @Autowired
    TokenFilter tokenFilter;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().exceptionHandling().
                authenticationEntryPoint((httpServletRequest, httpServletResponse, e) -> { httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, e.getMessage() ); } ).and()
                .authorizeRequests()
                .antMatchers("/users/login", "/users/insert",
                                        "/accessories/all", "/instruments/all", "/softwares/all", "/additionalEquipment/all",
                                        "/accessories/search/{name}", "/instruments/search/{name}", "/additionalEquipment/search/{name}", "/softwares/search/{name}",
                                        "/accessories/product/{id}", "/instruments/product/{id}", "/additionalEquipment/product/{id}", "/softwares/product/{id}").permitAll()
                .anyRequest().authenticated()
                .and().cors().and().addFilterBefore(tokenFilter, UsernamePasswordAuthenticationFilter.class);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(s -> usersService.loadUserByUsername(s));
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
