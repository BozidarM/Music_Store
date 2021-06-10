package rs.ac.singidunum.musicstore_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.musicstore_backend.entity.AdditionalEquipment;
import rs.ac.singidunum.musicstore_backend.model.AdditionalEquipmentModel;
import rs.ac.singidunum.musicstore_backend.service.AdditionalEquipmentService;

import java.util.List;

@RestController
@RequestMapping("additionalEquipment")
public class AdditionalEquipmentController {

    @Autowired
    private AdditionalEquipmentService additionalEquipmentService;

    @GetMapping("all")
    @CrossOrigin(origins = "*")
    public List<AdditionalEquipment> findAll(){
        return additionalEquipmentService.findAll();
    }

    @GetMapping("product/{id}")
    @CrossOrigin(origins = "*")
    public AdditionalEquipment findAdditionalEquipmentById(@PathVariable("id") String id){
        return this.additionalEquipmentService.findAdditionalEquipmentById(id);
    }

    @GetMapping("search/{name}")
    @CrossOrigin(origins = "*")
    public List<AdditionalEquipment> findAllByName(@PathVariable("name") String name){
        return  additionalEquipmentService.findAllByName(name);
    }

    @PostMapping("insert")
    @CrossOrigin(origins = "*")
    public AdditionalEquipment insert(@RequestBody AdditionalEquipmentModel model){
        return additionalEquipmentService.insert(model);
    }

    @DeleteMapping("delete/{id}")
    @CrossOrigin(origins = "*")
    public void deleteById(@PathVariable("id") String id){
        this.additionalEquipmentService.deleteById(id);
    }

    @GetMapping("myequipment/{seller_username}")
    @CrossOrigin(origins = "*")
    public List<AdditionalEquipment> findAllBySeller_username(@PathVariable("seller_username") String seller_username){
        return additionalEquipmentService.findAllBySeller_username(seller_username);
    }

    @PostMapping("update")
    @CrossOrigin(origins = "*")
    public AdditionalEquipment update(@RequestBody AdditionalEquipmentModel model){
        return additionalEquipmentService.update(model);
    }
}
