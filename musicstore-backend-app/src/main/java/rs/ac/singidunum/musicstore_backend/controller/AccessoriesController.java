package rs.ac.singidunum.musicstore_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.musicstore_backend.entity.Accessories;
import rs.ac.singidunum.musicstore_backend.model.AccessoriesModel;
import rs.ac.singidunum.musicstore_backend.service.AccessoriesService;

import java.util.List;

@RestController
@RequestMapping("accessories")
public class AccessoriesController {

    @Autowired
    private AccessoriesService accessoriesService;

    @GetMapping("all")
    @CrossOrigin(origins = "*")
    public List<Accessories> findAll(){
        return accessoriesService.findAll();
    }

    @GetMapping("product/{id}")
    @CrossOrigin(origins = "*")
    public Accessories findAccessoriesById(@PathVariable("id") String id){
        return this.accessoriesService.findAccessoriesById(id);
    }

    @GetMapping("search/{name}")
    @CrossOrigin(origins = "*")
    public List<Accessories> findAllByName(@PathVariable("name") String name){
        return  accessoriesService.findAllByName(name);
    }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public Accessories insert(@RequestBody AccessoriesModel model){
        return accessoriesService.insert(model);
    }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.accessoriesService.deleteById(id);
    }

    @GetMapping("myaccessories/{seller_username}")
    @CrossOrigin(origins = "*")
    public List<Accessories> findAllBySeller_username(@PathVariable("seller_username") String seller_username){
        return accessoriesService.findAllBySeller_username(seller_username);
    }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public Accessories update(@RequestBody AccessoriesModel model){
        return accessoriesService.update(model);
    }
}
