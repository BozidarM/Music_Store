package rs.ac.singidunum.musicstore_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.musicstore_backend.config.JWToken;
import rs.ac.singidunum.musicstore_backend.entity.Users;
import rs.ac.singidunum.musicstore_backend.model.UsersModel;
import rs.ac.singidunum.musicstore_backend.service.UsersService;

import javax.swing.text.html.parser.Entity;

@RestController
@RequestMapping("users")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @Autowired
    private JWToken jwToken;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("user/{username}")
    @CrossOrigin(origins = "*")
    public Users findByUsername(@PathVariable String username){ return usersService.findByUsername(username); }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public Users insert(@RequestBody UsersModel model){
        return usersService.insert(model);
    }

    @PostMapping("login")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Users> login(@RequestBody UsersModel model){
        try{
            Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(model.getUsername(), model.getPassword()));

            Users user = (Users) auth.getPrincipal();

            return ResponseEntity.ok().header("Access-Control-Expose-Headers", HttpHeaders.AUTHORIZATION)
                    .header("Access-Control-Allow-Headers", HttpHeaders.AUTHORIZATION)
                    .header(HttpHeaders.AUTHORIZATION, jwToken.generateAccessToken(user) ).body(user);

        }catch(BadCredentialsException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public Users update(@RequestBody UsersModel model){ return usersService.update(model); }
}
