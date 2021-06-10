package rs.ac.singidunum.musicstore_backend.model;

import lombok.Data;

@Data
public class AccessoriesModel {
    private String id;
    private String accessory;
    private String name;
    private String manufacturer;
    private double price;
    private String description;
    private String image;
    private String seller_username;
}
